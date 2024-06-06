import React from 'react';
import TrelloVerifyLeft from '../images/trello-verify-left.svg';
import TrelloVerifyRight from '../images/trello-verify-right.svg';
import Envelop from '../images/envelope.svg';
import TrelloLogo from '../images/trelloblue.svg';
import { FaAtlassian } from "react-icons/fa6";
import {useLocation} from "react-router-dom";

const VerificationWelcome = () => {
    const {state} = useLocation();
    const sendVerifyEmail = async () => {
        const url = `http://localhost:5000/api/v1/sendVerifyEmail`;
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: state.email, boardId: state.boardId,resend:true ,isUserExist:true})
        }).then(async (response) => {
          if (response.ok) {
            alert("Resend Verification email sent successfully")
          }
        }).catch(error => {
          console.error('Error:', error);
        });
      }
    return (
        <div style={styles.pageContainer}>
            <div style={styles.backgroundImageLeft}>
                <img src={TrelloVerifyLeft} alt="Background" style={styles.backgroundImage}/>
            </div>
                
            <div style={styles.container}>
                <img src={TrelloLogo} alt="Trello Logo" style={styles.logo} />
                <h2 style={styles.title}>Check your inbox to log in</h2>
                <img src={Envelop} alt="Envelope" style={styles.envelope} />
                <p style={styles.text}>
                    To complete setup and log in, click the verification link in the email we’ve sent to
                </p>
                <p style={styles.email}>{state.email}</p>
                <div style={styles.resendLink} onClick={()=> sendVerifyEmail()}>Resend verification email</div>
                <hr style={styles.separator} />
                <div style={styles.footer}>
                    <div className="flex gap-2 items-center">
                        <FaAtlassian size={20} className='color' /> <h5 className='text-end'>ATLASSIAN</h5>
                    </div>
                    <p style={styles.footerText}>One account for Trello, Jira, Confluence and more.</p>
                </div>
            </div>
            <div style={styles.backgroundImageright}>
            <img src={TrelloVerifyRight} alt="Background" style={styles.backgroundImage}/>
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
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '40px 20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        marginBottom: '20px',
    },
    title: {
        fontSize: '18px',
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
        margin: '10px 0',
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

export default VerificationWelcome;
