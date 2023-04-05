async function getMovies(page) {
  const URL_BASE = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=${page}`;
  try {
    const response = await fetch(URL_BASE, { method: "GET" });
    if (!response.ok) {
      throw Error("Error");
    }
    return response.json();
  } catch (error) {
    throw Error("Error");
  }
}
async function getMoviesBySearch(name, page) {
  const URL_BASE = `https://api.themoviedb.org/3/search/movie?api_key=${
    process.env.API_KEY
  }&language=en-US&page=${page ? page : 1}&include_adult=false&query=${name}
  `;
  try {
    const response = await fetch(URL_BASE, { method: "GET" });
    if (!response.ok) {
      throw Error("Error");
    }
    return response.json();
  } catch (error) {
    throw Error("Error");
  }
}

const moviesServices = {
  getMovies,
  getMoviesBySearch,
};

export default moviesServices;
