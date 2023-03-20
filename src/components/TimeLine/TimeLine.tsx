import { forwardRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { getEducation } from '../../features/education/educationSlice';
import { RootState, useAppDispatch } from '../../store/store';
import Heading from '../Box/Heading';
import { StyledInfo, StyledTitle, StyledText, StyledItem, StyledInfoBlock, StyledDateBlock } from './TimeLine.styles';


export interface TimelineProps {
    id: number,
    date: number,
    title: string,
    description: string
}

export interface TimelineDataProps {
    educations: TimelineProps[];
}

interface IdProps {
    id: string;
}

export type Ref = HTMLElement;

const TimeLine = forwardRef<Ref, IdProps>(({ id }: IdProps, forwardedRef ) => {


    // getEducation();
    const dispatch = useAppDispatch();
    const educationsList = useSelector((store: RootState) => store.education.educations);
    const status = useSelector((store: RootState) => store.education.isLoading);
    const error = useSelector((store: RootState) => store.education.error);

    useEffect(() => {
        dispatch(getEducation());
    }, [dispatch])

    return (
        <section ref={forwardedRef} id={id}>
            <Heading title='Education' />
            
            {status && <p>Loading...</p>}
            {error !== null && (
                <p>Oops, some error occured... {error}</p>
            )}
            {educationsList.length > 0 && (
                <StyledInfo className="timeline-list">
                    {educationsList.map((item: TimelineProps) =>
                        <StyledItem key={item.id}>
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