import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase";
import React, { useState } from 'react';
import { AddDoc } from './AddDoc';
import { Container } from 'react-bootstrap';
import { Button, Form, Input, Typography } from 'antd';
import "../FacilitiesAvaible/FacilitiesAvaible.css";

const SingIn = () => {
    const [form] = Form.useForm();
    const [user, setUser] = useState<any>(null);

    const signIn = () => {
        signInWithEmailAndPassword(auth, form.getFieldValue("email"), form.getFieldValue("password"))
            .then((userCredential) => {
                setUser(userCredential);

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
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
                        <Typography.Title level={3}>Log In to your Account</Typography.Title>
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
                            <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Container>
                :
                <AddDoc user={user} setUser={setUser} />
            }
        </>
    );
}

export default SingIn;