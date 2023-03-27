import { PhotoBoxProps } from "../../services/types";
import { StyledImgDiv, StyledWrapper } from "./PhotoBox.styles";


const PhotoBox = ({ name, title, description, avatar, isInline, facade }: PhotoBoxProps) => {
    
    return (
        <StyledWrapper isInline={!!isInline} facade={!!facade}>
            <StyledImgDiv isInline={!!isInline} facade={!!facade}>
                <img src={avatar} alt="Avatar" />
            </StyledImgDiv>
            <h1>{ name }</h1>
            {title ? <h2>{title}</h2> : null}
            {description ? <p>{description}</p> : null}
        </StyledWrapper>
    )
}

export default PhotoBox;
