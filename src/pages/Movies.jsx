import { Loader } from "@mantine/core";
import React from "react";
import { useEffect, useState } from 'react';
import { MovieGrid } from "../components/MovieGrid";


export default function Movies() {
    const [trending, setTrending] = useState([]);
    const [newreleases, setNew] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovies() {
            const key = "?api_key=9c2999b8f08fa4e30cee97d8e2990499";
            const api_trending = `https://api.themoviedb.org/3/trending/all/week${key}`;
            const trending_response = await (await fetch(api_trending)).json();
            const api_new = `https://api.themoviedb.org/3/movie/now_playing${key}`;
            const new_response = await (await fetch(api_new)).json();

            if (trending_response.results && new_response.results) {
                setTrending(trending_response.results);
                setNew(new_response.results.slice(0, 4));
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);

    return (
        <>
            {loading ? (
                <Loader color="yellow" variant="dots" />
            ) : (
                <>
                    <MovieGrid movies={newreleases} title="New Releases" />
                    <MovieGrid movies={trending} title="Trending Now" />
                </>
            )
            }
        </>
    );
};

