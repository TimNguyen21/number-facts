import { useSelector } from 'react-redux';
import SaveCard from './components/saveCard/SaveCard';
import './SaveCards.scss';

function SaveCards() {
    const numberFactSaves = useSelector((state) => state.numberFactSave.numberFactSaves);

    function renderNumberFactSaves() {
        const sortedNumberFactSavesDESC = numberFactSaves.map(numberFactSave => {
            return JSON.parse(numberFactSave);
        }).sort(function(a,b) {
            return b.id - a.id;
        });

        return sortedNumberFactSavesDESC.map(numberFactSave => {
            return <SaveCard key={numberFactSave.id} 
                             id={numberFactSave.id} 
                             numberFact={numberFactSave.numberFact}/>
        });
    }

    return (
        <div className='save-cards' >
            {renderNumberFactSaves()}
        </div>
    )
}

export default SaveCards;