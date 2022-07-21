import { Space, Loader, Title, Text, Paper, SimpleGrid, Container, Badge, Group, Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Heart } from "tabler-icons-react";

export default function Movie(props) {
    let { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const poster_image_api = "https://image.tmdb.org/t/p/w1280";

    useEffect(() => {
        async function fetchMovies() {
            const key = "?api_key=9c2999b8f08fa4e30cee97d8e2990499";
            const api_movie = `https://api.themoviedb.org/3/movie/${id}${key}`;
            const movie_response = await (await fetch(api_movie)).json();
            console.log(movie_response)
            if (movie_response.original_title) {
                setMovie(movie_response);
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
                        <Space h="35px" />

                        <Container my="xs" size="md">
                            <SimpleGrid gutter="xl" cols={2} spacing="xl">
                                <div>
                                    <Paper
                                        shadow="md"
                                        radius="lg"
                                        sx={{ backgroundImage: `url(${poster_image_api + movie.poster_path})` }}
                                        style={{
                                            height: 650,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                    </Paper>
                                </div >
                                <div>

                                    <Title style={{ color: "#ffd43b" }}>{movie.original_title}</Title>
                                    <Text size="xl" weight={500} style={{ color: "#ffd43b" }} >
                                        {movie.tagline}
                                    </Text>
                                    <Space h="30px" />
                                    <Text  >
                                        <Text weight={500} style={{ color: "#ffd43b" }}>Release Date</Text>
                                        {movie.release_date}
                                    </Text>
                                    <Space h="30px" />
                                    <Text  >
                                        <Text weight={500} style={{ color: "#ffd43b" }}>Rating</Text>
                                        {movie.vote_average} / 10
                                    </Text>
                                    <Space h="30px" />
                                    <Text  >
                                        <Text weight={500} style={{ color: "#ffd43b" }}>Overview</Text>
                                        {movie.overview}
                                    </Text>
                                    <Space h="30px" />
                                    <Group>
                                        {movie.genres.map((genre, idex) => (
                                            <Badge
                                                key={idex}
                                                size="lg"
                                            >
                                                {genre.name}
                                            </Badge>
                                        ))}
                                    </Group>
                                    <Space h="30px" />
                                    <Button color='dark' leftIcon={<Heart />} onClick={() => props.updateFavourites(movie)} >Add To Favorites</Button>
                                </div >
                            </SimpleGrid>
                        </Container>
                    </>
                )
            }
        </>
    );
};
