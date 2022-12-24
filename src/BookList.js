import Book from './Book';
import './booklist.css';
import { books } from './books';

const BookList = () => {
  return (
    <div className="bookListContainer">
      <h4 className="BestSellersHeader">Best Sellers in Books</h4>
      <section className="booklist">
        {books.map((book, i) => (
          <Book key={book.id} {...book} bookIndex={i + 1} />
        ))}
      </section>
    </div>
  );
};

export default BookList;
