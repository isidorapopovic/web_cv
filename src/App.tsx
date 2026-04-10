import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index.tsx";
import NotFound from "./NotFound.tsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
