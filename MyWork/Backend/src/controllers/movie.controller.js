import Movie from "../models/movie.model.js";

export const addMovie = async (req, res) => {
  const movie = await Movie.create({
    ...req.body,
    userId: req.user.id,
  });
  res.status(201).json(movie);
};

export const getMovies = async (req, res) => {
  const movies = await Movie.find({ userId: req.user.id });
  res.json(movies);
};
