
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
import { useParams } from "react-router-dom";

import Panel from "../../components/Panel";
import Box from "../../components/Box";
import Address from "../../components/Address";
import Feedback from "../../components/Feedback";
import TimeLine from "../../components/TimeLine";
import Expertise from "../../components/Expertise";
import Portfolio from "../../components/Portfolio";
import SkillsList from "../../components/SkillsList";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { expertiseProps, feedbackProps, nameProps } from "../../services/props";


const Inner = () => {

    // const navigate = useNavigate();
    const onClickBackHandler = () => {
        // navigate('/details/', { replace: true });
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    interface RouteParams {
        [key: string]: string | undefined;
        section?: keyof typeof sectionsList;
    }

    const params = useParams<RouteParams>();

    const sectionAboutRef = useRef<HTMLDivElement>(null);
    const sectionEducationRef = useRef<HTMLElement>(null);
    const sectionExperienceRef = useRef<HTMLElement>(null);
    const sectionSkillsRef = useRef<HTMLElement>(null);
    const sectionPortfolioRef = useRef<HTMLElement>(null);
    const sectionContactsRef = useRef<HTMLElement>(null);
    const sectionFeedbacksRef = useRef<HTMLElement>(null);

    const sectionsList = useMemo(() => {
        return {
            about: sectionAboutRef,
            education: sectionEducationRef,
            experience: sectionExperienceRef,
            skills: sectionSkillsRef,
            portfolio: sectionPortfolioRef,
            contacts: sectionContactsRef,
            feedbacks: sectionFeedbacksRef
        };
    }, []);


    const scrollToSection = useCallback((section: keyof typeof sectionsList | undefined) => {
        if (!!section && section in sectionsList) {
            sectionsList[section].current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [sectionsList]);

    useEffect(() => {
        scrollToSection(params.section);
    }, [params, scrollToSection]);

    return (
        <div className="app-wrapper">
            <Panel />
            

            <main className="app-main-inner">
                <Box
                    ref={sectionAboutRef}
                    id='about'
                    title='About me'
                    content={nameProps.description as string}
                />
                <TimeLine ref={sectionEducationRef} id='educations' />
                <Expertise ref={sectionExperienceRef} {...expertiseProps} />
                <SkillsList ref={sectionSkillsRef} id='skills'/>
                <Portfolio ref={sectionPortfolioRef} id='portfolio' />
                <Address ref={sectionContactsRef} id='contacts' />
                <Feedback ref={sectionFeedbacksRef} {...feedbackProps} />

            </main>
            <Button
                up
                icon={<FontAwesomeIcon icon={faChevronUp} />}
                onClick={onClickBackHandler}
            />
        </div>
    )
}

export default Inner;

