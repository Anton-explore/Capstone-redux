import { NavLink } from "react-router-dom";

import PhotoBox from "../../components/PhotoBox";
import Button from "../../components/Button";

import { BUTTONS_TEXT, nameProps } from "../../services/props";
import { StyledMainWrapper } from "./Home.styles";

const Home = () => {

    return (
        <StyledMainWrapper data-testid="home-page">
            <PhotoBox
                {...nameProps}
                facade
            />
            <NavLink to="/details">
                <Button text={BUTTONS_TEXT.MORE} />
            </NavLink>
        </StyledMainWrapper>
    )
}

export default Home;