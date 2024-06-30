import { useState } from 'react';
import NumberFactsForm from './components/numberFactsForm/NumberFactsForm';
import './App.scss';

function App() {

  const [currentNumberFact, setCurrentNumberFact] = useState({id: null, numberFact: ''});

  function getNumberFact(number, numberType) {
    const currentNumber = (number === '') ? 'random' : number;
    const currentNumberType = numberType.toLowerCase();
    const numberFactsAPILink = `http://numbersapi.com/${currentNumber}/${currentNumberType}?json`;

    fetchNumberFacts(numberFactsAPILink);
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
        <input type='button' value='Save Number Fact'/>
      </section>
      <section className='number-facts-saves'>
        save results
      </section>
    </div>
  );
}

export default App;
