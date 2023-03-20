import { ExperienceDataProps } from "../components/Expertise";
import { FeedDataProps } from "../components/Feedback";
import { PhotoBoxProps } from "../components/PhotoBox";
import { TimelineDataProps } from "../components/TimeLine";
import userAv from '../assets/images/User_avatar_Anton.png';

export const nameProps: PhotoBoxProps = {
    name: "Anton Vladykin",
    title: "Front-end developer (Javascript, React)",
    description: "I'm a junior developer. I've switched on this way from studying sociology through the work in the tourism sphere, as a head of the travel agency, gained experience with the demanding clients in the segment of luxury leisure. And for now my goal is to become front end developer. I focus on the efficiency and productivity of my work. I pay great attention to details and strive to achieve a harmony in all of my life. I have improved skills in communication, understanding companions, argumentation and persuasion. I have experience both in team work and self-management.",
    avatar: userAv
}

export const feedbackProps: FeedDataProps = {
    data: [
        {
            feedback: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
            reporter: {
                photoUrl: 'https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg',
                name: 'John Doe',
                profession: 'Programmer',
                citeUrl: 'https://www.citeexample.com'
            }
        },
        {
            feedback: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
            reporter: {
                photoUrl: 'https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg',
                name: 'John Doe',
                profession: 'QA',
                citeUrl: 'https://www.citeexample.com'
            }
        }
    ]
};
    
export const timelineProps: TimelineDataProps = {
    educations: [
        {
            id: 1,
            "date": 2023,
            "title": "EPAM UpSkill",
            "description": "Frontend Development. Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n"
        },
        {
            id: 2,
            "date": 2022,
            "title": "Prometheus",
            "description": "Basics of Web UI Development.  Javascript basic course. Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n"
        },
        {
            id: 3,
            "date": 2009,
            "title": "LNU Tarasa Shevchenka",
            "description": "Sociology & PR, International tourism. Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n"
        }
    ]
}

export const expertiseProps: ExperienceDataProps = {
    data: [
        {
            date: '2022-2023',
            info:
            {
                company: 'EPAM UpSkill',
                job: 'Projects on mentorship EPAM UpSkill',
                description: 'Stack: HTML, CSS, SCSS, JavaScript, Typescript, React, Git(Github,Gitlab) Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor'
            }
        },
        {
            date: '2014-2020',
            info:
            {
                company: 'Coral Travel Market LLC',
                job: 'Senior specialist',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor'
            }
        },
        {
            date: '2008-2014',
            info:
            {
                company: 'Planeta-Service travel agency',
                job: 'Entrepreneur, Head of the Travel Agency',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor'
            }
        }
    ]
}