import { useEffect, useState, useRef, useCallback } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import debounce from "just-debounce-it";

function useSearch() {
	const [search, setSearch] = useState("");
	const [error, setError] = useState(null);
	const isFirstInput = useRef(true);

	useEffect(() => {
		if (isFirstInput.current) {
			isFirstInput.current = search === "";
			return;
		}
		if (search === "") {
			setError("No ingresaste peli");
			return;
		}
		if (search.match(/^\d+$/)) {
			setError("No se permiten numeros");
			return;
		}
		if (search.length < 3) {
			setError("Minimo 3 caracteres");
			return;
		}
		setError(null);
	}, [search]);

	return { search, setSearch, error };
}

function App() {
	const [sort, setSort] = useState(false);

	const { search, setSearch, error } = useSearch();
	const { movies, getMovies, loading } = useMovies({ search, sort });

	const debouncedGetMovies = useCallback(
		debounce((search) => {
			console.log("search", search);
			getMovies({ search });
		}, 500),
		[]
	);

	const handleSort = () => {
		setSort(!sort);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		// const fields = Object.fromEntries(new window.FormData(e.target));
		// console.log(fields);
		// if (!fields.peli) {
		// 	setError("No ingresaste peli");
		// }
		getMovies({ search });
	};

	const handleChange = (e) => {
		const newSearch = e.target.value;
		if (newSearch.startsWith(" ")) return;

		setSearch(newSearch);
		debouncedGetMovies(newSearch);
	};

	return (
		<div className="container">
			<header>
				<h1>Buscador de Productos</h1>
				<form onSubmit={handleSearch} className="form">
					<div>
						<input
							value={search}
							onChange={handleChange}
							name="peli"
							placeholder="Avengers, Starwars, Matrix"
						/>
					</div>
					<input type="checkbox" onChange={handleSort} checked={sort} />
					<button>Buscar</button>
				</form>
				{error && <p className="error">{error}</p>}
			</header>

			<main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
		</div>
	);
}

export default App;
