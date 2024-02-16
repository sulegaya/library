import React, { useState } from 'react';
import { auth, db, storage } from "./Firebase";
import { setDoc, doc, collection, getDoc, query, where, onSnapshot  } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BookRegistrationForm() {

  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookId, setBookId] = useState('');
  const [bookCategory, setBookCategory] = useState('');

  const handleAddBook = async (e) => {
    e.preventDefault();
    toast.success('Loading...', {
      icon: '⏳',
    });

    try {
      const bookDetails = {
        bookTitle,
        bookAuthor,
        bookId,
        bookCategory,
      };

      await setDoc(doc(db, 'books', bookId), bookDetails);
      toast.success('Book added successfully', {
        icon: '✅',
      });
    } catch (error) {
      toast.error('Error adding book: ' + error.message);
    }
  };

  return (
    <form className='pb-20' onSubmit={handleAddBook}>
      <div className="space-y-3 sm:space-y-6">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Book Information</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
            <label htmlFor="book-id" className="block text-sm font-medium leading-6 text-gray-900">
              Book ID
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="book-id"
                id="book-id"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
                className="px-2 text-base block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
            </div>

            <div className="sm:col-span-3">
            <label htmlFor="book-title" className="block text-sm font-medium leading-6 text-gray-900">
              Book Title
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="book-title"
                id="book-title"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                className="px-2 text-base block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
            </div>

            <div className="sm:col-span-3">
            <label htmlFor="book-author" className="block text-sm font-medium leading-6 text-gray-900">
              Book Author
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="book-author"
                id="book-author"
                value={bookAuthor}
                onChange={(e) => setBookAuthor(e.target.value)}
                className="px-2 text-base block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
            </div>

            <div className="sm:col-span-3">
            <label htmlFor="book-category" className="block text-sm font-medium leading-6 text-gray-900">
              Book Category
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="book-category"
                id="book-category"
                value={bookCategory}
                onChange={(e) => setBookCategory(e.target.value)}
                className="px-2 text-base block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
            </div>
            </div>
          </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
          type="submit"
          className="rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
          Add Book
          </button>
      </div>
  </form>
)
}
