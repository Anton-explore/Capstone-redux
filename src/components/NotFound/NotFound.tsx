import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { BUTTONS_TEXT } from "../../services/props";
import Button from "../Button";
import { StyledDescription, StyledPageWrapper, StyledTitle, } from "./NotFound.styles";

const NotFound = () => {
  const navigate = useNavigate();

  const onClickBackHandler = () => {
    navigate('/', { replace: true });  
  };

  return (
    <StyledPageWrapper data-testid="not-found-page">
      <StyledTitle>
        Page Not Found
      </StyledTitle>
      <StyledDescription>
        Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
      </StyledDescription>
      <Button
          shrunk
          text={BUTTONS_TEXT.RETURN}
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          onClick={onClickBackHandler}
      />
    </StyledPageWrapper>
  )
};

export default NotFound;