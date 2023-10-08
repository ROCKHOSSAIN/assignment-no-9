import Navbar from "../../Components/Navbar/Navbar";

const Dashboard = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className="flex"> 
                <h1>name:</h1>
                <h1>City:</h1>
                <h1>Age:</h1>

            </div>
        </div>
    );
};

export default Dashboard;