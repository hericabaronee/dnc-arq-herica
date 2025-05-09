 import { useContext } from 'react';
 import{BrowserRouter as Router , Route , Routes, Link} from 'react-router-dom'

 //PAGES 

 import Home from "./pages/Home.jsx";
 import About from "./pages/About.jsx";
 import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.jsx';
 import Projects from "./pages/Projects.jsx";
 import Contact from "./pages/Contact.jsx";


 //UTILS

 import ScrollToTop from './utils/ScrollTop.jsx';
 import { AppContext } from './contexts/AppContext.jsx';


function App() {

  const appContext = useContext(AppContext)

  if(appContext.loading){
    return <LoadingSpinner/>
  }

  return (
   <Router>
   <ScrollToTop/> 
    <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/about' element= {<About />}></Route>
      <Route path='/projects' element= {<Projects />}></Route>
      <Route path='/contact' element= {<Contact/>}></Route>



    </Routes>
   </Router>
  )
}

export default App
