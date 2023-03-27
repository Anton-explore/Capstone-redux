import { PortfolioInfoProps } from "../../../services/types";



const PortfolioInfo = ({ title, text, url }: PortfolioInfoProps) => {

    return (
        <div className="portfolio-info">
            <h2>{ title }</h2>
            <p>{ text }</p>
            <a href={ url }>View source</a>
        </div>
    )
}

export default PortfolioInfo;