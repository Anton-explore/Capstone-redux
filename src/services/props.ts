import userAv from '../assets/images/User_avatar_Anton.png';
import card1 from '../assets/images/card1.jpg';
import card3 from '../assets/images/card3.png';
import phone from '../assets/images/phone.svg';
import mail from '../assets/images/mail.svg';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import skype from '../assets/images/skype.svg';

import { ExperienceDataProps, FeedDataProps, PhotoBoxProps, TimelineDataProps } from './types';

export const BUTTONS_TEXT = {
    BACK: 'Go back',
    RETURN: 'Back to our site',
    SKILL: 'Add skill',
    MORE: 'Know more',
    
}

export const TITLES = {
    ABOUT: 'About me',
    EDU: 'Education',
    EXP: 'Experience',
    SK: 'Skills',
    PF: 'Portfolio',
    CONT: 'Contacts',
    FEED: 'Feedbacks'
}

export const SKILL_LEVEL = {
    BG: 'Beginner',
    PR: 'Proficient',
    EX: 'Expert',
    MS: 'Master'
} 

export const CONTACTS = {
    tel: {
        link: '+500 342 242',
        text: '500 342 242',
        img: phone 
    },
    mail: {
        link: 'famtripuae19@gmail.com',
        text: 'famtripuae19@gmail.com',
        img: mail 
    },
    skype: {
        link: 'kamsolutions.pl',
        text: 'Skype',
        img: skype 
    },
    twitter: {
        link: 'https://twitter.com/wordpress',
        text: 'Twitter',
        img: twitter 
    },
    facebook: {
        link: 'https://www.facebook.com/facebook',
        text: 'Facebook',
        img: facebook 
    },
}

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
            "date": "2023",
            "title": "EPAM UpSkill",
            "description": "Frontend Development. Stack: HTML, CSS, SCSS, JavaScript, Git(Github,Gitlab), Typescript, React, Redux"
        },
        {
            id: 2,
            "date": "2023",
            "title": "DevPRO",
            "description": "Internship Javascript basic, Angular basic, Typescript basic"
        },
        {
            id: 3,
            "date": "2022",
            "title": "QAtestLab",
            "description": "Software Functional Testing (Manual QA). Debugging - creating bug-reports, check-list, check-plan, test-cases.  Game-testing, mobile-testing. Understanding of the life-cycle of Software Testing. SCRUM-methodology."
        },
        {
            id: 4,
            "date": "2022",
            "title": "Prometheus",
            "description": "Basics of Web UI Development.  Javascript basic course. Stack: JavaScript, OOP, HTML, CSS, SCSS, Bootstrap, Git(GitHub), Slack/Jira, Photoshop, Figma"
        
        },
        {
            id: 5,
            "date": "2009",
            "title": "LNU Tarasa Shevchenka",
            "description": "Sociology & PR - master degree, International tourism - practical course"
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
                description: 'Stack: HTML, CSS, SCSS, JavaScript, Typescript, React, Git(Github,Gitlab). Internship for creating awesome websites and applications'
            }
        },
        {
            date: '2014-2020',
            info:
            {
                company: 'Coral Travel Market LLC',
                job: 'Senior specialist',
                description: 'Working, as a travel agent, and, as a part of department of individual travels, in big international company. I gain experience of communication in international team, and such skills as: systems thinking, tactical and strategic thinking, individual approach, convincing and argumentation'
            }
        },
        {
            date: '2008-2014',
            info:
            {
                company: 'Planeta-Service travel agency',
                job: 'Entrepreneur, Head of the Travel Agency',
                description: 'Working as independent travel agent I increase my income in 200% and received such skills as: listening and attention, problem solving, result-orientation, self-motivation, and experience in decision-making processes.'
            }
        }
    ]
}


export const filtersDefault = [
  { "label": "All", active: true },
  { "label": "Ui", active: false },
  { "label": "Code", active: false },
];

export const portfolioItemsDefault = [
  {
    "id": "a",
    "filter": "Ui",
    "imgUrl": card1,
    alt: "Avatar",
    title: "Some text",
    text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo",
    url: "https://somesite.com"
  },
  {
    "id": "b",
    "filter": "Code",
    "imgUrl": card3,
    alt: "Avatar",
    title: "Some text",
    text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo",
    url: "https://somesite.com"
  },
  {
    "id": "c",
    "filter": "Ui",
    "imgUrl": card1,
    alt: "Avatar",
    title: "Some text",
    text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo",
    url: "https://somesite.com"
  },
  {
    "id": "d",
    "filter": "Code",
    "imgUrl": card3,
    alt: "Avatar",
    title: "Some text",
    text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo",
    url: "https://somesite.com"
  },
];