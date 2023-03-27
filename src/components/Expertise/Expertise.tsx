import { forwardRef } from "react";
import { TITLES } from "../../services/props";
import { ExperienceDataProps, Ref } from "../../services/types";

import Box from "../Box";
import Heading from "../Box/Heading";
import Loader from "../Loader";
import { BoxBlock } from "./Expertise.styles";



const Expertise = forwardRef<Ref, ExperienceDataProps>(({ data }: ExperienceDataProps, forwardedRef) => { 

    return (
        <section ref={forwardedRef} id="experience">
            <Heading title={TITLES.EXP} />
            {!data && (
                <Loader error={true} />
            )}
            {
                data?.map(({date, info}, index) =>
                (<BoxBlock data-testid="job" key={index}>
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