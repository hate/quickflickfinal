import React, { useEffect, useState } from "react";
import {
    Title,
    Overlay,
    Group,
    Text,
    Button,
    Container,
    useMantineTheme,
} from "@mantine/core";

import { Movie, SwitchHorizontal } from "tabler-icons-react";
import { Link } from "react-router-dom";
import { createBannerStyles } from "./Banner.styles"


export function Banner() {
    const { classes, cx } = createBannerStyles();
    const theme = useMantineTheme();

    const [random, setRandom] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovies() {
            const key = "?api_key=9c2999b8f08fa4e30cee97d8e2990499";
            const api_trending = `https://api.themoviedb.org/3/discover/movie${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate?page=1`;
            const random_response = await (await fetch(api_trending)).json();

            if (random_response.results) {
                setRandom(random_response.results[Math.floor(Math.random() * (10 - 1) + 1)].id);
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);

    return (
        <div className={classes.wrapper}>
            <Container size="xl" px="md">
                <Overlay
                    blur={2}
                    gradient={`linear-gradient(45deg, ${theme.colorScheme === "dark"
                        ? theme.colors.dark[8]
                        : theme.colors.gray[2]
                        } 45%, rgba(0, 0, 0, 0) 95%)`}
                    opacity={0.85}
                    zIndex={1}
                />

                <div className={classes.body}>
                    <Title className={classes.title}>
                        <span className={classes.highlight}>Discover movies</span>
                        <br />interactively
                    </Title>

                    <Text className={classes.description}>
                        Save movies you've already seen, movies you want to see or even recommend your favorite flicks to others! All in one place.
                    </Text>

                    <Group className={classes.controls}>
                        {!loading && <Link to={`/movies/${random}`}>
                            <Button
                                className={cx(classes.control, classes.controlMain)}
                                rightIcon={<SwitchHorizontal />}
                            >
                                Feeling Lucky
                            </Button>
                        </Link>}
                        <Link to="/movies">
                            <Button
                                className={cx(classes.control, classes.controlSecondary)}
                                leftIcon={<Movie />}
                            >
                                Browse Movies
                            </Button>
                        </Link>
                    </Group>
                </div>
            </Container >
        </div >
    );
}
