import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/checkout" element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;
