import { Route, Routes } from "react-router-dom";
import CreateBook from "./pages/CreateBook.jsx";
import Home from "./pages/Home.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import EditBook from "./pages/EditBook.jsx";
import ShowBook from "./pages/ShowBook.jsx";

// bg-blue-950

const App = () => {
  return (
    <div className=" min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/details/:id" element={<ShowBook />} />
      </Routes>
    </div>
  );
};

export default App;
