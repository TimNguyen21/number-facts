import { useRef } from 'react';
import './NumberFactsForm.scss';

function NumberFactsForm(props) {
    const { getRequestInformation } = props;

    const numberRequest = useRef(null);
    const numberFactType = useRef(null);

    return (
        <div className={'number-facts-form'}>
            <input type='number' placeholder='Enter Number' ref={numberRequest}/>
            <select id='number-fact-type' ref={numberFactType}>
                <option id='trivia'>Trivia</option>
                <option id='math'>Math</option>
                <option id='year'>Year</option>
            </select>
            <input type='button' 
                   value={'Get Number Fact'} 
                   onClick={()=>{getRequestInformation(numberRequest.current.value, numberFactType.current.value)}}/>
        </div>
    )
}

export default NumberFactsForm;
