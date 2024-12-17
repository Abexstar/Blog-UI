import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Component/Home';
import Footer from './Component/Footer';



function App() {
  const location = useLocation();
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App
