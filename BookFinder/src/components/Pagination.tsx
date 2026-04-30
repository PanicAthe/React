import '../css/Pagination.css'

interface PaginationProps {
  page: number
  isEnd: boolean
  onPageChange: (nextPage: number) => void
}

function Pagination({ page, isEnd, onPageChange }: PaginationProps) {
  return (
    <div className="pagination">
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
      >
        이전
      </button>
      <span>{page}</span>
      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={isEnd}
      >
        다음
      </button>
    </div>
  )
}

export default Pagination
