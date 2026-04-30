import { useSearchContext } from '../contexts/SearchContext'
import SearchBar from './SearchBar'
import BookList from './BookList'
import Pagination from './Pagination'
import '../css/SearchArea.css'

function SearchArea() {
  const {
    inputValue,
    setInputValue,
    page,
    books,
    meta,
    loading,
    error,
    setPage,
    setSelectedBook,
    handleSearch,
  } = useSearchContext()

  return (
    <section className="search-area">
      <SearchBar
        query={inputValue}
        onQueryChange={(value) => {
          setInputValue(value)
        }}
        onSearch={handleSearch}
      />
      <BookList books={books} onSelect={setSelectedBook} loading={loading} error={error} />
      <Pagination page={page} isEnd={meta.is_end} onPageChange={setPage} />
    </section>
  )
}

export default SearchArea
