import { forwardRef } from 'react';

import useTimeLineHook from '../../features/hooks/useTimelineHook';
import { TITLES } from '../../services/props';
import { Ref, TimelineProps, UniProps } from '../../services/types';

import Heading from '../Box/Heading';
import Loader from '../Loader';
import { StyledInfo, StyledTitle, StyledText, StyledItem, StyledInfoBlock, StyledDateBlock } from './TimeLine.styles';




const TimeLine = forwardRef<Ref, UniProps>(({ id }: UniProps, forwardedRef ) => {


    const { educationsList, error, status} = useTimeLineHook();

    return (
        <section ref={forwardedRef} id={id}>
            <Heading title={TITLES.EDU} />
            
            {status && <Loader status={status} />}
            {error !== null && (
                <Loader error={true} />
            )}
            {(!!educationsList.length && error === null && !status ) && (
                <StyledInfo className="timeline-list">
                    {educationsList.map((item: TimelineProps, index: number) =>
                        <StyledItem key={index+1}>
                            <StyledDateBlock className="timeline-date">{item.date}</StyledDateBlock>
                            <StyledInfoBlock>
                                <StyledTitle>{item.title}</StyledTitle>
                                <StyledText>{item.description}</StyledText>
                            </StyledInfoBlock>
                        </StyledItem>)
                    }
                </StyledInfo>)}
        </section>
    )
})

TimeLine.displayName = "TimeLine";

export default TimeLine;