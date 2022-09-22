import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Error from './pages/Error';
import Features from './pages/guest/Features';
import Home from './pages/guest/Home';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}> </Route>
      <Route path='/features' element={<Features/>}> </Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
  )
}

export default App