import * as React from "react";
import axios from "axios";

import "../styles/CategoryRecipes.css";
import { CategoryRecipeType } from "./CategoryRecipe.types.ts";
import {useParams} from "react-router-dom";
import CategoryRecipe from "./CategoryRecipe.tsx";

function CategoryRecipes() {
    const [categoryRecipes, setCategoryRecipes] = React.useState<CategoryRecipeType[]>([]);
    const { id } = useParams<{ id: string }>();

    React.useEffect(() => {
        if (!categoryRecipes.length) {
            axios
                .get<CategoryRecipeType[]>(`/api/categories/${id}`)
                .then((res) => {
                    console.log(res);
                    setCategoryRecipes(res.data);
                })
                .catch((error) => {
                    console.error("Error fetching category recipes:", error);
                });
        }
    }, [categoryRecipes.length]);

    return (
        <div className="recipes-container">
            {categoryRecipes.map((categoryRecipe) => (
                <CategoryRecipe id={categoryRecipe.id} name={categoryRecipe.name} />
            ))}
        </div>
    );
}

export default CategoryRecipes