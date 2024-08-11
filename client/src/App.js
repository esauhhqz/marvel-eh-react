import About from "./components/About";
import Home from "./components/Home";
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div >
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<About />} />
       </Routes>
    </div>
  );
}

export default App;
