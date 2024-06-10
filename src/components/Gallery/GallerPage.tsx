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
        <Container>
            <Image.PreviewGroup
                preview={{
                    onChange: (current, prev) =>
                        console.log(`current index: ${current}, prev index: ${prev}`),
                }}
            >
                {
                    imgList && imgList.map((img: any) => (
                        <Image
                            width={200}
                            src={img.image}
                        />
                    ))
                }
            </Image.PreviewGroup>
        </Container>
    );
};
