import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleDeleteBook = async () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book deleted successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error deleting book", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-{600px} p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete this book?</h3>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 text-lg rounded-md"
          onClick={handleDeleteBook}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;

// import React, { useState } from "react";
// import BackButton from "../components/BackButton";
// import Spinner from "../components/Spinner";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// const DeleteBook = () => {
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const handleDeleteBook = async () => {
//     setLoading(true);
//     axios
//       .delete(`http://localhost:5000/books/${id}`)
//       .then(() => {
//         setLoading(false);
//         setShowModal(false); // Close the modal after deletion
//         navigate("/"); // Redirect to home
//       })
//       .catch((error) => {
//         setLoading(false);
//         alert("An error occurred. Please check the console.");
//         console.log(error);
//       });
//   };

//   return (
//     <div className="p-4">
//       <BackButton />
//       <h1 className="text-3xl my-4">Delete Book</h1>
//       {loading ? <Spinner /> : ""}
//       <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-{600px} p-8 mx-auto">
//         <h3 className="text-2xl">Delete this book?</h3>
//         <button
//           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 text-lg rounded-md"
//           onClick={() => setShowModal(true)}
//         >
//           Delete
//         </button>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-96 text-center">
//             <h2 className="text-xl font-bold mb-4">
//               Are you sure you want to delete this book?
//             </h2>
//             <div className="flex justify-around">
//               <button
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={handleDeleteBook}
//               >
//                 Yes, Delete
//               </button>
//               <button
//                 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => setShowModal(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DeleteBook;
