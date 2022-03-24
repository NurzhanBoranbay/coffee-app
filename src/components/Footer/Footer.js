import AfterTitle from '../AfterTitle/AfterTitle';
import '../Main/AboutUs/AboutUs.css';
import './Footer.css';

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__inner">
            <ul className="footer__list">
               <li className="footer__link">
                  <img src="footer-logo.png" alt="Footer Logo Black" />
                  <a href="#">Coffee house</a>
               </li>
               <li className="footer__link"><a href="#">Our coffee</a></li>
               <li className="footer__link"><a href="#">For your pleasure</a></li>
            </ul>
            
            <AfterTitle src="after-title-black.png" nameClass="after-img black" />

         </div>
      </footer>
   )
}

export default Footer;