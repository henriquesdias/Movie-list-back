import moviesServices from "../service/movies-services.js";

async function getMovies(req, res) {
  const { page } = req.query;
  if (page && isNaN(page)) {
    return res.sendStatus(422);
  }
  try {
    const movies = await moviesServices.getMovies(page);
    res.status(200).send(movies);
  } catch (error) {
    res.sendStatus(400);
  }
}
async function getMoviesBySearch(req, res) {
  const { name } = req.params;
  const { page } = req.query;
  if (page && isNaN(page)) {
    return res.sendStatus(422);
  }
  try {
    const movies = await moviesServices.getMoviesBySearch(name, page);
    res.status(200).send(movies);
  } catch (error) {
    res.sendStatus(400);
  }
}
async function getDetailsOfMovie(req, res) {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.sendStatus(422);
  }
  try {
    const details = await moviesServices.getDetails(id);
    res.status(200).send(details);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}

const moviesControllers = {
  getMovies,
  getMoviesBySearch,
  getDetailsOfMovie,
};

export default moviesControllers;
