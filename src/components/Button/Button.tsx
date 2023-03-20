import { StyledButton, StyledDiv } from "./Button.styles";

interface ButtonProps {
    text?: string,
    icon?: string | JSX.Element,
    onClick?: () => void;
    disabled?: boolean;
    shrunk?: boolean;
    up?: boolean;
}


const Button: React.FC<ButtonProps> = ( { text, icon, onClick, disabled, shrunk, up } ) => {

    return (
        <>
            <StyledButton
                type="submit"
                onClick={onClick}
                disabled={disabled}
                up={!!up}
            >
                {icon}
                {text ? <StyledDiv shrunk={!!shrunk}>{text}</StyledDiv> : null}
                
            </StyledButton>
        </>
    )

}

export default Button;