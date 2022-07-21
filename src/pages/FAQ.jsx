import { Accordion, Container, Space, Title } from "@mantine/core";
import React from "react";


export default function FAQ() {

    return (
        <>
            <Space h="36px" />
            <Container size="md" >
                <Title align="center" >
                    Frequently Asked Questions
                </Title>
                <Space h="36px" />
                <Accordion
                    iconPosition="right"
                >
                    <Accordion.Item label="How do I save a movie?">
                        Click on the "Add to Favourites" button on each respective Movie page.
                    </Accordion.Item>
                    <Accordion.Item label="How do I register/login for an account?">
                        Click on the "Login" button in the Header.
                    </Accordion.Item>
                    <Accordion.Item label="How do I share my favourites with others?">
                        Unfortunately, this feature is still not implemented.
                    </Accordion.Item>
                    <Accordion.Item label="How do I switch between Light and Dark theme for the site?">
                        Click on the TV Icon next to "QuickFlick" in the Header.
                    </Accordion.Item>
                </Accordion>
            </Container>
        </>
    );
};

