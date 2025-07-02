import { useRef, useState, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort }) {
	const [movies, setMovies] = useState([]);
	const [errors, setErrors] = useState(null);
	const [loading, setLoading] = useState(false);

	const prevSearch = useRef(search);

	const getMovies = useCallback(async ({ search }) => {
		if (prevSearch.current === search) return;
		try {
			setLoading(true);
			setErrors(null);
			prevSearch.current = search;
			const newMovies = await searchMovies({ search });
			setMovies(newMovies);
		} catch (error) {
			setErrors(error.message);
		} finally {
			setLoading(false);
		}
	}, []);

	const sortedMovies = useMemo(() => {
		return sort
			? [...movies].sort((a, b) => a.title.localeCompare(b.title))
			: movies;
	}, [movies, sort]);

	return { movies: sortedMovies, getMovies, errors, loading };
}
