import './SaveCard.scss';

function SaveCard(props) {
    const { id, numberFact } = props;

    return (
        <div className='save-card' >
            <span className='save-card__remove-button'>x</span>
            <label>{numberFact}</label>
        </div>
    )
}

export default SaveCard;