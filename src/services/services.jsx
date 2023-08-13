import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  method: 'GET',
  params: { include_adult: 'false', language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2IyOGI2N2ZhY2YwZGUwZGVhMWI1YzIwYjQzODJmYiIsInN1YiI6IjY0OGE4NjRkMjYzNDYyMDE0ZTU2MDkxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IGRpPwwg9WreG7ODGxMmPXdHj3eBwMPKy6uxkDfpKQ4',
  },
};

export async function getDayTrendMovies() {
  const { data } = await axios('trending/all/day?', options);
  return data.results;
}

export async function getMovieByQuery(query, page = 1) {
  const { data } = await axios(
    `search/movie?query=${query}&page=${page}`,
    options
  );
  return data.results;
}

export async function getMovieDetails(id) {
  const { data } = await axios(`movie/${id}`, options);
  return data;
}

export async function getMovieCast(id) {
  const { data } = await axios(`movie/${id}/credits`, options);
  return data;
}

export async function getMovieReviews(id, page = 1) {
  const { data } = await axios(`movie/${id}/reviews?page=${page}`, options);
  return data;
}
