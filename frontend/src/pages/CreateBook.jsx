import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSavebook = async () => {
    setLoading(true);
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("https://book-store-backend-2b1d.onrender.com", data)
      .then((response) => {
        setLoading(false);
        enqueueSnackbar("Book created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("Error creating book");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <BackButton />
        <h1 className="text-2xl text-center font-bold text-sky-600 mb-6">
          Create Book
        </h1>
        {loading ? <Spinner /> : null}
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg text-gray-700 font-semibold mb-2">
              Title:
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the book title"
              className="border-2 border-gray-300 focus:border-sky-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg text-gray-700 font-semibold mb-2">
              Author:
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter the author's name"
              className="border-2 border-gray-300 focus:border-sky-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg text-gray-700 font-semibold mb-2">
              Publish Year:
            </label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              placeholder="Enter the year of publication"
              className="border-2 border-gray-300 focus:border-sky-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
          </div>
          <button
            onClick={handleSavebook}
            type="button"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold p-3 rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Save Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
