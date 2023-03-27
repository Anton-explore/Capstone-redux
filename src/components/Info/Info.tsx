import { InfoProps } from "../../services/types";
import { StyledInfoWrapper } from "./Info.styles";


const Info = (props: InfoProps) => {

    return (
        <StyledInfoWrapper>{ props.text }</StyledInfoWrapper>
    )
}

export default Info;
