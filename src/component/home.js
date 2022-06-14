import { Spinner } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <h4>Hey it's me Deepak Khadka </h4>

      <h2>Website is under construction in react js</h2>

      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
};
export default Home;
