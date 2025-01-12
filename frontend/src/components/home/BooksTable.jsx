import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr className="border border-slate-600 rounded-md  bg-orange-600">
          <th>No</th>
          <th>Title</th>
          <th>Author</th>
          <th>Publish-Year</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-600 rounded-md text-center bg-gray-400 ">
              {index + 1}
            </td>
            <td className="border border-slate-600 rounded-md text-center bg-gray-400 ">
              {book.title}
            </td>
            <td className="border border-slate-600 rounded-md text-center bg-gray-400 ">
              {book.author}
            </td>
            <td className="border border-slate-600 rounded-md text-center bg-gray-400">
              {book.publishYear}
            </td>
            <td className="border border-slate-600 rounded-md text-center bg-gray-400">
              <div className="flex justify-center gap-x-4">
                <Link to={`/details/${book._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/delete/${book._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
