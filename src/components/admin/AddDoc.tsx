import React, { useState } from 'react';
import { Button, Form, Input, Upload, UploadProps, message } from 'antd';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
import { getData, postData } from '../../firebase';

export const AddDoc = ({ user, setUser }: any) => {
    const [form] = Form.useForm();
    const [imageBase64, setImageBase64] = useState<string>("");
    const [loading, setLoading] = useState(false);

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
        console.log(imageBase64);

    };

    const uploadButton = (
        <div>
            {/* {loading ? <LoadingOutlined /> : <PlusOutlined />} */}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const onFinish = async (values: any) => {
        console.log('Success:', values);
        const reqParams = {
            title: form.getFieldValue("title"),
            message: form.getFieldValue("message"),
            image: form.getFieldValue("picture").file.thumbUrl.toString()
        }

        console.log(reqParams);
        await postData(reqParams);
        const data = await getData();

        console.log("arr data: ", data);
        //TO DO Send Req Params
    };

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
            </Form >
        </>
    );
};
