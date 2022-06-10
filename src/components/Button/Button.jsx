import styles from './Button.scss';
import cn from "classnames";

const Button = ({ text, onClick, className, disabled, classes }) => {
  return (
    <button
      onClick={onClick}
      className={cn('button', className)}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
