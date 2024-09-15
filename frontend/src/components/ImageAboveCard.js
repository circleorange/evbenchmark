
const ImageAboveCard = ({ID, cardHeader, cardDescription, cardImage}) => {
    const mainCardStyle = "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700";
    const cardHeaderStyle = "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white";
    const cardDescriptionStyle = "mb-3 font-normal text-gray-700 dark:text-gray-400";

    return (
        <a className={`${mainCardStyle}`} href={`/cars/${ID}`}>
            <img className="rounded-t-lg" src={cardImage} alt=""/>

            <div className="p-5">
                <h5 className={`${cardHeaderStyle}`}>{cardHeader}</h5>
                <p className={`${cardDescriptionStyle}`}>{cardDescription}</p>
            </div>
        </a>

    )
}
export default ImageAboveCard;