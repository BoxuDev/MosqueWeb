import { Row, Col, Typography, Divider } from "antd";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getPostData } from "../firebase";
import "../styles/HomeLander.css";

export const HomeLander = () => {
    const [postList, setPostList] = useState<any>();

    useEffect(() => {
        const getAndSetPosts = async () => {
            const data: any = await getPostData();
            setPostList(data);
        }
        getAndSetPosts();
    }, []);

    return (
        <>
            {postList && postList.map((post: any) => (
                <>
                    <Container>
                        <Container className="cont-another" style={{ marginBottom: "50px" }}>
                            <Row className="group" style={{ borderRadius: "20px", overflow: "hidden" }}>
                                <Col className="left">
                                    <img src={post.picture} />
                                </Col>
                                <Col className="right-post">
                                    <Container>
                                        <Typography.Title level={3}>{post.title}</Typography.Title>
                                        <Divider />
                                        <Typography.Text>{post.message}</Typography.Text>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </>
            ))}
        </>
    );
}