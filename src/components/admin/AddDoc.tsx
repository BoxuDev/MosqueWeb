import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Table, Upload, UploadProps, Divider, Image } from 'antd';
import { addGalleryData, addPostData, addSliderData, deleteGalleryData, deletePostData, deleteSliderData, getGalleryData, getPostData, getSliderData } from '../../firebase';
import { Container } from 'react-bootstrap';
import { Typography } from "antd";
import { convertDate } from '../../utils/helpers/time-helper';
import "../FacilitiesAvaible/FacilitiesAvaible.css";
import { ImageViewerMini } from '../../utils/helpers/ImageVıewerMini';

export const AddDoc = ({ user, setUser }: any) => {
    const [formPost] = Form.useForm();
    const [formSlider] = Form.useForm();

    const [postsData, setPostsData] = useState<any>();
    const [sliderData, setSliderData] = useState<any>();
    const [galleryData, setGalleryData] = useState<any>();

    const [refreshPost, setRefreshPost] = useState<boolean>(false);
    const [refreshSlider, setRefreshSlider] = useState<boolean>(false);
    const [refreshGallery, setRefreshGallery] = useState<boolean>(false);

    const [imgPost, setImgPost] = useState<string>("");
    const [imgSlider, setImgSlider] = useState<string>("");
    const [imgGallery, setImgGallery] = useState<string>("");

    useEffect(() => {
        const getAndSetPosts = async () => {
            const postData: any = await getPostData();
            setPostsData(postData);
        }
        getAndSetPosts();
    }, [refreshPost]);

    useEffect(() => {
        const getAndSetSliders = async () => {
            const sliderData: any = await getSliderData();
            setSliderData(sliderData);
        }
        getAndSetSliders();
    }, [refreshSlider]);

    useEffect(() => {
        const getAndSetGallery = async () => {
            const galleryData: any = await getGalleryData();
            setGalleryData(galleryData);
        }
        getAndSetGallery();
    }, [refreshGallery])


    const columnsPost = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Message',
            dataIndex: 'message',
            key: 'message',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date'
        },
        {
            title: 'Image',
            dataIndex: 'picture',
            key: 'picture',
            render: (record: any) => <ImageViewerMini picture={record.picture} />
        },
        {
            title: 'Action',
            key: 'action',
            render: (record: any) => <Button onClick={() => handleDeletePost(record.id)}>Delete</Button>
        },
    ];

    const columnsSlider = [
        {
            title: 'Slider Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Slider Info',
            dataIndex: 'info',
            key: 'info',
        },
        {
            title: 'Slider Button Link',
            dataIndex: 'link',
            key: 'link'
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date'
        },
        {
            title: 'Image',
            dataIndex: 'background',
            key: 'background',
            render: (record: any) => <ImageViewerMini picture={record.background} />
        },
        {
            title: 'Action',
            key: 'action',
            render: (record: any) => <Button onClick={() => handleDeleteSlider(record.id)}>Delete</Button>
        },
    ];

    const columnsGallery = [
        {
            title: 'File Name',
            dataIndex: 'fileName',
            key: 'fileName',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: (record: any) => <p>{new Date(record.date).toDateString()}</p>
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            //render: (record: any) => <ImageViewerMini picture={record.image} />
        },
        {
            title: 'Action',
            key: 'action',
            render: (record: any) => <Button onClick={() => handleDeleteGallery(record.id)}>Delete</Button>
        },
    ];

    const reFecthPost = () => {
        setRefreshPost(!refreshPost);
    }

    const reFecthSlider = () => {
        setRefreshSlider(!refreshSlider);
    }

    const reFecthGallery = () => {
        setRefreshGallery(!refreshGallery);
    }

    const handleDeletePost = (id: any) => {
        deletePostData(id);
        reFecthPost();
    };

    const handleDeleteSlider = (id: any) => {
        deleteSliderData(id);
        reFecthSlider();
    }

    const handleDeleteGallery = (id: any) => {
        deleteGalleryData(id);
        reFecthGallery();
    }

    const handleFileChange = (e: any, imagePath: string) => {
        const data: any = new FileReader();
        data.addEventListener('load', () => {
            switch (imagePath) {
                case "post":
                    setImgPost(data.result);
                    break;

                case "slider":
                    setImgSlider(data.result);
                    break;

                case "gallery":
                    setImgGallery(data.result);
                    break;

                default:
                    break;
            }
        })
        data.readAsDataURL(e.target.files[0])
    }

    const UploadButton = ({ imgPath }: any) => {
        let img: string = "";

        if (imgPath === "post") {
            img = imgPost;
        }

        if (imgPath === "slider") {
            img = imgSlider;
        }

        if (imgPath === "gallery") {
            img = imgGallery;
        }

        return (
            <div>
                <input type='file' onChange={(e) => handleFileChange(e, imgPath)} />
                <br />
                <img src={img} height="200px" width="200px" />
            </div>
        );
    }

    const onFinishPost = async () => {
        const reqParams = {
            title: formPost.getFieldValue("title"),
            message: formPost.getFieldValue("message"),
            picture: imgPost
        }
        await addPostData(reqParams);
        reFecthPost();
    };

    const onFinishSlider = async () => {
        const reqParams = {
            background: imgSlider,
            info: formSlider.getFieldValue("sliderInfo"),
            link: formSlider.getFieldValue("sliderLink"),
            title: formSlider.getFieldValue("sliderTitle")
        }
        await addSliderData(reqParams);
        reFecthSlider();
    }

    const onFinishGallery = async () => {
        const reqParams = {
            image: imgGallery,
            fileName: "test"
        }
        await addGalleryData(reqParams);
        reFecthGallery();
    }

    return (
        <>
            <Container>
                <Container className='cont-class'>
                    <Button onClick={() => window.location.reload()}>Exit User</Button>
                    <Typography.Title level={2}>Posts</Typography.Title>
                    <Form
                        form={formPost}
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinishPost}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Post Title"
                            name="title"
                            rules={[{ required: true, message: 'Please input your Title!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Post Message"
                            name="message"
                        >
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item label="Upload" valuePropName="file" >
                            <UploadButton imgPath="post" />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    <Table
                        columns={columnsPost}
                        dataSource={postsData}
                    />
                </Container>
            </Container >
            <Container>
                <Container className='cont-class'>
                    <Divider />
                    <Typography.Title level={2}>Gallery</Typography.Title>
                    <UploadButton imgPath="gallery" />
                    <Button type='primary' onClick={onFinishGallery}>Save</Button>
                    <Table
                        columns={columnsGallery}
                        dataSource={galleryData}
                    />
                </Container>
            </Container >
            <Container>
                <Container className='cont-class'>
                    <Divider />
                    <Typography.Title level={2}>Slider</Typography.Title>
                    <Form
                        form={formSlider}
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinishSlider}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Slider Title"
                            name="sliderTitle"
                            rules={[{ required: true, message: 'Please input your Slider Title!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Slider Info"
                            name="sliderInfo"
                        >
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item
                            label="Slider Button Link"
                            name="sliderLink"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Slider Background"
                            name="sliderBack"
                            rules={[{ required: true, message: 'Please input your Slider Background!' }]}
                        >
                            <UploadButton imgPath="slider" />
                        </Form.Item>
                        <Button type='primary' onClick={onFinishSlider}>Save</Button>
                    </Form>
                    <Table
                        columns={columnsSlider}
                        dataSource={sliderData}
                    />
                </Container>
            </Container >
        </>
    );
};
