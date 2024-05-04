import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div> <div className="footer-basic">
        <footer>
            <div className="social"><a href="https://www.instagram.com/mobilecareaugusta?igsh=NTJrd2Z4a28wbmxv"><i class="icon "><InstagramIcon/></i></a><a href={"mobilecareaugusta5@gmail.com"} target="'_blank'"><i class="icon " ><EmailIcon/></i></a><a href="/"><i class="icon "><XIcon/></i></a><a href="https://www.facebook.com/mobilecareaugusta?mibextid=LQQJ4d"><i class="icon"><FacebookIcon/></i></a></div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="/">Home</a></li>
                <li className="list-inline-item"><a href="/">Services</a></li>
                <li className="list-inline-item"><a href="/">About</a></li>
                <li className="list-inline-item"><a href="/">Terms</a></li>
                <li className="list-inline-item"><a href="/">Privacy Policy</a></li>
            </ul>
            <p className="copyright">Mobile Care © 2024</p>
        </footer>
    </div></div>
  )
}

export default Footer