/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
function ButtonArrow(props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height}>
      <path
        d='M10 20l-1.818-1.818 6.883-6.882H0V8.7h15.065L8.182 1.818 10 0l10 10z'
        fill={props.fill}
      />
    </svg>
  );
}
export default ButtonArrow;
