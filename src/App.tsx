import { Routes } from "react-router";
import { Route } from "react-router";
import { HomePage } from "./components/HomePage";
import { routes } from "./routes";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
