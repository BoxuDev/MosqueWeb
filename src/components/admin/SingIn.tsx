import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase";
import React, { useState } from 'react';
import { AddDoc } from './AddDoc';
import { Container } from 'react-bootstrap';
import { Button, ConfigProvider, Divider, Flex, Form, Input, notification, Typography } from 'antd';
import "../FacilitiesAvaible/FacilitiesAvaible.css";
import { TinyColor } from '@ctrl/tinycolor';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const SingIn = () => {
    const [form] = Form.useForm();
    const [user, setUser] = useState<any>(null);
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
            message: 'Log-In Failed !',
            description: 'Please control your credentials.',
        });
    };

    const signIn = () => {
        signInWithEmailAndPassword(auth, form.getFieldValue("email"), form.getFieldValue("password"))
            .then((userCredential) => {
                setUser(userCredential);
            })
            .catch((error) => {
                openNotificationWithIcon("warning");
                console.error(error);
            });
    };

    const getHoverColors = (colors: string[]) => colors.map((color) => new TinyColor(color).lighten(5).toString());
    const getActiveColors = (colors: string[]) => colors.map((color) => new TinyColor(color).darken(5).toString());
    const colors3 = ['#40e495', '#30dd8a', '#2bb673'];

    return (
        <>
            {contextHolder}
            {!user ?
                <Container className="cont-class">
                    <Form
                        form={form}
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={signIn}
                    >
                        <Flex justify='center' >
                            <Typography.Title level={3}>Login to your Account</Typography.Title>
                        </Flex>
                        <Divider />
                        <Form.Item
                            label="E-Mail"
                            name="email"
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input.Password visibilityToggle />
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
                                <Button type="primary" htmlType='submit' size="large">
                                    Log In
                                </Button>
                            </ConfigProvider>
                        </Form.Item>
                    </Form>
                </Container>
                :
                <AddDoc user={user} />
            }

        </>
    );
}

export default SingIn;