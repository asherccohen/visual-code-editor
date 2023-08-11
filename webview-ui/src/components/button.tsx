

interface ButtonProps {
  message: string;
}


const Button: React.FC<ButtonProps> = ({ message }) => {
  return <button>{message}</button>;
};

export default Button;
