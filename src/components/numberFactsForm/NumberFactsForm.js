import { useRef } from 'react';
import './NumberFactsForm.scss';

function NumberFactsForm(props) {
    const { getNumberFact } = props;

    const numberRequest = useRef(null);
    const numberFactType = useRef(null);

    return (
        <div className={'number-facts-form'}>
            <section className='number-facts-form-inputs'>
                <input type='number' placeholder='Enter Number' ref={numberRequest}/>
                <select id='number-fact-type' ref={numberFactType}>
                    <option>Trivia</option>
                    <option>Math</option>
                    <option>Year</option>
                </select>
            </section>
            <input type='button' 
                   value={'Get Number Fact'} 
                   onClick={()=>{getNumberFact(numberRequest.current.value, numberFactType.current.value)}}/>
        </div>
    )
}

export default NumberFactsForm;
