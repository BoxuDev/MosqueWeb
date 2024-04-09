import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Table, Upload, UploadProps, Flex, Divider } from 'antd';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
import { deleteData, getData, postData } from '../../firebase';
import { Container } from 'react-bootstrap';
import { Typography } from "antd";
import "../FacilitiesAvaible/FacilitiesAvaible.css";


interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

export const AddDoc = ({ user, setUser }: any) => {
    const [form] = Form.useForm();
    const [imageBase64, setImageBase64] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [postsData, setPostsData] = useState<any>();

    useEffect(() => {
        const getAndSetPosts = async () => {
            const postData: any = await getData();
            console.log(postData);
            setPostsData(postData);
        }
        getAndSetPosts();

        console.log(postsData);
    }, []);

    const columns = [
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
            key: 'date',
            render: (record: any) => <p>{new Date(record.date).toDateString()}</p>
        },
        {
            title: 'Action',
            key: 'action',
            render: (record: any) => <Button onClick={() => handleDelete(record.id)}>Delete</Button>
        },
    ];

    const handleDelete = (id: any) => {
        console.log("deleting id ", id); // Doğru
        deleteData(id);
    };

    const convertToBase64 = (file: any, callback: any) => {
        const reader = new FileReader();
        reader.onload = function (e: any) {
            const base64String = e.target!.result!.split(',')[1];
            callback(base64String);
        };
        reader.readAsDataURL(file);
    }

    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            convertToBase64(info.file.originFileObj as RcFile, (url: any) => {
                setLoading(false);
                setImageBase64(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {/* {loading ? <LoadingOutlined /> : <PlusOutlined />} */}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const onFinish = async (values: any) => {
        const reqParams = {
            title: form.getFieldValue("title"),
            message: form.getFieldValue("message"),
            image: form.getFieldValue("picture").file.thumbUrl.toString()
        }

        console.log("onfin paramss", form.getFieldValue("picture"));

        await postData(reqParams);
        const data = await getData();

        console.log("arr data: ", data);
        //TO DO Send Req Params
    };

    return (
        <Container>
            <Container className='cont-class'>
                <Button onClick={() => window.location.reload()}>Exit User</Button>
                <Typography.Title level={2}>Posts</Typography.Title>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
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
                    <Form.Item label="Upload" name="picture" valuePropName="file" >
                        <Upload
                            listType="picture-card"
                            name="avatar"
                            className="avatar-uploader"
                            multiple={false}
                            showUploadList={true}
                            onChange={handleChange}
                        >
                            {imageBase64 ? <img src={`data:image/jpeg;base64,${imageBase64}`} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <Table
                    columns={columns}
                    dataSource={postsData}
                />
                <Divider />
                <Typography.Title level={2}>Gallery</Typography.Title>
                <Upload></Upload>


                <Divider />
                <Typography.Title level={2}>Slider</Typography.Title>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
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
                        <Upload />
                    </Form.Item>
                </Form>
                <Table
                    columns={columns}
                    dataSource={postsData}
                />
            </Container>
        </Container >
    );
};
