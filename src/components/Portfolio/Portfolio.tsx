import { forwardRef, useEffect, useRef, useState } from "react";
import Isotope from 'isotope-layout';

import PortfolioInfo from "./PortfolioInfo";
import { filtersDefault, portfolioItemsDefault, TITLES } from "../../services/props";
import Heading from "../Box/Heading";

import { StyledPortfolio } from "./Portfolio.styles";
import { Ref, UniProps } from "../../services/types";



const Portfolio = forwardRef<Ref, UniProps>(({id}: UniProps, forwardedRef) => {

    const isotope = useRef<Isotope | null>();
    const [filterKey, setFilterKey] = useState("All");

    const [filters, setFilters] = useState(filtersDefault);

    const onFilter = (target: string) => () => {
        setFilters((filters) =>
            filters.map((filter) => ({
                ...filter,
                active: filter.label === target ? true : false,
            }))
        );
        setFilterKey(target);
    };

    useEffect(() => {
        isotope.current = new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: 'masonry',
        masonry: {
            gutter: 20,
            columnWidth: 50
        }
        });
        return () => isotope.current?.destroy();
    }, []);

    useEffect(() => {
        if (filterKey === "All") { isotope.current?.arrange({ filter: `*` }) }
        else { isotope.current?.arrange({ filter: `.${filterKey}` }) };
    }, [filterKey]);

    return (
        <section ref={forwardedRef} id={id}>
            <StyledPortfolio id="portfolio">
                <Heading title={TITLES.PF} />
                <ul className="portfolio-filters">
                    {filters.map((filter, index) => (
                        <li key={ index+1 } className={ filter.active ? 'active' : '' } onClick={onFilter(filter.label)}>{filter.label} <span>/</span></li>
                    ))}
                </ul>
                <hr />
                <ul className="filter-container">
                    {portfolioItemsDefault.map((portfolioItem) => (
                    <div className={`filter-item ${portfolioItem.filter}`} key={portfolioItem.id}>
                        <div className="portfolio-card">
                            <img className="portfolio-img" src={portfolioItem.imgUrl} alt={portfolioItem.alt} />
                            <PortfolioInfo
                                title={portfolioItem.title}
                                text={portfolioItem.text}
                                url={portfolioItem.url}
                            />
                        </div>
                    </div>
                    ))}
                </ul>
            </StyledPortfolio>
        </section>
    )
})

Portfolio.displayName = "Portfolio";

export default Portfolio;