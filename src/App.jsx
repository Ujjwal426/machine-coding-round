import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Pages";
import { CustomHeader } from "./components";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <CustomHeader routes={routes} />
      <Routes>
        <Route path="/" element={<Home />} />
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
