import FooterLogo from '../images/FooterLogo.svg'
import BrowserLogo from '../images/browser-47.svg'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'
import { FaAngleDown } from "react-icons/fa6";
function Footer() {
  return (
    <footer>
      <div className='footer-top-container'>
        <div>
          <img class="h-7" src={FooterLogo} alt=""></img>
        </div>
        <div>
          <h1>About Trello</h1>
          <p>What's behind the boards.</p>
        </div>
        <div>
          <h1>Jobs</h1>
          <p>Learn about open roles on the Trello team</p>
        </div>
        <div>
          <h1>Apps</h1>
          <p>Download the Trello App for your Desktop or Mobile devices</p>
        </div>
        <div>
          <h1>Contact us</h1>
          <p>Need anything? Get in touch and we can help</p>
        </div>
      </div>
      <div className='hr'></div>
      <div className='footer-bottom-container'>
        <div className='flex items-center gap-12'>
          <div className='flex items-center gap-2'>
            <img src={BrowserLogo} alt=""></img>
            <h2>English</h2>
            <FaAngleDown size={20} style={{ marginLeft: "3rem", cursor: "pointer" }} />
          </div>
          <div className='flex items-center gap-8'>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Terms of Service</Link>
            <p>Copyright © 2024 Atlassian</p>
          </div>
        </div>
        <div className='flex items-center gap-8'>
          <div className='icon-circle'><FaInstagram size={25} /></div>
          <div className='icon-circle'><FaFacebook size={25} /></div>
          <div className='icon-circle'><FaLinkedin size={25} /></div>
          <div className='icon-circle'><FaTwitter size={25} /></div>
          <div className='icon-circle'><FaYoutube size={25} /></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer