import Generations from "./Generations";
import Logo from "./Logo";
const index = (props) => {
  return (
    <>
      <center>
        <Logo />
        <Generations />
        {props.text}
      </center>
    </>
  );
};

export default index;
