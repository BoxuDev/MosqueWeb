import { Row } from 'antd';

interface IProps { }

export const MenPrayerRoomIcon = ({ }: IProps) => {
    return (
        <>
            <div style={{
                marginLeft: "32px",
                marginBottom: "46px"
            }}>
                <Row>
                    <div style={{ width: "78px", height: "78px" }}>
                        <svg
                            preserveAspectRatio="none"
                            data-bbox="2.647 0.528 11.64 15.876"
                            xmlns="http://www.w3.org/2000/svg"
                            width="78"
                            color='white'
                            fill='white'
                            viewBox="2.647 0.528 11.64 15.876"
                            height="78"
                            data-type="shape"
                            role="presentation"
                            aria-hidden="true">
                            <g>
                                <path d="M11.089 4.498c.17 0 .289-.119.288-.266v-.793a2.91 2.91 0 1 0-5.82 0v.793c0 .147.117.266.287.266-.407.008-.816.342-.816.792 0 .733.513 1.223 1.112 1.31.11.506.387.95.764 1.28v1.38c0 .025.005.051.012.076 0 0 .16.539.756.818v2.81c0 .071.028.139.078.188l.53.527a.265.265 0 0 0 .375 0l.529-.527a.265.265 0 0 0 .076-.187v-1.854c0-.353-.53-.353-.53 0v1.744l-.263.264-.265-.264v-2.554c.083.01.17.017.265.017 1.261 0 1.549-.982 1.549-.982a.263.263 0 0 0 .012-.07l.025-1.408c.365-.328.63-.758.738-1.255.618-.11 1.116-.58 1.116-1.313 0-.441-.399-.787-.818-.792zm-2.622-3.44a2.37 2.37 0 0 1 2.38 2.381v.53h-4.76v-.53a2.37 2.37 0 0 1 2.38-2.38zm-1.851 3.44h3.703v1.588c0 1.03-.821 1.852-1.852 1.852a1.841 1.841 0 0 1-1.851-1.852zm-.53.622v.927c-.29-.09-.527-.349-.527-.746 0-.24.361-.377.527-.181zm5.289.18c-.003.413-.236.657-.527.747v-.928c.176-.199.527-.057.527.182zM9.517 8.22 9.5 9.2s-.207.589-1.033.589-1.033-.59-1.033-.59v-.97a2.366 2.366 0 0 0 2.083-.009zm-3.43.776a3.438 3.438 0 0 0-3.44 3.44v3.703c0 .146.117.265.263.265h11.114c.146 0 .264-.12.263-.265v-3.703a3.438 3.438 0 0 0-3.44-3.44c-.344.008-.344.522 0 .53a2.898 2.898 0 0 1 2.91 2.91v3.44h-1.321v-2.387c0-.353-.53-.353-.53 0v2.386H5.029v-2.386c0-.353-.53-.353-.53 0v2.386H3.174v-3.44a2.9 2.9 0 0 1 2.912-2.91c.346-.008.346-.521 0-.529z"></path>
                            </g>
                        </svg>
                    </div>
                </Row>
                <Row><span style={{ marginTop: "10px" }}>Men's Prayer Room</span></Row>
                <Row><span style={{ marginTop: "16px" }}>1200 Places</span></Row>
            </div>
        </>
    )
}