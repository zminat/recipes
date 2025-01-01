import "../styles/Category.css";
import {CategoryType} from "./Category.types.ts";
import {Link} from "react-router-dom";

function Category(props:CategoryType) {
    return (
        <div className={'category-card'}>
            <Link to={`/categories/${props.id}`}>{props.name}</Link>
        </div>
    )
}

export default Category;