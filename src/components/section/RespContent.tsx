import Container from 'react-bootstrap/Container';
import React from 'react';
import { default as Abouts, AboutWithMap } from '../../utils/Abouts';

export const ContentSection = () => {
    return (
        <Container style={{ height: "calc(100vh - 403px)" }} >
            <Container>
                <Abouts />
                <AboutWithMap />
            </Container>
        </Container>
    );
}