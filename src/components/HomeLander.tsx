import { Row, Col } from "antd";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getPostData } from "../firebase";
// import "../components/Sections/ContentSection.css";
// import "../components/Sections/AnotherContent/AnotherContent.css";

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
            {
                postList && postList.map((post: any) => (
                    <>
                        <Container>
                            <Container className="cont-another" style={{ marginBottom: "50px" }}>
                                <Row className="group" style={{ borderRadius: "20px", overflow: "hidden" }}>
                                    <Col className="left">
                                        <img src={post.picture} />
                                    </Col>
                                    <Col className="right">
                                        <Container>
                                            <Row>
                                                <Col className="title">
                                                    <Container style={{ marginBottom: "20px" }}>
                                                        {post.title}
                                                    </Container>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <div style={{ color: "white", textAlign: "justify", fontSize: "16px", }}>
                                                    {post.message}
                                                </div>
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                        </Container>
                    </>
                ))
            }
        </>
    );
}
