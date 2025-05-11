import './Button.css'
import Arrow from '../../assets/white-arrow.svg.svg'
import LoadingSpinnerGif from '../../assets/loading-spinner.gif'

const Button = ({ arrow, buttonStyle, loading, children, disabled, ...props }) => {
  return (


    <button className={`button ${buttonStyle} ${disabled || loading ? 'disabled' : ''}`} {...props} disabled={disabled || loading}>
    {children} {arrow && <img src={Arrow} alt="Arrow" />} {loading && <img src={LoadingSpinnerGif} alt="Loading" height="20px" />}
  </button>
);
};

export default Button