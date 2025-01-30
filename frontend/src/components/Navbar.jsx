import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between">
            <h1 className="text-lg font-bold">InfraGuard</h1>
            <div className="flex space-x-4">
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Link to="/result" className="hover:text-gray-300">Results</Link>
            </div>
        </nav>
    );
};

export default Navbar;
