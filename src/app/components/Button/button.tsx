interface BtnProps  { 
    children: JSX.Element;
 }

const Button = (props: BtnProps) => {
  return (
    <button className="hover:bg-orange_light duration-500">
      {props.children}
    </button>
  )
}

export default Button;
