import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksCard from "../components/home/BooksCard.jsx";
import BooksTable from "../components/home/BooksTable.jsx";

const Home = () => {
  const [books, setBooks] = useState([]); //
  const [loading, setLoading] = useState(false);
  const [showtype, setShowType] = useState("table");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books") //
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []); //

  // bg-blue-950

  return (
    <div className="p-4 ">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-blue-600 text-white py-1 px-4 rounded-lg hover:bg-blue-600"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-blue-600 text-white py-1 px-4 rounded-lg hover:bg-blue-600"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center ">
        <h1 className="text-4xl font-bold font-serif my-8 text-yellow-500 ">
          Books
        </h1>
        {/* link to create book */}
        <Link to="/create">
          <MdOutlineAddBox className="text-4xl text-sky-800" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showtype === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
