import Search from "./Search";
import Card_info from "./card-info";

const index = (props) => {
  return (
    <>
      <h1>
        Home <br />
        {props.text}
        naruto is the best ninja!
      </h1>
      <Search />
      <Card_info />
    </>
  );
};

export default index;
