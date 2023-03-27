import { ButtonProps } from "../../services/types";
import { StyledButton, StyledHeading } from "./Button.styles";


const Button: React.FC<ButtonProps> = ( { text, icon, onClick, disabled, shrunk, up } ) => {

    return (
        <>
            <StyledButton
                type="submit"
                onClick={onClick}
                disabled={!!disabled}
                up={!!up}
            >
                {icon}
                {text ? <StyledHeading shrunk={!!shrunk}>{text}</StyledHeading> : null}
                
            </StyledButton>
        </>
    )

}

export default Button;