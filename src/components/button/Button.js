import './Button.scss';

function Button(props) {
    const { buttonText, onClick, isHidden = false } = props;

    return (
        <div className='button'>
            <input type='button'
                   value={buttonText}
                   onClick={onClick}
                   hidden={isHidden}/>
        </div>
    )
}

export default Button;
