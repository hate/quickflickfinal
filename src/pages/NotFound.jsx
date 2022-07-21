import React from "react";
import {
    createStyles,
    Title,
    Text,
    Button,
    Container,
    Group,
} from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
    label: {
        textAlign: "center",
        fontWeight: 900,
        fontSize: 220,
        lineHeight: 1,
        marginBottom: theme.spacing.xl * 1.5,
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[2],

        [theme.fn.smallerThan("sm")]: {
            fontSize: 120,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: "center",
        fontWeight: 900,
        fontSize: 38,

        [theme.fn.smallerThan("sm")]: {
            fontSize: 32,
        },
    },

    description: {
        maxWidth: 500,
        margin: "auto",
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 1.5,
    },
}));

export function NotFound() {
    const { classes } = useStyles();

    return (
        <Container className={{
            paddingTop: 80,
            paddingBottom: 80,
        }}>
            <div className={classes.label}>404</div>
            <Title className={classes.title}>You hit a dead end!</Title>
            <Text
                color="dimmed"
                size="lg"
                align="center"
                className={classes.description}
            >
                You may have mistyped the address, or the page has been moved to another
                URL.
            </Text>
            <Group position="center">
                <Link to="/">
                    <Button variant="subtle" size="md">
                        Take me back to the home page
                    </Button>
                </Link>
            </Group>
        </Container >
    );
}
