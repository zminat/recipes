// import * as React from "react";
// import Button from "react-bootstrap/Button";
// import PropTypes from "prop-types";

import "../styles/Category.css";
import {CategoryType} from "./Category.types.ts";

function Category(props:CategoryType) {
    return (
        <div>
            <span>{props.id}</span>
            <span>{props.name}</span>
            <span>{props.description}</span>
        </div>
    )
}

Category.defaultProps = {
    description: "Not Available"
}

export default Category;