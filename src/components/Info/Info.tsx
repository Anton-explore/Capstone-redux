import { StyledWrapper } from "./Info.styles";


type InfoProps = {
    text: string;
}

const Info = (props: InfoProps) => {

    return (
        <StyledWrapper>{ props.text }</StyledWrapper>
    )
}

export default Info;
