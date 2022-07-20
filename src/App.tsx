import { Route, Routes } from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./pages/Routes/publicRoutes";

function App() {
  return (
    <Routes>
      {/* public routes */}
      {publicRoutes.map(({ path, Component }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}

export default App;
