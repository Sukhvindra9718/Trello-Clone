import React from 'react';
import TrelloVerifyLeft from '../images/trello-verify-left.svg';
import TrelloVerifyRight from '../images/trello-verify-right.svg';
import TrelloLogo from '../images/trelloblue.svg';
import { FaAtlassian } from "react-icons/fa6";
import { useLocation, useSearchParams } from "react-router-dom";

const VerificationWelcome2 = () => {
    const { state } = useLocation();
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const source = searchParams.get('source');
    console.log(token, source)
    // const sendVerifyEmail = async () => {
    //     const url = `http://localhost:5000/api/v1/sendVerifyEmail`;
    //     fetch(url, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ email: state.email, boardId: state.boardId,resend:true ,isUserExist:true})
    //     }).then(async (response) => {
    //       if (response.ok) {
    //         alert("Resend Verification email sent successfully")
    //       }
    //     }).catch(error => {
    //       console.error('Error:', error);
    //     });
    //   }


    return (
        <div style={styles.pageContainer}>
            <div style={styles.backgroundImageLeft}>
                <img src={TrelloVerifyLeft} alt="Background" style={styles.backgroundImage} />
            </div>

            <div style={styles.container}>
                <div className='flex flex-col items-center'>
                    <img src={TrelloLogo} alt="Trello Logo" style={styles.logo} />
                    <h2 style={styles.title}>Email address verified</h2>
                    <h3 className='font-semibold'>Finish setting up your account</h3>
                </div>
                <div className='my-2'>
                    <p className='font-semibold'>Email address</p>
                    <p style={styles.email}>20b1029.bca1@gitmgurgaon.com</p>
                </div>

                <div className='w-full flex flex-col'>
                    <label className='font-semibold'>Full name*</label>
                    <input type="text" className=' border-grey border-2 pl-4 rounded-md h-12' placeholder='Enter your full name' />
                </div>
                <div className='w-full flex flex-col my-2'>
                    <label className='font-semibold'>Password*</label>
                    <input type="text" className=' border-grey border-2 pl-4 rounded-md h-12' placeholder='Enter your password' />
                </div>
                <p>By signing up, I accept the Atlassian <a style={styles.resendLink}>Cloud Terms of Service</a> and acknowledge the <a style={styles.resendLink}>Privacy Policy</a></p>
                <button style={{ backgroundColor: "rgb(0 128 255)" }} className='text-white w-full h-12 rounded-md text-2xl my-2'>Continue</button>
                <hr style={styles.separator} />
                <div style={styles.footer}>
                    <div className="flex gap-2 items-center">
                        <FaAtlassian size={20} className='color' /> <h5 className='text-end'>ATLASSIAN</h5>
                    </div>
                    <p style={styles.footerText}>One account for Trello, Jira, Confluence and more.</p>
                    <p style={styles.footerText}>This site is protected by reCAPTCHA and Google <a style={styles.resendLink}>Privacy Policy</a> and <a style={styles.resendLink}>Terms of Service</a> apply</p>
                </div>
            </div>
            <div style={styles.backgroundImageright}>
                <img src={TrelloVerifyRight} alt="Background" style={styles.backgroundImage} />
            </div>
        </div>
    );
};

const styles = {
    pageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f5f7',
        position: 'relative',
        overflow: 'hidden',
    },
    backgroundImageLeft: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1,
    },
    backgroundImageright: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1,
    },
    backgroundImage: {
        width: '400px',
        height: 'auto',
        opacity: 1,
    },
    container: {
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '40px 40px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '500px',
    },
    logo: {
        marginBottom: '20px',
    },
    title: {
        fontSize: '20px',
        fontWeight: "600",
        color: '#333',
    },
    envelope: {
        width: '100px',
        height: 'auto',
        margin: '20px 0',
    },
    text: {
        fontSize: '16px',
        color: '#333',
    },
    email: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#333',
    },
    resendLink: {
        fontSize: '14px',
        color: '#0052cc',
        cursor: 'pointer',
    },
    separator: {
        width: '100%',
        border: 'none',
        borderTop: '1px solid #ddd',
        margin: '20px 0',
    },
    footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    footerLogo: {
        width: '100px',
        height: '100px',
    },
    footerText: {
        fontSize: '14px',
        color: '#777',
        marginTop: '10px',
    },
};

export default VerificationWelcome2;
