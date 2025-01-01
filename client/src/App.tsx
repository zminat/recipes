import Categories from "./componentes/Categories"
import { Routes, Route } from "react-router-dom";
import CategoryRecipes from "./componentes/CategoryRecipes.tsx";
import Recipe from "./componentes/Recipe.tsx"

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Categories/>}/>
            <Route path="/categories/:id" element={<CategoryRecipes/>}/>
            <Route path="/recipes/:id" element={<Recipe/>}/>
        </Routes>
    </div>
)
}

export default App
