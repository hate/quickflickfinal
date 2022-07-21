import React, { useState } from "react";
import {
    Header,
    Container,
    Group,
    Burger,
    Button,
    Text,
    AppShell,
    useMantineTheme,
    Paper,
    Transition,
    Space,
    Modal,
    TextInput,
    PasswordInput,
    Anchor,
} from "@mantine/core";
import { useBooleanToggle, useForm, useToggle } from "@mantine/hooks";
import { useMantineColorScheme, ActionIcon } from "@mantine/core";
import { DeviceTv } from 'tabler-icons-react';
import { Link } from "react-router-dom";
import { createHeaderStyles } from "./Navbar.styles"

export function Navbar(children) {
    const theme = useMantineTheme();
    const { classes, cx } = createHeaderStyles();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const isDark = colorScheme === "dark";

    const links = [
        { label: "Home", link: "/" },
        { label: "Movies", link: "/movies" },
        { label: "Favourites", link: "/favourites" },
        { label: "FAQ", link: "/faq" },
    ];

    const [opened, toggleOpened] = useBooleanToggle(false);
    const [login, toggleLogin] = useBooleanToggle(false);
    const [active, setActive] = useState(links[0].link);

    const [type, toggle] = useToggle('Login', ['Login', 'Register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: false,
        },

        validationRules: {
            email: (val) => /^\S+@\S+$/.test(val),
            password: (val) => val.length >= 8,
        },
    });


    const items = links.map((link) => (
        <a
            key={link.label}
            className={cx(classes.link, {
                [classes.linkActive]: active === link.link,
            })}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
                toggleOpened(false);
            }}
        >
            <Link key={link.label + "goto"} to={link.link} style={{ textDecoration: 'none', color: "inherit" }}>
                {link.label}
            </Link >
        </a>
    ));

    return (
        <AppShell
            fixed
            header={
                <Header>
                    <Container
                        py={5}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <Group spacing={5}>
                            <ActionIcon
                                key={isDark ? "dark-icon" : "light-icon"}
                                variant="transparent"
                                onClick={() => toggleColorScheme()}
                                size="xl"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <DeviceTv size={24} />
                            </ActionIcon>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Text
                                    size="xl"
                                    variant="gradient"
                                    gradient={{ from: theme.colors[theme.primaryColor][7], to: theme.primaryColor, deg: 45 }}
                                    weight={700}
                                >
                                    QuickFlick
                                </Text>
                            </Link>
                        </Group>

                        <Group
                            spacing={5}
                            style={{
                                [theme.fn.largerThan("xs")]: {
                                    display: "none",
                                },
                            }}
                        >
                            {items}
                        </Group>

                        <Modal
                            centered
                            radius="lg"
                            opened={login}
                            onClose={() => toggleLogin()}
                            title={type}
                        >
                            <form onSubmit={form.onSubmit(() => { })}>
                                <Group direction="column" grow>
                                    {type === 'Register' && (
                                        <TextInput
                                            label="Name"
                                            placeholder="Your name"
                                            value={form.values.name}
                                            onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                        />
                                    )}
                                    <TextInput
                                        required
                                        label="Email"
                                        placeholder="johnsmith@gmail.com"
                                        value={form.values.email}
                                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                        error={form.errors.email && 'Invalid email'}
                                    />
                                    <PasswordInput
                                        required
                                        label="Password"
                                        placeholder="Your password"
                                        value={form.values.password}
                                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                                        error={form.errors.password && 'Password should include at least 8 characters'}
                                    />
                                </Group>
                                <Group position="apart" mt="xl">
                                    <Anchor component="button" type="button" color="gray" onClick={() => toggle()} size="xs">
                                        {type === 'Register'
                                            ? 'Already have an account? Login'
                                            : "Don't have an account? Register"}
                                    </Anchor>
                                    <Button type="submit">{type}</Button>
                                </Group>
                            </form>

                        </Modal>

                        <Button onClick={() => toggleLogin()} >
                            <Text size="s">
                                Log In
                            </Text>
                        </Button>

                        <Burger
                            opened={opened}
                            onClick={() => toggleOpened()}
                            className={classes.burger}
                            size="sm"
                        />
                        <Transition
                            transition="pop-top-right"
                            duration={200}
                            mounted={opened}
                        >
                            {() => (
                                <Paper
                                    style={{
                                        position: "absolute",
                                        top: 50,
                                        left: 0,
                                        right: 0,
                                        zIndex: 0,
                                        borderTopRightRadius: 0,
                                        borderBottomLeftRadius: 0,
                                        borderTopLeftRadius: 0,
                                        borderBottomRightRadius: 0,
                                        borderTopWidth: 0,
                                        overflow: "hidden",

                                        [theme.fn.largerThan("sm")]: {
                                            display: "none",
                                        },
                                    }}
                                    withBorder
                                >
                                    {items}
                                </Paper>
                            )}
                        </Transition>
                    </Container>
                </ Header>
            }
        >
            <Space h="55px" />
            {children.children}
        </AppShell>
    );
}
