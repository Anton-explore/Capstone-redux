import Box from "../../components/Box";
import Feedback from "../../components/Feedback";


import { feedbackProps, nameProps, } from "../../services/props";


const Main = () => {

    return (
        <>
            <Box
                id='about'
                title='About me'
                content={nameProps.description as string}
            />
            <Feedback {...feedbackProps} />
        </>
    )
}

export default Main;