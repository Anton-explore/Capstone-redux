import styled from "styled-components";

export const StyledPortfolio = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */

    .portfolio-filters {
        display: flex;
        justify-content: flex-start;
        gap: 5px;

        li.active {
            color: ${({ theme }) => theme.colors.accent};
        }
        li:hover {
            cursor: pointer;
            color: ${({ theme }) => theme.colors.accent};
        }
    }

    .filter-item {
        margin: 10px 0;
        width: 300px;
        height: 185px;
        @media (max-width: 765px) {
            width: 250px;
            height: 155px;
        }
    }

    .portfolio-card {
        position: relative;
        width: 100%;
        min-width: 100px;
        overflow: hidden;
    }

    .portfolio-img {
        width: 100%;
        min-height: 120px;
        object-fit: contain;
    }

    .portfolio-img,
    .portfolio-info {
        transition: opacity 0.5s ease-in-out;
    }

    .portfolio-info {
        position: absolute;
        top: 0px;
        left: 0;
        opacity: 0;
        padding: 10px;
        height: 185px;
        transition: all 300ms ease-out;
        transform: translateY(100px);
        border: 1px solid ${({ theme }) => theme.colors.gallery};

        @media (max-width: 765px) {
            height: 155px;
        }

        h2 {
            color: ${({ theme }) => theme.colors.accent};
            margin: 10px 0;
        }

        a {
            color: ${({ theme }) => theme.colors.accent};
            text-decoration: underline;
            margin: 5px 0;
        }
    }

    .portfolio-card:hover .portfolio-img {
        opacity: 0;
    }

    .portfolio-card:hover .portfolio-info {
        opacity: 1;
        transform: translateY(0);
    }
`;