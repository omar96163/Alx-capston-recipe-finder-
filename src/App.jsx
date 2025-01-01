import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RecipeDetails from "./components/RecipeDetails";
import FavoriteList from "./components/FavoriteList";
import { createContext, useState } from "react";
export const Theme = createContext();

function App() {
  const queryclient = new QueryClient();
  const [darkmod, setdarkmod] = useState(false);
  const toggledark = () => {
    setdarkmod(!darkmod);
  };
  return (
    <QueryClientProvider client={queryclient}>
      <Theme.Provider value={darkmod}>
        <Router>
          <button
            onClick={toggledark}
            className="absolute sm:right-[15px] sm:top-[50px] p-[2px] rounded-lg border-2 right-3 top-[38px]"
            title={darkmod ? "light mod" : "dark mod"}
          >
            {darkmod ? "☀" : "☁"}
          </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FavoriteList" element={<FavoriteList />} />
            <Route path="/RecipeDetails/:idMeal" element={<RecipeDetails />} />
          </Routes>
        </Router>
      </Theme.Provider>
    </QueryClientProvider>
  );
}

export default App;
