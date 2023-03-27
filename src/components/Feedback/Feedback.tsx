import { forwardRef } from "react";
import { TITLES } from "../../services/props";
import { FeedDataProps, Ref } from "../../services/types";
import Heading from "../Box/Heading";
import Info from "../Info";
import PhotoBox from "../PhotoBox";



const Feedback = forwardRef<Ref, FeedDataProps>(({ data }: FeedDataProps, forwardedRef) => {
    
    return (
        <section ref={forwardedRef} id="feedbacks">
            <Heading title={TITLES.FEED} />
            {
                data.map((item, index) => {
                    const { photoUrl, name, citeUrl, profession } = item.reporter;
                    
                    return (
                        <div key = { index + 1 }>
                            <div>
                                <Info text={item.feedback} />
                            </div>
                            <PhotoBox
                                avatar={photoUrl}
                                name={name}
                                title={profession}
                                description={<a href={citeUrl}>{citeUrl}</a>}
                                isInline
                            />
                        </div>
                    )
                } )
            }
        </section>    
    )
})

Feedback.displayName = "Feedback";

export default Feedback;