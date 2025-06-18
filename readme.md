# 🎬 HikaShow - Netflix-like Movie Streaming Platform

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18+-blue.svg)](https://expressjs.com/)
[![EJS](https://img.shields.io/badge/EJS-3.1+-orange.svg)](https://ejs.co/)
[![TMDB API](https://img.shields.io/badge/TMDB%20API-3.0-red.svg)](https://www.themoviedb.org/documentation/api)

A modern, responsive movie streaming website built with Node.js and Express, featuring a Netflix-inspired UI with real-time search, watchlist management, and multi-server video streaming capabilities.

## ✨ Features

### 🎯 Core Functionality
- **Movie Discovery**: Browse trending, now playing, popular, and top-rated movies
- **Real-time Search**: Live search with debounced API calls for movies and TV shows
- **Detailed Information**: Comprehensive movie/show details with cast, reviews, and metadata
- **Multi-Server Streaming**: Three different video servers for reliable playback
- **Watchlist Management**: Save and manage your favorite content
- **Watch History**: Track previously watched content automatically

### 🎨 User Interface
- **Netflix-inspired Design**: Modern, dark theme with gradient backgrounds
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Carousel**: Auto-sliding banner with trending movies
- **Smooth Animations**: CSS transitions and hover effects
- **Live Search Dropdown**: Real-time search results with movie posters

### 🔧 Technical Features
- **TMDB API Integration**: Powered by The Movie Database API
- **Server-side Rendering**: EJS templating for dynamic content
- **Cookie-based Storage**: Persistent watchlist and history using browser cookies
- **Multi-server Video**: Fallback video servers for uninterrupted streaming
- **Indian Content Focus**: Filtered for Indian movies and regional content

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/hikashow.git
   cd hikashow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
hikashow/
├── server.js              # Main Express server
├── package.json           # Dependencies and scripts
├── public/
│   └── css/
│       └── styles.css     # Main stylesheet
└── views/
    ├── index.ejs          # Homepage with carousel
    ├── details.ejs        # Movie/show details page
    ├── watch.ejs          # Video player page
    ├── watchlist.ejs      # User watchlist
    └── search.ejs         # Search results page
```

## 🛠️ Technology Stack

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **EJS**: Embedded JavaScript templating
- **node-fetch**: HTTP client for API calls

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients and animations
- **Vanilla JavaScript**: Interactive functionality
- **Google Fonts**: Kanit font family

### APIs & Services
- **TMDB API**: Movie and TV show data
- **TMDB Proxy**: Custom proxy for API calls
- **Multiple Video Servers**: 
  - Server 1: Custom movie API
  - Server 2: Vidzee.wtf
  - Server 3: Flicky.host

## 🎮 Key Features Explained

### 🎬 Movie Carousel
- Auto-sliding banner showcasing trending movies
- Manual navigation controls
- Gradient overlays for text readability
- Responsive design for all screen sizes

### 🔍 Live Search
- Debounced search to prevent excessive API calls
- Real-time results with movie posters
- Support for both movies and TV shows
- Dropdown interface with hover effects

### 📋 Watchlist System
- Cookie-based storage (30-day expiration)
- Add/remove functionality
- Persistent across browser sessions
- Dedicated watchlist page

### 🎥 Multi-Server Video Player
- Three different video servers for redundancy
- Automatic fallback system
- Server selection interface
- Support for both movies and TV shows

### 📱 Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly navigation
- Optimized for all device orientations

## 🎨 UI/UX Highlights

### Design Elements
- **Dark Theme**: Netflix-inspired dark color scheme
- **Gradient Backgrounds**: Dynamic visual appeal
- **Smooth Transitions**: CSS animations and hover effects
- **Typography**: Google Fonts integration with Kanit
- **Icons**: Unicode symbols for buttons and indicators

### User Experience
- **Intuitive Navigation**: Clear menu structure
- **Visual Feedback**: Hover states and loading indicators
- **Accessibility**: Semantic HTML and keyboard navigation
- **Performance**: Optimized images and lazy loading

## 🔧 Configuration

### Environment Variables
The application uses the following configuration:

```javascript
const PORT = process.env.PORT || 3000;
const API_KEY = "df0daedd7538a65a227659c13a67d152";
const BASE_URL = "https://tmdbapi.sakshamchugh.com/3";
```

### API Endpoints

| Endpoint | Description |
|----------|-------------|
| `/` | Homepage with movie categories |
| `/api/search` | Live search API |
| `/details/:type/:id` | Movie/show details page |
| `/watch/:type/:id` | Video player page |
| `/watchlist` | User watchlist |

## 🚀 Deployment

### Local Development
```bash
npm start
```

### Production Deployment
1. Set environment variables
2. Install dependencies: `npm install --production`
3. Start server: `npm start`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **TMDB**: For providing comprehensive movie and TV show data
- **Netflix**: Design inspiration for the user interface
- **Google Fonts**: Typography resources
- **Express.js Community**: Framework and documentation

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact: [mail@yourcat.tech]

---

**Made with ❤️ for movie enthusiasts everywhere** 
