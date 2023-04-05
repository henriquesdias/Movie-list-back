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

const moviesServices = {
  getMovies,
};

export default moviesServices;
