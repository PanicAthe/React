export interface Book {
  authors: string[]
  contents: string
  datetime: string
  isbn: string
  price: number
  publisher: string
  sale_price: number
  status: string
  thumbnail: string
  title: string
  translators: string[]
  url: string
}

export interface BookMeta {
  is_end: boolean
  pageable_count: number
  total_count: number
}

export interface BookSearchResponse {
  documents: Book[]
  meta: BookMeta
}
