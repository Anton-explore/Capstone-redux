import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledLoaderWrapper } from "./Loader.styles";

type LoaderProps = {
    status?: boolean;
    error?: boolean;
}

const Loader = ({status, error }: LoaderProps) => {
  return (
    <>
      {!!status && <StyledLoaderWrapper> <FontAwesomeIcon className="icon" icon={faSyncAlt} /></StyledLoaderWrapper>}
      {!!error && <StyledLoaderWrapper> <p>Something went wrong; please review your server connection!</p> </StyledLoaderWrapper> }
    </>
  );
};

export default Loader;