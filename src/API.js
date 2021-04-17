import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '28e53f39d27517a56dacf291495ec516',
    language: 'en-US',
  },
});

export const moviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  topRated: () => api.get('movie/top_rated'),
  popular: () => api.get('movie/popular'),
  detailMovies: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  searchMovies: (keyword) =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(keyword),
      },
    }),
};

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  detailShows: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  searchShows: (keyword) =>
    api.get('search/tv', {
      params: {
        query: encodeURIComponent(keyword),
      },
    }),
};
