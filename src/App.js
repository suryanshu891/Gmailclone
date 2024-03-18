
import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Leftside from './Components/Leftside';
import Rightside from './Components/Rightside';
import { Routes, Route } from 'react-router-dom'
import Contact from './Components/icons/Contact';
import About from './Components/icons/About';
import Home from './Components/icons/Home';
import Navbar from './Components/icons/Navbar';
import Started from './Components/Started';
import Auth from './Components/Auth';

function App() {
  return (
    <>
      {/* <div class="body-wrapper" > */}
        {/* <Navbar /> */}
        {/* <Routes>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
        </Routes> */}
        {/* <Header/> */}
 {/* <Body/> */}
 {/* <Leftside/> */}
 {/* <Started/> */}
 {/* <Routes>
  <Route path="/Started" element={<Started/>} />
 <Route path="/body" element={<Body />} />
 </Routes>

 <Rightside/>
 <Footer/>
      </div> */}
      <Auth/>
    </>

  );

}

export default App;
