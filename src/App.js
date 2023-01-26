
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from './Pages/Detail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/pelicula/:id" element={<Detail />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
