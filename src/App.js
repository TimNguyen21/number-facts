import { useState } from 'react';
import NumberFactsForm from './components/numberFactsForm/NumberFactsForm';
import SaveCards from './containers/saveCards/SaveCards'
import './App.scss';

import { saveNumberFact } from './features/saveNumberFactSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const [currentNumberFact, setCurrentNumberFact] = useState({id: null, numberFact: ''});
  const [hasNewNumberFact, setHasNewNumberFact] = useState(false);

  function getNumberFact(number, numberType) {
    const currentNumber = (number === '') ? 'random' : number;
    const currentNumberType = numberType.toLowerCase();
    const numberFactAPILink = `http://numbersapi.com/${currentNumber}/${currentNumberType}?json`;

    fetchNumberFacts(numberFactAPILink);
  }

  function updateAndSaveNumberFact() {
    const numberFactData = JSON.stringify({id: currentNumberFact['id'], numberFact: currentNumberFact['numberFact']});
    dispatch(saveNumberFact(numberFactData));
    setHasNewNumberFact(false);
  }

  async function fetchNumberFacts(APILink) {
    fetch(APILink)
      .then(response => response.json())
      .then(data => {
        setCurrentNumberFact({id: Date.now(), numberFact: data.text});
        setHasNewNumberFact(true);
      })
      .catch(err => {console.log(err)});
  }

  return (
    <div className="App">
      <header>Number Facts</header>
      <section className='number-facts'>
        <section className='number-facts-form'>
          <NumberFactsForm getNumberFact={getNumberFact}/>
          <b>Results: </b>
          <label>{currentNumberFact['numberFact'] ? currentNumberFact['numberFact'] : '?'}</label>
          <input type='button' 
                value='Save Number Fact' 
                onClick={() => {updateAndSaveNumberFact()}} 
                hidden={!hasNewNumberFact}/>
        </section>
        <section className='number-facts-saves'>
          <label className='number-facts-saves-label'>Saved Number Facts</label>
          <SaveCards />
        </section>
      </section>
    </div>
  );
}

export default App;
