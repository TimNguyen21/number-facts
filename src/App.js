import { useState } from 'react';
import NumberFactsForm from './components/numberFactsForm/NumberFactsForm';
import './App.scss';

function App() {

  const [currentNumberFact, setCurrentNumberFact] = useState({id: null, numberFact: ''});

  function getRequestInformation(number, numberType) {
    console.log(numberType);
    (number === '') ? console.log('random') : console.log(number);
  }

  return (
    <div className="App">
      <NumberFactsForm getRequestInformation={getRequestInformation}/>
    </div>
  );
}

export default App;
