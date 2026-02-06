import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Film, TrendingUp, TrendingDown, Minus, Clock, Calendar, Star, User, Quote } from 'lucide-react';
import { searchMovies, getMovieById, type Movie } from '../data/moviesDatabase';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getMoviePoster } from '../utils/posterMapping';

export function MovieInsights() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [posterUrl, setPosterUrl] = useState<string>('');
  const searchRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search for movies as user types
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const results = searchMovies(searchQuery).slice(0, 8);
      setSuggestions(results);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSelectMovie = async (movie: Movie) => {
    setIsLoading(true);
    setSearchQuery(movie.title);
    setShowSuggestions(false);
    
    // Simulate loading
    setTimeout(() => {
      setSelectedMovie(movie);
      setIsLoading(false);
    }, 800);
  };

  const calculateOverallSentiment = (movie: Movie): { sentiment: string; color: string; icon: React.ReactNode } => {
    const positiveCount = movie.reviews.filter(r => r.sentiment === 'positive').length;
    const negativeCount = movie.reviews.filter(r => r.sentiment === 'negative').length;
    const neutralCount = movie.reviews.filter(r => r.sentiment === 'neutral').length;

    if (positiveCount > negativeCount && positiveCount > neutralCount) {
      return { 
        sentiment: 'Positive', 
        color: 'from-green-500 to-emerald-500',
        icon: <TrendingUp className="w-6 h-6" />
      };
    } else if (negativeCount > positiveCount) {
      return { 
        sentiment: 'Negative', 
        color: 'from-red-500 to-rose-500',
        icon: <TrendingDown className="w-6 h-6" />
      };
    } else {
      return { 
        sentiment: 'Mixed', 
        color: 'from-yellow-500 to-amber-500',
        icon: <Minus className="w-6 h-6" />
      };
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-2">Movie Intelligence</h2>
        <p className="text-gray-400">
          Search from 100+ Hollywood and Bollywood movies
        </p>
      </motion.div>

      {/* Search bar */}
      <motion.div
        ref={searchRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative mb-12"
      >
        <div className="relative">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery && setShowSuggestions(true)}
            placeholder="Search for a movie... (e.g., Inception, Dangal, Avatar, 3 Idiots, RRR)"
            className="w-full h-16 pl-14 pr-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
          />
        </div>

        {/* Autocomplete suggestions */}
        <AnimatePresence>
          {showSuggestions && suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-50 w-full mt-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              {suggestions.map((movie, index) => (
                <motion.button
                  key={movie.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => handleSelectMovie(movie)}
                  className="w-full px-6 py-4 flex items-center gap-4 hover:bg-white/5 transition-all border-b border-white/5 last:border-b-0"
                >
                  <Film className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="font-medium text-white">{movie.title}</div>
                    <div className="text-sm text-gray-400">
                      {movie.year} • {movie.genre.slice(0, 2).join(', ')} • {movie.industry}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{movie.rating}%</span>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Loading state */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20"
        >
          <div className="relative">
            <div className="w-20 h-20 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
            <Film className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-purple-400" />
          </div>
          <p className="mt-6 text-gray-400">Loading movie data...</p>
        </motion.div>
      )}

      {/* Movie details */}
      {selectedMovie && !isLoading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden"
        >
          <div className="p-6 md:p-8">
            {/* Movie info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col"
            >
              {/* Title and basic info */}
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {selectedMovie.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedMovie.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="line-clamp-1">{selectedMovie.genre.join(' • ')}</span>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  <span className="font-medium text-gray-300">Directed by:</span> {selectedMovie.director}
                </div>
              </div>

              {/* Rating and sentiment */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
                {/* Overall rating */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-400">Overall</span>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    {selectedMovie.rating}%
                  </div>
                </div>

                {/* Critics score */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-gray-400">Critics</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-400">
                    {selectedMovie.criticsScore}%
                  </div>
                </div>

                {/* Audience score */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-gray-400">Audience</span>
                  </div>
                  <div className="text-3xl font-bold text-purple-400">
                    {selectedMovie.audienceScore}%
                  </div>
                </div>
              </div>

              {/* Sentiment analysis */}
              <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-xl p-6 border border-white/10 mb-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  Sentiment Analysis
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${calculateOverallSentiment(selectedMovie).color} bg-clip-text text-transparent`}>
                      {calculateOverallSentiment(selectedMovie).sentiment}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      Based on {selectedMovie.reviews.length} reviews
                    </div>
                  </div>
                  <div className={`relative p-4 rounded-full bg-gradient-to-r ${calculateOverallSentiment(selectedMovie).color} bg-opacity-20`}>
                    {calculateOverallSentiment(selectedMovie).icon}
                    <div className={`absolute inset-0 blur-xl bg-gradient-to-r ${calculateOverallSentiment(selectedMovie).color} opacity-50`} />
                  </div>
                </div>

                {/* Sentiment breakdown */}
                <div className="mt-4 space-y-2">
                  {[
                    { label: 'Positive', count: selectedMovie.reviews.filter(r => r.sentiment === 'positive').length, color: 'bg-green-500' },
                    { label: 'Neutral', count: selectedMovie.reviews.filter(r => r.sentiment === 'neutral').length, color: 'bg-yellow-500' },
                    { label: 'Negative', count: selectedMovie.reviews.filter(r => r.sentiment === 'negative').length, color: 'bg-red-500' }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="text-sm text-gray-400 w-20">{item.label}</span>
                      <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(item.count / selectedMovie.reviews.length) * 100}%` }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className={`h-full ${item.color}`}
                        />
                      </div>
                      <span className="text-sm font-medium text-white w-8">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cast */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-400 mb-2">STARRING</h3>
                <p className="text-white">{selectedMovie.cast.join(', ')}</p>
              </div>

              {/* Reviews */}
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Quote className="w-5 h-5 text-purple-400" />
                  Featured Reviews
                </h3>
                <div className="space-y-3">
                  {selectedMovie.reviews.slice(0, 3).map((review, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="bg-white/5 rounded-lg p-4 border border-white/5"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <p className="text-sm text-gray-300 italic">"{review.text}"</p>
                        <div className={`px-2 py-1 rounded-md text-xs font-medium flex-shrink-0 ${
                          review.sentiment === 'positive' 
                            ? 'bg-green-500/20 text-green-400' 
                            : review.sentiment === 'negative'
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {review.sentiment}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        — {review.author} • {review.source}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}