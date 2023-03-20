import { forwardRef } from "react";
import Heading from "../Box/Heading";
import Info from "../Info";
import PhotoBox from "../PhotoBox";

interface FeedProps {
    feedback: string,
    reporter: {
        photoUrl: string;
        name: string;
        profession: string;
        citeUrl: string
    }
}

export interface FeedDataProps {
    data: FeedProps[];
}

export type Ref = HTMLElement;

const Feedback = forwardRef<Ref, FeedDataProps>(({ data }: FeedDataProps, forwardedRef) => {
    
    return (
        <section ref={forwardedRef} id="feedbacks">
            <Heading title='Feedbacks' />
            {
                data.map((item, index) => 
                    <div key={index+1}>
                        <div>
                            <Info text={item.feedback} />
                        </div>
                        <PhotoBox
                            avatar={item.reporter.photoUrl}
                            name={item.reporter.name}
                            title={item.reporter.profession}
                            description={<a href={item.reporter.citeUrl}>{item.reporter.citeUrl}</a>}
                            isInline
                        />
                    </div>
                )
            }
        </section>    
    )
})

Feedback.displayName = "Feedback";

export default Feedback;