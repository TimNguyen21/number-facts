import { useState } from 'react';
import NumberFactsForm from './components/numberFactsForm/NumberFactsForm';
import './App.scss';

import { saveNumberFact } from './features/saveNumberFactSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const numberFactSaves = useSelector((state) => state.numberFactSave);
  const dispatch = useDispatch();

  const [currentNumberFact, setCurrentNumberFact] = useState({id: null, numberFact: ''});

  function getNumberFact(number, numberType) {
    const currentNumber = (number === '') ? 'random' : number;
    const currentNumberType = numberType.toLowerCase();
    const numberFactAPILink = `http://numbersapi.com/${currentNumber}/${currentNumberType}?json`;

    fetchNumberFacts(numberFactAPILink);
  }

  function updateSavedNumberFact() {
    const numberFactData = JSON.stringify({id: currentNumberFact['id'], numberFact: currentNumberFact['numberFact']});
    dispatch(saveNumberFact(numberFactData));
  }

  async function fetchNumberFacts(APILink) {
    fetch(APILink)
      .then(response => response.json())
      .then(data => {setCurrentNumberFact({id: Date.now(), numberFact: data.text})})
      .catch(err => {console.log(err)});
  }

  return (
    <div className="App">
      <section className='number-facts-form'>
        <NumberFactsForm getNumberFact={getNumberFact}/>
        <br></br>
        <br></br>
        <br></br>
        <label>{currentNumberFact['numberFact']}</label>
        <input type='button' value='Save Number Fact' onClick={() => {updateSavedNumberFact()}}/>
        {numberFactSaves.numberFactSaves}
      </section>
      <section className='number-facts-saves'>
        save results
      </section>
    </div>
  );
}

export default App;
