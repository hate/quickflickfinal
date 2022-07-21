import { Loader } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { MovieGrid } from "../components/MovieGrid";

export default function Home() {
    const [newreleases, setNew] = useState([]);
    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovies() {
            const key = "?api_key=9c2999b8f08fa4e30cee97d8e2990499";
            const api_popular = `https://api.themoviedb.org/3/trending/all/week${key}`;
            const popular_response = await (await fetch(api_popular)).json();
            const api_new = `https://api.themoviedb.org/3/movie/now_playing${key}`;
            const new_response = await (await fetch(api_new)).json();

            if (new_response.results && popular_response.results) {
                setNew(new_response.results.slice(0, 4));
                setPopular(popular_response.results.slice(0, 4));
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);

    return (
        <>
            {
                loading ? (
                    <Loader color="yellow" variant="dots" />
                ) : (
                    <>
                        <Banner />
                        <MovieGrid title="Most Recent" movies={newreleases} />
                        <MovieGrid title="Popular Near You" movies={popular} />
                    </>
                )
            }
        </>
    );
};
