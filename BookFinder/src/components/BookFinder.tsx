import Header from './Header'
import SearchArea from './SearchArea'
import BookDetail from './BookDetail'
import Footer from './Footer'
import { SearchProvider } from '../contexts/SearchContext'
import '../css/BookFinder.css'

function BookFinder() {
  return (
    <SearchProvider>
      <div className="BookFinder">
        <Header />
        <main className="main-content">
          <SearchArea />
          <BookDetail />
        </main>
        <Footer />
      </div>
    </SearchProvider>
  )
}

export default BookFinder
