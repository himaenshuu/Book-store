import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 font-bold">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="border border-slate-600 rounded-md p-2 max-w-md ">
          {book ? (
            <>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-500">ID:</span>
                <span>{book._id || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-500">Title:</span>
                <span>{book.title || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-500">Author:</span>
                <span>{book.author || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-500">
                  Publish Year:
                </span>
                <span>{book.publishYear || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-500">Created At:</span>
                <span>
                  {book.createdAt
                    ? new Date(book.createdAt).toLocaleString()
                    : "N/A"}
                </span>
              </div>
            </>
          ) : (
            <p className="text-center text-red-500">
              No book details available.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ShowBook;
