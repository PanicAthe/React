import { useState } from 'react'
import '../css/BookDetail.css'
import { useSearchContext } from '../contexts/SearchContext'

const PREVIEW_CHARS = 500

function BookDetail() {
  const { selectedBook: book } = useSearchContext()
  const [expanded, setExpanded] = useState(false)

  if (!book) {
    return <section className="book-detail">왼쪽 목록에서 책을 선택하세요.</section>
  }

  const isLong = (book.contents || '').length > PREVIEW_CHARS
  const displayed = !isLong || expanded ? book.contents : `${book.contents.slice(0, PREVIEW_CHARS)}...`

  return (
    <section className="book-detail">
      <div className="detail-top">
        <img className="detail-thumb" src={book.thumbnail || ''} alt={book.title} />
        <div className="detail-info">
          <h2>{book.title}</h2>
          <p className="authors">저자: {book.authors.join(', ')}</p>
          <p className="meta">출판사: {book.publisher} · {new Date(book.datetime).toLocaleDateString()}</p>
          <p className="price">가격: {book.price.toLocaleString()}원 · 판매가: {book.sale_price.toLocaleString()}원</p>
          <p className="status">상태: {book.status}</p>
          <a className="external" href={book.url} target="_blank" rel="noreferrer">상세 페이지 보기</a>
        </div>
      </div>

      <div className="description">
        <div className={`description-text ${expanded ? 'expanded' : 'collapsed'}`}>
          {displayed}
        </div>
        {isLong && (
          <button className="toggle" onClick={() => setExpanded((s) => !s)}>
            {expanded ? '간략히' : '더보기'}
          </button>
        )}
      </div>
    </section>
  )
}

export default BookDetail
