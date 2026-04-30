import type { Book } from '../types/book'
import BookItem from './BookItem'
import '../css/BookList.css'

interface BookListProps {
  books: Book[]
  onSelect: (book: Book) => void
  loading: boolean
  error: string
}

function BookList({ books, onSelect, loading, error }: BookListProps) {
  if (loading) {
    return <section className="book-list">불러오는 중...</section>
  }

  if (error) {
    return <section className="book-list">{error}</section>
  }

  if (books.length === 0) {
    return <section className="book-list">검색 결과가 없습니다.</section>
  }

  return (
    <section className="book-list">
      {books.map((book) => (
        <BookItem
          key={`${book.isbn}-${book.title}`}
          book={book}
          onSelect={onSelect}
        />
      ))}
    </section>
  )
}

export default BookList
