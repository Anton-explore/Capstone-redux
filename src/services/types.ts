

export type Ref = HTMLElement;

export interface UniProps {
    id: string
}

export interface BoxProps {
    title: string,
    content: string,
    color?: string,
    id?: string
};

export interface ButtonProps {
    text?: string,
    icon?: string | JSX.Element,
    onClick?: () => void;
    disabled?: boolean;
    shrunk?: boolean;
    up?: boolean;
}

export interface ExperienceData {
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

export interface FeedProps {
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

export type InfoProps = {
    text: string;
}

export interface PhotoBoxProps {
    name?: string;
    title?: string;
    description?: string | JSX.Element;
    avatar: string;
    isInline?: boolean;
    facade?: boolean;
}

export type PortfolioInfoProps = {
    title: string,
    text: string,
    url: string
}



export interface MyFormValues extends Record<string, {}> {
  skillName: string,
  skillRange: string | number,
}

export interface TimelineProps {
    id: number,
    date: string,
    title: string,
    description: string
}

export interface TimelineDataProps {
    educations: TimelineProps[];
}


export interface EduStateType {
    educations: TimelineProps[];
    isLoading: boolean,
    error: string | null,
}

export interface SkillsState {
    id: string,
    skillName: string,
    skillRange: string | number,
};

export interface SkillStateType {
    skills: SkillsState[];
    isLoading: boolean,
    error: string | null,
}

