import { createStyles } from '@mantine/core';

export const createBannerStyles = createStyles((theme) => ({
    wrapper: {
        position: "relative",
        minHeight: 500,
        backgroundImage: 'url(https://i.imgur.com/9GyUbrB.jpeg)',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",

        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[1],
    },

    title: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 44,
        lineHeight: 1.2,
        fontWeight: 900,
    },

    highlight: {
        color: theme.colors.yellow[4],
    },

    description: {
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[2]
                : theme.colors.gray[7],
        lineHeight: 1.5,
        maxWidth: 580,
        marginTop: theme.spacing.md,
    },

    body: {
        flex: "0 0 700px",
        paddingTop: 140,
        position: "relative",
        zIndex: 1,
    },

    controls: {
        marginTop: theme.spacing.md,
    },

    control: {
        "@media (max-width: 600px)": {
            flex: 1,
        },
    },

    controlMain: {
        color: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        backgroundColor: theme.colors.yellow[4],

        "&:hover": {
            backgroundColor: theme.colors.yellow[4],
        },
    },

    controlSecondary: {
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.white,
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.white,
        },
    },

    features: {
        maxWidth: 740,
        paddingBottom: theme.spacing.xl,

        "@media (max-width: 755px)": {
            marginTop: theme.spacing.xl * 2,
        },
    },

    featureIcon: {
        color:
            theme.colorScheme === "dark"
                ? theme.colors.yellow[4]
                : theme.colors.cyan[6],
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.white,
    },

    featureBody: {
        marginTop: theme.spacing.md,
    },

    featureTitle: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontWeight: 500,
        lineHeight: 1,
        marginBottom: 7,
    },

    featureDescription: {
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[2]
                : theme.colors.gray[7],
        fontSize: theme.fontSizes.xs,
        lineHeight: 1.5,
    },
}));