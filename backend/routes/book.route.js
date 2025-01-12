import express from "express";
import Book from "../model/book.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    if (!body.title || !body.author || !body.publishYear) {
      return res.status(400).send("Please fill all required fields");
    }
    const book = new Book({
      title: body.title,
      author: body.author,
      publishYear: body.publishYear,
    });
    await book.save();
    return res.status(201).send(book);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).send("Book not found");
    }
    return res.status(200).send("Book deleted successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).send(books);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // Extract the id parameter from the request
    const { id } = req.params;

    // Find the book by its ID
    const book = await Book.findById(id);

    // Check if the book exists
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }

    // Send the found book as a response
    return res.status(200).send(book);
  } catch (error) {
    // Handle errors (e.g., invalid ID format)
    console.error("Error finding book:", error);
    return res
      .status(500)
      .send({ message: "Server error", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (!book) {
      return res.status(404).send("Book not found");
    }
    return res.status(200).send(book);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

export default router;
