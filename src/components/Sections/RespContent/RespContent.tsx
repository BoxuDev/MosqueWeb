import Container from 'react-bootstrap/Container';
import React from 'react';
import { default as Abouts, AboutWithMap } from '../../../pages/Abouts';

export const RespContent = () => {
    return (
        <Container>
            <Abouts />
            <AboutWithMap />
        </Container>
    );
}