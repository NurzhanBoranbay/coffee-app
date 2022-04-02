
import './Navigation.css';

const Navigation = (props) => {

   let nameClass = 'nav__list';
   if (props.color === 'white') {
      nameClass += ' white';
   } else {
      nameClass += ' black';
   }

   return (
      <nav className="nav">
         <ul className={nameClass}>
            <li className="list__item list__item-1">
               <img src={props.src} alt="Logotip"/>
               <a href="#">Coffee house</a>
            </li>
            <li className="list__item">
               <a href="#">Our coffee</a>
            </li>
            <li className="list__item">
               <a href="#">For your pleasure</a>
            </li>
         </ul>
      </nav>
   )
}

export default Navigation;