import './App.css'
import Header from './components/header/header'
import Bottom from './components/bottom/bottom'
import Search from './components/search_bar/search'

 export default function App() {

  return (
    <div className="app-container"> 
      <Header />
      <Search />
      <Bottom />
    </div>
  )
}
