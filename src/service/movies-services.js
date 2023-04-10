import cache from "../repository/cache.js";

async function getMovies(page = "1") {
  const URL_BASE = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=${page}`;
  try {
    const data = await cache.getData(page);
    if (data) {
      return JSON.parse(data);
    }

    const response = await fetch(URL_BASE, { method: "GET" });
    if (!response.ok) {
      throw Error("Error");
    }
    const dataFetch = await response.json();
    await cache.insertData(page, JSON.stringify(dataFetch));
    return dataFetch;
  } catch (error) {
    console.log(error);
    throw Error("Error");
  }
}
async function getMoviesBySearch(name, page = "1") {
  const URL_BASE = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&page=${page}&include_adult=false&query=${name}
  `;
  try {
    const data = await cache.getData(JSON.stringify({ name, page }));
    if (data) {
      return JSON.parse(data);
    }
    const response = await fetch(URL_BASE, { method: "GET" });
    if (!response.ok) {
      throw Error("Error");
    }
    const dataFetch = await response.json();
    await cache.insertData(
      JSON.stringify({ name, page }),
      JSON.stringify(dataFetch)
    );
    return dataFetch;
  } catch (error) {
    throw Error("Error");
  }
}

const moviesServices = {
  getMovies,
  getMoviesBySearch,
};

export default moviesServices;
