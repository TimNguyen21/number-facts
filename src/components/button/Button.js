import './Button.scss';

function Button(props) {
    const { buttonText, onClick } = props;

    return (
        <div className='button'>
            <input type='button'
                   value={buttonText}
                   onClick={onClick} />
        </div>
    )
}

export default Button;
