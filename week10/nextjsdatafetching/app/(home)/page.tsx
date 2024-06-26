import React from 'react';
import Link from 'next/link';

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("im fetching!");
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div>
            
            <h1>Home</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
