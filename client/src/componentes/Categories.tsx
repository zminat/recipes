import * as React from "react";
import axios from "axios";

import "../styles/Categories.css";
import {CategoryType} from "./Category.types.ts";
import Category from "./Category.tsx";

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
        <div className="categories-container">
            {categories.map((category) => (
                <Category id={category.id} name={category.name} />
            ))}
        </div>
    );
}

export default Categories