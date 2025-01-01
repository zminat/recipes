import "../styles/Category.css";
import {CategoryType} from "./Category.types.ts";
import {Link} from "react-router-dom";

function Category(props:CategoryType) {
    return (
        <Link to={`/categories/${props.id}`}>{props.name}</Link>
    )
}

export default Category;