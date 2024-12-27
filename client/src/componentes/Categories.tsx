import * as React from "react";
import axios from "axios";
// import Table from "react-bootstrap/Table";
import Category from "./Category";

import "../styles/Categories.css";
import {CategoryType} from "./Category.types.ts";
// import {string} from "prop-types";

function Categories() {
    const [categories, setCategories] = React.useState<CategoryType[]>([]);

    React.useEffect(() => {
        if (!categories.length) {
            axios
                .get<CategoryType[]>("/api/categories")
                .then((res) => {
                    console.log(res);
                    setCategories(res.data);
                })
                .catch((error) => {
                    console.error("Error fetching categories:", error);
                });
        }
    }, [categories.length]);
    return (
        <div>
            {categories.map((category : CategoryType) => <Category key={category.id}
                                                                   id={category.id}
                                                                   name={category.name}
                                                                   description={category.description}/>)}
        </div>
    );
}

export default Categories