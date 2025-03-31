import { Routes } from "react-router";
import { Route } from "react-router";
import { HomePage } from "./components/HomePage";
import { routes } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
