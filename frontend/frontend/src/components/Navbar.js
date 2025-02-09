import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          University Events
        </Link>
        <Link
          to="/add-event"
          className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
        >
          Add Event
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;