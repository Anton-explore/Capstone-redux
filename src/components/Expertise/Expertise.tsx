import { forwardRef } from "react";

import Box from "../Box";
import Heading from "../Box/Heading";
import { BoxBlock } from "./Expertise.styles";

interface ExperienceData {
    date: string;
    info: {
        company: string;
        job: string;
        description: string;
    }
}

export interface ExperienceDataProps {
    data: ExperienceData[];
}

export type Ref = HTMLElement;

const Expertise = forwardRef<Ref, ExperienceDataProps>(({ data }: ExperienceDataProps, forwardedRef) => { 

    return (
        <section ref={forwardedRef} id="experience">
            <Heading title='Experience' />
            {
                data?.map(({date, info}, index) =>
                (<BoxBlock key={index}>
                    <div className="left">
                        <Box color='black' title={info.company} content={date} />
                    </div>
                    <div className="right">
                        <Box color='black' title={info.job} content={ info.description } />
                    </div>
                </BoxBlock>)
                )
            }
        </section>
    )

})

Expertise.displayName = "Expertise";

export default Expertise;