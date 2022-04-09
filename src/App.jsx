import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { GifsApp } from "./pages/GifsApp/GifsApp";
import { MusicApp } from "./pages/MusicApp/MusicApp";
import { TodoApp } from "./pages/TodoApp/TodoApp";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gifs-app" element={<GifsApp />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/music-app" element={<MusicApp />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
