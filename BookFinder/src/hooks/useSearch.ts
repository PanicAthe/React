import { useEffect, useState } from 'react'
import type { Book, BookMeta, BookSearchResponse } from '../types/book'
import { mockBookResponse } from '../data/mockResponse'

export function useSearch() {
  const [inputValue, setInputValue] = useState('리액트')
  const [query, setQuery] = useState('리액트')
  const [page, setPage] = useState(1)
  const [books, setBooks] = useState<Book[]>([])
  const [meta, setMeta] = useState<BookMeta>({ is_end: true, pageable_count: 0, total_count: 0 })
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchBooks(queryParam: string, pageParam: number): Promise<BookSearchResponse> {
    const apiKey = import.meta.env.VITE_KAKAO_REST_API_KEY

    if (!apiKey) {
      const filteredDocuments = mockBookResponse.documents.filter((book) =>
        book.title.toLowerCase().includes(queryParam.toLowerCase()),
      )

      return {
        documents: filteredDocuments,
        meta: {
          ...mockBookResponse.meta,
          is_end: true,
          total_count: filteredDocuments.length,
          pageable_count: filteredDocuments.length,
        },
      }
    }

    const url = new URL('https://dapi.kakao.com/v3/search/book')
    url.searchParams.set('query', queryParam)
    url.searchParams.set('page', String(pageParam))
    url.searchParams.set('size', '10')

    const response = await fetch(url, {
      headers: {
        Authorization: `KakaoAK ${apiKey}`,
      },
    })

    if (!response.ok) {
      throw new Error('책 검색 API 호출에 실패했습니다.')
    }

    return response.json()
  }

  useEffect(() => {
    let active = true

    const loadBooks = async () => {
      if (!query.trim()) {
        setBooks([])
        setMeta({ is_end: true, pageable_count: 0, total_count: 0 })
        return
      }

      setLoading(true)
      setError('')

      try {
        const response = await fetchBooks(query, page)

        if (!active) return

        setBooks(response.documents)
        setMeta(response.meta)
        setSelectedBook((prevBook) => prevBook ?? response.documents[0] ?? null)
      } catch {
        if (!active) return
        setError('검색 중 오류가 발생했습니다.')
        setBooks([])
        setMeta({ is_end: true, pageable_count: 0, total_count: 0 })
      } finally {
        if (active) setLoading(false)
      }
    }

    void loadBooks()

    return () => {
      active = false
    }
  }, [query, page])

  const handleSearch = () => {
    setPage(1)
    setQuery(inputValue)
  }

  return {
    inputValue,
    setInputValue,
    query,
    setQuery,
    page,
    setPage,
    books,
    meta,
    selectedBook,
    setSelectedBook,
    loading,
    error,
    handleSearch,
  }
}
