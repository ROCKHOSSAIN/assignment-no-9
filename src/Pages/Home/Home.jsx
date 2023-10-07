import Expert from "../../Components/Expert/Expert";
import Navbar from "../../Components/Navbar/Navbar";
import Packages from "../../Components/Packages/Packages";
import Banner from "../Banner/Banner";
import Event from "../Blog/Event";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Expert></Expert>
            <Event></Event>
            <Packages></Packages>
        </div>
    );
};

export default Home;