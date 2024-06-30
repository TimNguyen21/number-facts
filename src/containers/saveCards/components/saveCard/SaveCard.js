import { removeSavedNumberFact } from '../../../../features/saveNumberFactSlice';
import { useDispatch } from 'react-redux';

import './SaveCard.scss';

function SaveCard(props) {
    const { id, numberFact } = props;
    const dispatch = useDispatch();

    return (
        <div className='save-card' >
            <span id={id} 
                  className='save-card__remove-button'
                  onClick={(e) => {dispatch(removeSavedNumberFact(e.target.id))}}>x</span>
            <label>{numberFact}</label>
        </div>
    )
}

export default SaveCard;