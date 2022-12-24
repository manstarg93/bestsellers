import './book.css';
const Book = ({ img, title, author, bookIndex }) => {
  return (
    <article className="book">
      <p className="bookIndex">#{bookIndex}</p>
      <img src={img} alt={title} />
      <h2> {title} </h2>
      <h4>{author}</h4>
      <p className="number">{`# ${bookIndex}`}</p>
    </article>
  );
};

export default Book;
