import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import { useSearch } from '../hooks/useSearch'

type SearchContextValue = ReturnType<typeof useSearch>

const SearchContext = createContext<SearchContextValue | undefined>(undefined)

export function SearchProvider({ children }: { children: ReactNode }) {
  const value = useSearch()
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export function useSearchContext(): SearchContextValue {
  const ctx = useContext(SearchContext)
  if (ctx === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider')
  }
  return ctx
}
