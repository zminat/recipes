import "../styles/Recipe.css";
import {RecipeType} from "./Recipe.types.ts";
import * as React from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function Recipe() {
    const [recipe, setRecipe] = React.useState<RecipeType>();
    const { id } = useParams<{ id: string }>();

    React.useEffect(() => {
        if (!recipe) {
            axios
                .get<RecipeType>(`/api/recipes/${id}`)
                .then((res) => {
                    console.log(res);
                    setRecipe(res.data);
                })
                .catch((error) => {
                    console.error("Error fetching recipe:", error);
                });
        }
    });

    if (recipe) {
        return (
            <div className="recipe">
                <div>
                    <h3>{recipe.name}</h3>
                    <p>
                        {recipe.text.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br/>
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>
        );
    }
}

export default Recipe;