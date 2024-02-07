import Pet from "./Pet";
import { useState } from "react";

function ArraysEx() {
  const colorsArr = ["red", "orange", "yellow"];

  const petsArr: Pet[] = [

    {
      name: "Kimchi",
      type: "cat",
      id: 3,
    },

    {
      name: "Emmett",
      type: "cat",
      id: 1,
    },

    {
      name: "Baxter",
      type: "dog",
      id: 2,
    },

  ];

  const [colors, setColors] = useState(colorsArr);

  const [pets, setPets] = useState(petsArr);

  const addColor = (color: string): void => {
    setColors([...colors, color]);
  };

  const deletePet = (index: number): void => {
    const updatedPets = ([...pets]);
    updatedPets.splice(index, 1);
    setPets(updatedPets);
  };

  return (
    <div>
      <div>
        <header> Colors: </header>

        <ol>
          {colors.map((color, index) => (
            <li key={index}> {color} </li>
          ))}
        </ol>

        <button onClick={() => addColor("green")}>Add Green</button>
        <button onClick={() => addColor("blue")}>Add Blue</button>
        <button onClick={() => addColor("violet")}>Add Violet</button>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
          {pets.map((pet, index)=> (
            <tr key={pet.id}> 
              <td> {pet.name} </td>
              <td> {pet.type} </td>
              <button onClick={() => deletePet(index)}>Delete</button>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ArraysEx;
