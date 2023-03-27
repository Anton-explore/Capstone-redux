import { forwardRef } from "react";
import { BoxProps } from "../../services/types";
import Heading from "./Heading";


type Ref = HTMLDivElement;

const Box = forwardRef<Ref, BoxProps>(( {title, content, color, id}: BoxProps, forwardedRef ) =>
(
    <div id={id} ref={forwardedRef}>
        <Heading color={ color } title={ title } />
        <p>{ content }</p>
    </div>
))


export default Box;