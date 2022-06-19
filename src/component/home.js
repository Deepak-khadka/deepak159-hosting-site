import {Spinner} from "react-bootstrap";
import ProjectList from "./home/project-list";
import Portfolio from "./home/portfolio";

const Home = () => {
    return (
        <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">

            <Portfolio />

            < ProjectList />

        </div>
    );
};
export default Home;
