import React, { useState } from "react";
import { FaAtlassian } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { useNavigate } from 'react-router-dom'



function Login() {
  const [email, setEmail] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [otp, setOtp] = useState('')
  const navigate = useNavigate();



  const handleLogin = () => {
    const url = 'http://localhost:5000/api/v1/verifyOtp'
    console.log(url)
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, otp: otp })
    }).then(async (res) => {
      const data = await res.json();

      if (data.success) {
        navigate('/dashboard')
      } else {
        navigate('/serverError')
      }
    })


  }

  const handleVerifyEmail = () => {
    const url = 'http://localhost:5000/api/v1/verifyEmail'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    }).then(async (res) => {
      const data = await res.json();
      console.log(data)
      if (data.success) {
        alert('OTP sent to your email')
        setShowPass(true)
      } else {
        alert('Email not found')
        setShowPass(false)
      }
    })


  }



  return (
    <>
      <section className="background"></section>
      <section className="section_Login">
        <div className="item_holders">
          <div className="logo">
          <img src="src/images/Trello_logo.svg.webp" alt="" />
          </div>
          <div className="input">
            <h1 className="text-center w-full text-m font-bold">Login to continue</h1>
            <input
              type="email"
              className=" border-grey border-2 pl-4"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {showPass && <input
              type="text"
              className=" border-grey border-2 pl-4"
              placeholder="Enter your otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />}
            {showPass ? <button
              style={{ backgroundColor: "rgb(0 128 255)" }}
              className="text-white w-full"
              onClick={() => handleLogin()}
            >
              Login
            </button> :
              <button
                style={{ backgroundColor: "rgb(0 128 255)" }}
                className="text-white w-full"
                onClick={() => handleVerifyEmail()}
              >
                Continue
              </button>}
          </div>
            <div className="orContinueWith">
            <p>Or continue with</p>
            <div className="icons">
              <FcGoogle size={25} /> <p>Google</p>
            </div>
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#ff5722"
                  d="M6 6H22V22H6z"
                  transform="rotate(-180 14 14)"
                ></path>
                <path
                  fill="#4caf50"
                  d="M26 6H42V22H26z"
                  transform="rotate(-180 34 14)"
                ></path>
                <path
                  fill="#ffc107"
                  d="M26 26H42V42H26z"
                  transform="rotate(-180 34 34)"
                ></path>
                <path
                  fill="#03a9f4"
                  d="M6 26H22V42H6z"
                  transform="rotate(-180 14 34)"
                ></path>
              </svg>
              <p>Microsoft</p>
            </div>
            <div className="icons">
              <DiApple size={25} /> <p>Apple</p>
            </div>
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#33d375"
                  d="M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"
                ></path>
                <path
                  fill="#33d375"
                  d="M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"
                ></path>
                <path
                  fill="#40c4ff"
                  d="M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"
                ></path>
                <path
                  fill="#40c4ff"
                  d="M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"
                ></path>
                <path
                  fill="#e91e63"
                  d="M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"
                ></path>
                <path
                  fill="#e91e63"
                  d="M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"
                ></path>
                <path
                  fill="#ffc107"
                  d="M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"
                ></path>
                <path
                  fill="#ffc107"
                  d="M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"
                ></path>
              </svg>
              <p>Slack</p>
            </div>
            <div className="creatAnAcount">
              <Link>Can't Login?</Link>
              <p className="css-1x34ed1">•</p>
              <Link to="/signup">Creat an account</Link>
            </div>
          </div>
          <div className="footer">
            <div className="logos">
              <FaAtlassian size={20} className="color" />
              <h5 className="text-end">ATLASSIAN</h5>
            </div>
            <div className="footerText">
              <p>One account for Trello, Jira, Confluence and more.</p>
              <p>Privacy Policy</p>
              <p className="css-1x34ed1">•</p>
              <p>User Notice</p>
              <p>This site is protected by reCAPTCHA and the Google </p>
              <p>
                <Link className="link">Privacy Policy</Link> and
                <Link className="link">Terms of Service</Link> apply.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
