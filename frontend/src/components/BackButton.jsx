import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const destination = "/";
const BackButton = () => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <BsArrowLeft className="text-2xl text-sky-800" />
      </Link>
    </div>
  );
};

export default BackButton;
