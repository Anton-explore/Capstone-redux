import { NavLink } from "react-router-dom";

import PhotoBox from "../../components/PhotoBox";
import Button from "../../components/Button";

import { nameProps } from "../../services/props";

const Home = () => {

    return (
        <main className="app-main">
            <PhotoBox
                {...nameProps}
                facade
            />
            <NavLink to="/details">
                <Button text="Know more" />
            </NavLink>
        </main>
    )
}

export default Home;