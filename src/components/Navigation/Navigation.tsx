import { faComment, faGem, faGraduationCap, faLocationArrow, faPen, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink } from 'react-router-dom';
import { MenuLinks } from './Navigation.styles';


const Navigation = () => {

    return (
        <MenuLinks>
            <li className='app-nav-item'>
                <NavLink to='about'>
                    <FontAwesomeIcon icon={faUser} />
                    <span>About me</span>
                </NavLink>
            </li>
            <li className='app-nav-item'>
                <NavLink to='education'>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <span>Education</span>
                </NavLink>
            </li>
            <li className='app-nav-item'>
                <NavLink to='experience'>
                    <FontAwesomeIcon icon={faPen} />
                    <span>Experience</span>
                </NavLink>
            </li>
            <li className='app-nav-item'>
                <NavLink to='skills'>
                    <FontAwesomeIcon icon={faGem} />
                    <span>Skills</span>
                </NavLink>
            </li>
            <li className='app-nav-item'>
                <NavLink to='portfolio'>
                    <FontAwesomeIcon icon={faSuitcase} />
                    <span>Portfolio</span>
                </NavLink>
            </li>
            <li className='app-nav-item'>
                <NavLink to='contacts'>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    <span>Contacts</span>
                </NavLink>
            </li>
            <li className='app-nav-item'>
                <NavLink to='feedbacks'>
                    <FontAwesomeIcon icon={faComment} />
                    <span>Feedbacks</span>
                </NavLink>
            </li>
        </MenuLinks>
    )
}


export default Navigation;