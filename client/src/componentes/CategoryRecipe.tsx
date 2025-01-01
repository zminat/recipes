import "../styles/CategoryRecipe.css";
import {CategoryRecipeType} from "./CategoryRecipe.types.ts";
import {Link} from "react-router-dom";

function CategoryRecipe(props: CategoryRecipeType) {
    return (
        <div className={'recipe-card'}>
            <Link to={`/recipes/${props.id}`}>{props.name}</Link>
        </div>
    )
}

export default CategoryRecipe;