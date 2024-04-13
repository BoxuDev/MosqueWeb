import React, { useEffect, useState } from 'react';
import MyNavbar from './Navbar';
import { Modal } from 'antd';
import "./Navbar.css";

export const HeaderComp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dates: any = [
        { date: '2024-03-19', event: 'New Version Released' },
        { date: '2024-03-20', event: 'New Version Released' },
        { date: '2024-03-21', event: 'New Version Released' },
        { date: '2024-04-05', event: 'Qadr Night' },
        { date: '2024-04-10', event: '' },
        { date: '2024-04-11', event: '' },
        { date: '2024-04-12', event: '' }
    ];

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        const isSpecialDay = dates.some((date: any) => date.date === today);

        if (isSpecialDay) {
            setIsModalOpen(true);
        }
    }, []);

    return (
        <>
            <Modal
                title="Information"
                open={isModalOpen}
                bodyStyle={{ minHeight: "250px" }}
                onOk={handleOk}
                okText="Okay"
                onCancel={handleCancel}
                cancelButtonProps={{ className: "pop-up-close" }}
                okButtonProps={{ type: 'primary', style: { backgroundColor: "#14a44d" } }}
                closeIcon={(<></>)}
                className='happy-hover'
            >
                <p>{dates.find((date: any) => date.date === new Date().toISOString().split('T')[0])?.event}</p>
            </Modal>
            <MyNavbar />
        </>
    );
}