const Button = ({ children, ...restProps }) => {
  return (
    <button className='btn cursor-pointer' {...restProps}>
      {children}
    </button>
  );
};

export default Button;
