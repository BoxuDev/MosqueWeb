import React, { useEffect, useState } from "react";
import { Image } from 'antd';
import { Container } from "react-bootstrap";
import { getGalleryData } from "../../firebase";

export const GalleryPage = () => {
    const [imgList, setImgList] = useState<any>([]);

    useEffect(() => {
        const getList = async () => {
            const data: any = await getGalleryData();
            setImgList(data);
        }
        getList();
    }, []);

    return (
        <div style={{ marginBottom: "32px" }}>
            <Container style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
                flexWrap: "wrap"
            }}>
                <Image.PreviewGroup>
                    {
                        imgList && imgList.map((img: any) => (
                            <Image
                                style={{ padding: "12px" }}
                                height={210}
                                width={210}
                                src={img.image}
                            />
                        ))
                    }
                </Image.PreviewGroup>
            </Container>
        </div>
    );
};
