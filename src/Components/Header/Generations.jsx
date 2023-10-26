import Gen1 from "./satu.jsx";
import Gen2 from "./dua.jsx";
import Gen3 from "./tiga.jsx";
import Gen4 from "./empat.jsx";

const Generations = () => {
  return (
    <div>
      <h1>GENERATIONS</h1>
      <Gen1 title1="ini props1"/>
      <Gen2 title2="ini props2"/>
      <Gen3 title3="ini props3"/>
      <Gen4 title4="ini props4"/>
    </div>
  );
};

export default Generations;
