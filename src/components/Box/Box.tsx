import { forwardRef } from "react";
import Heading from "./Heading";

interface BoxProps {
    title: string,
    content: string,
    color?: string,
    id?: string
};

export type Ref = HTMLDivElement;

const Box = forwardRef<Ref, BoxProps>(( {title, content, color, id}: BoxProps, forwardedRef ) =>
(
    <div id={id} ref={forwardedRef}>
        <Heading color={ color } title={ title } />
        <p>{ content }</p>
    </div>
))


export default Box;