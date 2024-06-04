import { useState } from "react";

interface AddCategoryProps {
  handleAdd: (category: string) => void;
}
export const AddCategory = ({ handleAdd }: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState("Hola Mundo");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim().length < 1) return;

    handleAdd(inputValue.trim());
    setInputValue("");
  };

  return (
    <form action="" onSubmit={(event) => handleSubmit(event)} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={(event) => handleInputChange(event)}
      />
    </form>
  );
};


