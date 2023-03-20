import { StyledHeading } from "./Heading.styles";


const Heading = ({title, color }: { title: string, color?: string} ) => {

    return (
        <StyledHeading color={color}>{ title }</StyledHeading>
    )
    
}


export default Heading;