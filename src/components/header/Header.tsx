import { Layout } from 'antd';
import React from 'react';
import "./header.css";

const { Header } = Layout;

export const HeaderComp = () => {
    return (
        <>
            <Header style={{
                height: "10vh",
                backgroundColor: "rgb(70, 130, 180)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>HEADER</Header>
        </>
    );
}