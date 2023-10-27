import React, { useState } from 'react';
import { Button, Form, Input, Upload, UploadProps, message } from 'antd';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
import { getData, postData } from '../../firebase';

export const AddDoc = () => {
    const [form] = Form.useForm();
    const [imageBase64, setImageBase64] = useState<string>("");
    const [base64Image, setBase64Image] = useState('');
    const [loading, setLoading] = useState(false);

    const getBase64 = (img: RcFile, callback: (url: string) => void) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result as string));
        reader.readAsDataURL(img);
    };

    // const beforeUpload = (file: RcFile) => {
    //     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    //     if (!isJpgOrPng) {
    //         message.error('You can only upload JPG/PNG file!');
    //     }
    //     const isLt2M = file.size / 1024 / 1024 < 5;
    //     if (!isLt2M) {
    //         message.error('Image must smaller than 2MB!');
    //     }
    //     return isJpgOrPng && isLt2M;
    // };

    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as RcFile, (url) => {
                setLoading(false);
                // setImageUrl(url);
                setImageBase64(url);
            });
        }
        console.log(imageBase64);

    };

    const uploadButton = (
        <div>
            {/* {loading ? <LoadingOutlined /> : <PlusOutlined />} */}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const handleImageChange = (info: any) => {
        if (info.file.status === 'done') {
            // Image has been successfully uploaded
            const reader: any = new FileReader();
            reader.readAsDataURL(info.file.originFileObj);
            reader.onload = () => {
                setBase64Image(reader.result as string);
            };
        }
    };

    const onFinish = async (values: any) => {
        console.log('Success:', values);
        const reqParams = {
            title: form.getFieldValue("title"),
            message: form.getFieldValue("message"),
            image: imageBase64
        }

        console.log(reqParams);

        postData(reqParams);
        getData();

        //TO DO Send Req Params
    };

    const undefBeforeUpload = () => false;

    return (
        <>
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
                        beforeUpload={undefBeforeUpload}
                        onChange={handleImageChange}
                    >
                        {imageBase64 ? <img src={`data:image/jpeg;base64,${base64Image}`} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form >
        </>
    );
};
