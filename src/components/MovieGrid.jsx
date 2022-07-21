import { Container, Grid, Paper, Space, Title } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

export function MovieGrid(props) {
    const poster_image_api = "https://image.tmdb.org/t/p/w1280";

    return (
        <Container px="md">
            <Space h="25px" />
            <Title>{props.title}</Title>
            <Space h="10px" />

            <Grid>
                {props.movies.map((info, idx) => {
                    return (
                        <Grid.Col xs={6} md={4} lg={3} key={idx}>
                            <Link to={`/movies/${info.id}`}>
                                <Paper
                                    shadow="md"
                                    p="xl"
                                    radius="md"
                                    alt={info.original_title}
                                    sx={{ backgroundImage: `url(${poster_image_api + info.poster_path})` }}
                                    style={{
                                        height: 300,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                </Paper>
                            </Link>
                        </Grid.Col>
                    );
                })}
            </Grid>
            <Space h="25px" />
        </Container >
    );
}
