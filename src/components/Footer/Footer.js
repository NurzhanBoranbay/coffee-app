import AfterTitle from '../AfterTitle/AfterTitle';
import Navigation from '../Navigation/Navigation';
import '../Main/AboutUs/AboutUs.css';
import './Footer.css';
import footerLogo from '../../images/footer-logo.png';
import imgBlack from '../../images/after-title-black.png';

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__inner">

            <Navigation src={footerLogo} color="black" />
            
            <AfterTitle src={imgBlack} nameClass="after-img black" />

         </div>
      </footer>
   )
}

export default Footer;