import About from "./components/About";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/NavBar";
import Index from "./components/Index";
import Search from "./components/Search";
import SearchComic from "./components/SearchComic";
import AboutCharComics from "./components/AboutCharComics";
import AboutCharSeries from "./components/AboutCharSeries";



function App() {
  return (
    <div >
      <Navbar />
      
       <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:id" element={<About />} />
        <Route path="/:id/comics/:name" element={<AboutCharComics />} />
        <Route path="/:id/series/:name" element={<AboutCharSeries />} />
        <Route path="/searchHero" element={<Search />} />
        <Route path="/searchComic/:limit/:offset" element={<SearchComic />} />
       </Routes>
    </div>
  );
}

export default App;
