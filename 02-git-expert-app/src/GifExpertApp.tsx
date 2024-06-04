import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAdd = (category: string) => {
    if (categories.includes(category)) return;

    setCategories([...categories, category]);
  };

  return (
    <div>
      <h1>GifExpertApp</h1>
      <hr />

      <AddCategory handleAdd={handleAdd} />

      <GifGrid categories={categories} />
    </div>
  );
};

export default GifExpertApp;
