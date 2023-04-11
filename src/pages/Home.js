import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const toComponentB = () => {
    navigate("blogs", { state: { id: 1, name: "sabaoon" } });
  };

  const toItem = (id) => {
    navigate("item/" + id);
  };

  return (
    <h1>
      Home
      <button onClick={toComponentB}>Test</button>
      <button onClick={() => toItem(1)}>View Item</button>
    </h1>
  );
};

export default Home;
