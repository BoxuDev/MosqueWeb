import { MDBFooter, MDBIcon, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

export const FooterCom = () => {
    return (
            <MDBFooter className='text-center text-lg-start text-muted'>
                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    Sultan Abdulmecid Mosque
                                </h6>
                                <p>16 Hardwicke Lane, Hardwicke Street, Dublin 1, DO1 Y223</p>
                            </MDBCol>
                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Donate</h6>
                                <p><Link to='/Donate/Zakah' className='text-reset'>Zakah</Link></p>
                                <p><Link to='/Donate/Sadaqa' className='text-reset'>Sadaqa</Link></p>
                                <p><Link to='/Donate/Iftar' className='text-reset'>Iftar</Link></p>
                                <p><Link to='/Donate/Qurbani' className='text-reset'>Qurbani</Link></p>
                                <p><Link to='/Donate/Other' className='text-reset'>Other</Link></p>
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful Informations</h6>
                                <p><Link to='/FastingRamadan' className='text-reset'>Fasting</Link></p>
                                <p><Link to='/PrayerIslam' className='text-reset'>Salah</Link></p>
                                <p><Link to='/ZekahCharity' className='text-reset'>Zekah</Link></p>
                                <p><Link to='/HajjUmrah' className='text-reset'>Hajj</Link></p>
                                <p><a href='https://www.suleymaniyeaid.com/' target='_blank' className='text-reset'>Suleymaniye Aid</a></p>
                            </MDBCol>
                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p><MDBIcon icon="home" className="me-2" />16 Hardwicke Lane, Hardwicke Street, Dublin 1, DO1 Y223</p>
                                <p><MDBIcon icon="envelope" className="me-3" />dublincharity@gmail.com</p>
                                <p><MDBIcon icon="phone" className="me-3" />+353 (87) 406 6894</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
            </MDBFooter>
    );
}