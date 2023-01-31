import { Layout } from 'antd';
import "./header.css";
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import * as React from 'react';

const { Header } = Layout;

export const HeaderComp = () => {
    return (
        <>
            <Header>
                <Navbar />
            </Header>
        </>
    );
}