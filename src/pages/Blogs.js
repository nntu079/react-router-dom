import { useLocation } from "react-router-dom";

const Blogs = () => {
  const location = useLocation();

  console.log({ location });

  return <h1>Blog Articles</h1>;
};

export default Blogs;
