import React, { useState, useCallback } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./pages/NotFound";
import { MovieGrid } from "./components/MovieGrid";
import FAQ from "./pages/FAQ";

export default function App() {
    const [favourites, setFavourites] = useState([]);

    const [color, setColor] = useState("dark");
    const toggleColorScheme = useCallback(() => {
        setColor((prev) => (prev === "light" ? "dark" : "light"));
    }, []);

    const updateFavourites = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
    };

    return (
        <ColorSchemeProvider
            toggleColorScheme={toggleColorScheme}
            colorScheme={color}
        >
            <MantineProvider
                theme={{
                    colorScheme: color,
                    radius: { sm: 120 },
                    primaryColor: "yellow",
                    primaryShade: 4,
                }}
                withGlobalStyles
                withNormalizeCSS
            >
                <Router>
                    <Navbar>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/movies" element={<Movies />} />
                            <Route exact path={`/movies/:id`} element={<Movie updateFavourites={updateFavourites} />} />
                            <Route exact path="/favourites" element={<MovieGrid movies={favourites} title="Your Favourites" />} />
                            <Route exact path="/faq" element={<FAQ />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Navbar>
                </Router>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}
