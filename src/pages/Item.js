import { useParams } from "react-router-dom";

const Contact = () => {
  let params = useParams();

  return <h1>Item {params?.id}</h1>;
};

export default Contact;
