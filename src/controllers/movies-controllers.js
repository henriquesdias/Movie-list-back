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

const moviesControllers = {
  getMovies,
};

export default moviesControllers;
