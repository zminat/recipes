// import "../styles/CategoryRecipe.css";
import {CategoryRecipeType} from "./CategoryRecipe.types.ts";
import {Link} from "react-router-dom";

function CategoryRecipe(props:CategoryRecipeType) {
    return (
        <Link to={`/recipes/${props.id}`}>{props.name}</Link>
    )
}

export default CategoryRecipe;