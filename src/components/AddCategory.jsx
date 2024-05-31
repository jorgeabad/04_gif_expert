import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 2) return;
    console.log(inputValue);
    //onAddCategory((categories) => [ inputValue, ...categories]);
    onNewCategory(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif..."
        value={inputValue}
        onChange={onInputChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};
