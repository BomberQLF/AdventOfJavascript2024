import React, { useState } from "react";
import Input from "./Input";
import Slug from "./Slug";

const Solution = () => {
    const [slug, setSlug] = useState("");

    // Ici je récupère simplement la valeur qui est ecrite par l'utilisateur puis je l'attribue à la variable slug.
    const getValue = (event) => {
        const slug = event.target.value;
        setSlug(slug);
    }


    // Ici je formate le slug pour qu'il réponde aux consignes, minuscule, commencant par un slash et séparé de tirets.
    const formatSlug = () => {
        if (!slug.trim()) return "";
        return '/' + slug.split(' ').join('-').toLowerCase();
    };
    console.log(formatSlug(slug));

    return (
        <div className="container">
            < Input htmlFor="slug" name="slug" id="slug" type="text" value="Title" onChange={getValue} />
            < Slug event={formatSlug(slug)}  />
        </div>
    )

}
export default Solution;