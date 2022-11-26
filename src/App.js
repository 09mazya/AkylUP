import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import Header from './components/Header/Header';
import Events from './pages/Event/Events';
import Courses from './pages/Courses/Courses';
import Qa from './pages/Qa/Qa';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/qa" element={<Qa/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
