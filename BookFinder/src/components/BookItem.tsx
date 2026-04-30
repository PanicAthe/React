import type { Book } from '../types/book'

interface BookItemProps {
  book: Book
  onSelect: (book: Book) => void
}

function BookItem({ book, onSelect }: BookItemProps) {
  return (
    <article className="book-item" onClick={() => onSelect(book)}>
      <img src={book.thumbnail || ''} alt={book.title} />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>{book.authors.join(', ')}</p>
        <p>{book.publisher}</p>
      </div>
    </article>
  )
}

export default BookItem
