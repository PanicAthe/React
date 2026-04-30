import type { FormEvent } from 'react'
import '../css/SearchBar.css'

interface SearchBarProps {
  query: string
  onQueryChange: (value: string) => void
  onSearch: () => void
}

function SearchBar({ query, onQueryChange, onSearch }: SearchBarProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch()
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="책 제목을 입력하세요"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
        <button type="submit">검색</button>
      </form>
    </div>
  )
}

export default SearchBar
