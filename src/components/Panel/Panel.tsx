import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import PhotoBox from "../PhotoBox";
import Navigation from "../Navigation";
import Button from "../Button";

import { MenuContainer, StyledPanel, Toggle } from "./Panel.styles";
import { nameProps } from "../../services/props";

const Panel = () => {

    const navigate = useNavigate();
    const onClickBackHandler = () => {
        navigate('/', { replace: true });  
    };

    const [isExpanded, setIsExpanded] = useState(true);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <StyledPanel isExpanded={isExpanded} >
            <MenuContainer isExpanded={isExpanded}>
                <div>
                    <PhotoBox
                        name={nameProps.name}
                        avatar={ nameProps.avatar }
                    />
                    <Navigation />
                </div>
                <NavLink to="/">
                    <Button
                        shrunk
                        text="Go back"
                        icon={<FontAwesomeIcon icon={faChevronLeft} />}
                        onClick={onClickBackHandler}
                    />
                </NavLink>
            </MenuContainer>
            <Toggle onClick={handleToggle}>
                <FontAwesomeIcon icon={faBars} />
            </Toggle>
        </StyledPanel>
    )
}

export default Panel;