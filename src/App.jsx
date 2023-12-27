import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import PageContainer from './containers/PageContainer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Search from './pages/Search';

function App() {

  return (
    <PageContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products/:id' element={<Detail />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/products/:search' element={<Search />} />
        </Routes>
      </Router>
    </PageContainer>
  )
}

export default App
