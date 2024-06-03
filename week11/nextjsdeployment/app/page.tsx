export const metadata = {
    title: "Home",
};

import Link from 'next/link';
import Navigation from "../components/navigation";


const URL ="https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(){
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("im fetching!");
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default async function HomePage(){
    const movies = await getMovies();
    return(
    <div>
    {movies.map((movie) => (
    <li key = {movie.id}>
        <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
    ))}
    </div>
    );
}

