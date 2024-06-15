import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Table, Divider, Image, message, ConfigProvider } from 'antd';
import { addGalleryData, addPostData, addSliderData, deleteGalleryData, deletePostData, deleteSliderData, getGalleryData, getPostData, getSliderData } from '../../firebase';
import { Container } from 'react-bootstrap';
import { Typography } from "antd";
import { imgBackString } from '../Utils/imgNotFound';
import { TinyColor } from '@ctrl/tinycolor';

interface UpImage {
    type: string;
    data: string;
    fileName: string;
}

export const AddDoc = ({ user }: any) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [formPost] = Form.useForm();
    const [formSlider] = Form.useForm();

    const [postsData, setPostsData] = useState<any>([]);
    const [sliderData, setSliderData] = useState<any>([]);
    const [galleryData, setGalleryData] = useState<any>([]);

    const [refreshPost, setRefreshPost] = useState<boolean>(false);
    const [refreshSlider, setRefreshSlider] = useState<boolean>(false);
    const [refreshGallery, setRefreshGallery] = useState<boolean>(false);

    const [imgPost, setImgPost] = useState<UpImage>({ type: "post", data: imgBackString, fileName: "" });
    const [imgSlider, setImgSlider] = useState<UpImage>({ type: "slider", data: imgBackString, fileName: "" });
    const [imgGallery, setImgGallery] = useState<UpImage>({ type: "gallery", data: imgBackString, fileName: "" });

    const getHoverColors = (colors: string[]) => colors.map((color) => new TinyColor(color).lighten(5).toString());
    const getActiveColors = (colors: string[]) => colors.map((color) => new TinyColor(color).darken(5).toString());
    const colors3 = ['#40e495', '#30dd8a', '#2bb673'];

    useEffect(() => {
        const getAndSetPosts = async () => {
            const postData: any = await getPostData();
            postData.forEach((post: any) => {
                post.picture = <Image src={post.picture} width={64} height={64} />
            });
            setPostsData(postData);
        }
        getAndSetPosts();
    }, [refreshPost]);

    useEffect(() => {
        const getAndSetSliders = async () => {
            const sliderData: any = await getSliderData();
            sliderData.forEach((slider: any) => {
                slider.background = <Image src={slider.background} width={64} height={64} />
            });
            setSliderData(sliderData);
        }
        getAndSetSliders();
    }, [refreshSlider]);

    useEffect(() => {
        const getAndSetGallery = async () => {
            const galleryData: any = await getGalleryData();
            galleryData.forEach((gallery: any) => {
                gallery.image = <Image src={gallery.image} width={64} height={64} />
            });
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
            key: 'picture'
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
            title: 'Slider Button Name',
            dataIndex: 'bname',
            key: 'bname'
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date'
        },
        {
            title: 'Image',
            dataIndex: 'background',
            key: 'background'
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
            key: 'date'
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image'
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
        const file = e.target.files[0];

        if (file?.size > 1024 * 1024) {
            messageApi.open({
                type: 'warning',
                content: 'File cannot be larger than 1 MB !!',
                style: {
                    backgroundColor: "red",
                    marginTop: '10vh'
                }
            });
            return;
        }

        const fileName: string = file.name;
        const data: any = new FileReader();
        data.addEventListener('load', () => {
            switch (imagePath) {
                case "post":
                    setImgPost({ data: data.result, fileName: fileName, type: "post" });
                    break;

                case "slider":
                    setImgSlider({ data: data.result, fileName: fileName, type: "slider" });
                    break;

                case "gallery":
                    setImgGallery({ data: data.result, fileName: fileName, type: "gallery" });
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
            img = imgPost.data;
        }

        if (imgPath === "slider") {
            img = imgSlider.data;
        }

        if (imgPath === "gallery") {
            img = imgGallery.data;
        }

        return (
            <div>
                <input type='file' onChange={(e) => handleFileChange(e, imgPath)} accept="image/*" />
                <br />
                <img src={img} height="200px" width="200px" />
            </div>
        );
    }

    const checkNullOrUndefined = (obj: any) => {
        let checker: boolean = false;
        for (const key in obj) {
            if (obj[key] === null || obj[key] === undefined) {
                checker = true;
            }
        }

        if (checker) {
            // messageApi.open({
            //     type: 'warning',
            //     content: 'Please fill all area',
            // });
        }
    }

    const imgIsNull = (data: any): boolean => {
        let isNull: boolean = false;
        if (
            data === null ||
            data === undefined ||
            data.trim() === "" ||
            data === imgBackString
        ) {
            isNull = true;
        }

        if (isNull) {
            messageApi.open({
                type: 'warning',
                content: 'Please select an image',
            });
        }

        return isNull;
    }

    const onFinishPost = async () => {
        const reqParams = {
            title: formPost.getFieldValue("title"),
            message: formPost.getFieldValue("message"),
            picture: imgPost.data
        }
        checkNullOrUndefined(reqParams);
        const nullData: boolean = imgIsNull(imgPost.data);

        if (!nullData) {
            await addPostData(reqParams);
            formPost.resetFields();
            setImgPost({ data: imgBackString, fileName: "", type: "" } as UpImage);
        }

        reFecthPost();
    };

    const onFinishSlider = async () => {
        const reqParams = {
            background: imgSlider.data,
            info: formSlider.getFieldValue("sliderInfo") ?? "",
            link: formSlider.getFieldValue("sliderLink") ?? "",
            title: formSlider.getFieldValue("sliderTitle"),
            bname: formSlider.getFieldValue("sliderBName") ?? ""
        }
        checkNullOrUndefined(reqParams);
        const nullData: boolean = imgIsNull(imgSlider.data);

        if (!nullData) {
            await addSliderData(reqParams);
            formSlider.resetFields();
            setImgSlider({ data: imgBackString, fileName: "", type: "" } as UpImage);
        }

        reFecthSlider();
    }

    const onFinishGallery = async () => {
        const reqParams = {
            image: imgGallery.data,
            fileName: imgGallery.fileName
        }
        checkNullOrUndefined(reqParams);
        const nullData: boolean = imgIsNull(imgGallery.data);

        if (!nullData) {
            await addGalleryData(reqParams);
            setImgGallery({ data: imgBackString, fileName: "", type: "" } as UpImage);
        }
        reFecthGallery();
    }

    return (
        <>
            {contextHolder}
            <Container>
                <Container className='cont-class'>
                    <Button onClick={() => window.location.reload()}>Exit User - {user.user.email.toString()}</Button>
                    <Divider />
                    <Typography.Title level={2}>Posts</Typography.Title>
                    <Divider />
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
                            rules={[{ required: true, message: 'Please input your post message!' }]}
                        >
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item label="Upload" valuePropName="file" >
                            <UploadButton imgPath="post" />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Button: {
                                            colorPrimary: `linear-gradient(116deg,  ${colors3.join(', ')})`,
                                            colorPrimaryHover: `linear-gradient(116deg, ${getHoverColors(colors3).join(', ')})`,
                                            colorPrimaryActive: `linear-gradient(116deg, ${getActiveColors(colors3).join(', ')})`,
                                            lineWidth: 0,
                                        },
                                    },
                                }}
                            >
                                <Button type="primary" htmlType="submit" size="large">Save</Button>
                            </ConfigProvider>
                        </Form.Item>
                    </Form>
                    <Table
                        pagination={false}
                        columns={columnsPost}
                        dataSource={postsData}
                    />
                </Container>
            </Container >
            <Container>
                <Container className='cont-class'>
                    <Typography.Title level={2}>Gallery</Typography.Title>
                    <Divider />
                    <UploadButton imgPath="gallery" />
                    <Divider />
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: `linear-gradient(116deg,  ${colors3.join(', ')})`,
                                    colorPrimaryHover: `linear-gradient(116deg, ${getHoverColors(colors3).join(', ')})`,
                                    colorPrimaryActive: `linear-gradient(116deg, ${getActiveColors(colors3).join(', ')})`,
                                    lineWidth: 0,
                                },
                            },
                        }}
                    >
                        <Button type="primary" onClick={onFinishGallery} size="large">Save</Button>
                    </ConfigProvider>
                    <Divider />
                    <Table
                        pagination={false}
                        columns={columnsGallery}
                        dataSource={galleryData}
                    />
                </Container>
            </Container >
            <Container>
                <Container className='cont-class'>
                    <Typography.Title level={2}>Slider</Typography.Title>
                    <Divider />
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
                            label="Slider Button Name"
                            name="sliderBName"
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
                        <ConfigProvider
                            theme={{
                                components: {
                                    Button: {
                                        colorPrimary: `linear-gradient(116deg,  ${colors3.join(', ')})`,
                                        colorPrimaryHover: `linear-gradient(116deg, ${getHoverColors(colors3).join(', ')})`,
                                        colorPrimaryActive: `linear-gradient(116deg, ${getActiveColors(colors3).join(', ')})`,
                                        lineWidth: 0,
                                    },
                                },
                            }}
                        >
                            <Button type="primary" onClick={onFinishSlider} size="large">Save</Button>
                        </ConfigProvider>
                    </Form>
                    <Divider />
                    <Table
                        pagination={false}
                        columns={columnsSlider}
                        dataSource={sliderData}
                    />
                </Container>
            </Container >
        </>
    );
};
