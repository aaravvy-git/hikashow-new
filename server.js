const express = require("express");
const fetch = require("node-fetch"); // For Node versions < 18; if using Node 18+, you can use the global fetch.
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// TMDB Proxy + API Key
const API_KEY = "df0daedd7538a65a227659c13a67d152";
const BASE_URL = "https://tmdbapi.sakshamchugh.com/3";

// Set up EJS and views folder
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

/**
 * Home route: Fetch trending, now playing, popular, top rated, and upcoming movies.
 */
app.get("/", async (req, res) => {
  try {
    const trendingRes = fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    const nowPlayingRes = fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&region=IN`);
    const popularRes = fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&region=IN`);
    const topRatedRes = fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&region=IN`);
    const upcomingRes = fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&region=IN`);

    const responses = await Promise.all([trendingRes, nowPlayingRes, popularRes, topRatedRes, upcomingRes]);
    const data = await Promise.all(responses.map(response => response.json()));

    const trendingMovies = data[0].results || [];
    const nowPlayingMovies = data[1].results || [];
    const popularMovies = data[2].results || [];
    const topRatedMovies = data[3].results || [];
    const upcomingMovies = data[4].results || [];

    res.render("index", { trendingMovies, nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies });
  } catch (error) {
    console.error("Error fetching home data:", error);
    res.status(500).send("Server Error: Unable to fetch data");
  }
});

/**
 * API Search route: Uses multi-search so that both movies and TV shows are returned.
 */
app.get("/api/search", async (req, res) => {
  try {
    const query = req.query.query || "";
    if (!query) {
      return res.json({ results: [] });
    }
    const response = await fetch(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    const results = data.results || [];
    res.json({ results });
  } catch (error) {
    console.error("Error in /api/search:", error);
    res.status(500).json({ results: [] });
  }
});

/**
 * Details route: Fetch details for a movie or TV show with credits, external_ids, and videos.
 * URL format: /details/:type/:id   where :type is either "movie" or "tv".
 */
app.get("/details/:type/:id", async (req, res) => {
  try {
    const { type, id } = req.params;
    if (!["movie", "tv"].includes(type)) {
      return res.status(400).send("Invalid type. Must be 'movie' or 'tv'.");
    }
    const url = `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&append_to_response=credits,external_ids,videos`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.success === false) {
      return res.status(404).send("Not found");
    }
    res.render("details", { type, details: data });
  } catch (error) {
    console.error("Error fetching details:", error);
    res.status(500).send("Server Error: Unable to fetch details");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
