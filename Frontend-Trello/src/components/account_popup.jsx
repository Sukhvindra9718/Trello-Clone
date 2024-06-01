// THIS PAGE WILL BE SHOWN ON DASHBOARD ,WHEN YOU CLICK ON YOUR PROFILE PICTURE
import React from 'react'
import '../../styles/account_popup.css'


function accountpopup() {
  return (
    <div className='accountpopup'>
      <h2 className="boldtext">ACCOUNT</h2>
      <div className='user_info'><img src="" alt="profile_photo" />
    <p className="account_name">ACCOUNT NAME</p>
    <p className="account_mail">ACCOUNT MAIL</p></div>
 <ul>
   <a href=""><span className="">Switch Accounts</span></a> 
   <a href=""><span className="">Manage account</span></a>
    <a href=""><span className=""></span></a></ul>
    <span className="line"></span>
    <h2 className="boldtext">TRELLO</h2>
    <p className="">Profile and visibility</p>
    <p className="">Activity</p>
    <p className="">Cards</p>
    <p className="">Settings</p>
    <a href=""><p className="">Theme</p></a> 
    <a href=""><i className=""></i></a> 
    <span className="line line2"></span> 
    <p className="">Help</p>
    <p className="">Shortcuts</p>
    <span className="line line3"></span>
    <p className="">Log Out</p>
    </div>
  )
}
