import { MDBFooter, MDBIcon, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

export const FooterCom = () => {
    return (
        <>
            <MDBFooter className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks: </span>
                    </div>
                    <div>
                        <a href='www.facebook.com' target="_blank" className='me-4 text-reset'><MDBIcon fab icon="facebook-f" /></a>
                        <a href='www.twitter.com' target="_blank" className='me-4 text-reset'><MDBIcon fab icon="twitter" /></a>
                        <a href='www.instagram.com' target="_blank" className='me-4 text-reset'><MDBIcon fab icon="instagram" /></a>
                    </div>
                </section>
                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    Company name
                                </h6>
                                <p>16 Hardwicke Lane, Hardwicke Street, Dublin 1, DO1 Y223</p>
                            </MDBCol>
                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Donate</h6>
                                <p><Link to='/Donate/Zekah' className='text-reset'>Zekah</Link></p>
                                <p><Link to='/Donate/Charity' className='text-reset'>Charity</Link></p>
                                <p><Link to='/Donate/Iftar' className='text-reset'>Iftar</Link></p>
                                <p><Link to='/Donate/Qurbani' className='text-reset'>Qurbani</Link></p>
                                <p><Link to='/Donate/Other' className='text-reset'>Other</Link></p>
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
                                <p><Link to='/FastingRamadan' className='text-reset'>Fasting</Link></p>
                                <p><Link to='/PrayerIslam' className='text-reset'>Salah</Link></p>
                                <p><Link to='/ZekahCharity' className='text-reset'>Zekah</Link></p>
                                <p><Link to='/HajjUmrah' className='text-reset'>Hajj</Link></p>
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
        </>
    );
}