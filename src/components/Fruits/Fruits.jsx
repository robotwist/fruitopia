// import React, { useState, useRef, useEffect } from 'react';
// import "./Fruits.css";

// function Fruits() {
//     const initialFruits = [
//         { id: 1, name: "Apple", color: "Red", inStock: true, emoji: "🍎" },
//         { id: 2, name: "Banana", color: "Yellow", inStock: false, emoji: "🍌" },
//         { id: 3, name: "Grapes", color: "Purple", inStock: true, emoji: "🍇" },
//         { id: 4, name: "Kiwi", color: "Brown", inStock: false, emoji: "🥝" },
//         { id: 5, name: "Strawberry", color: "Red", inStock: true, emoji: "🍓" },
//         { id: 6, name: "Watermelon", color: "Green", inStock: false, emoji: "🍉" },
//         { id: 7, name: "Pineapple", color: "Yellow", inStock: true, emoji: "🍍" },
//         { id: 8, name: "Mango", color: "Orange", inStock: false, emoji: "🥭" },
//         { id: 9, name: "Peach", color: "Orange", inStock: true, emoji: "🍑" },
//         { id: 10, name: "Pear", color: "Green", inStock: false, emoji: "🍐" },
//         { id: 11, name: "Cherry", color: "Red", inStock: true, emoji: "🍒" },
//         { id: 12, name: "Blueberry", color: "Blue", inStock: false, emoji: "🫐" }
//     ];

//     const [fruits, setFruits] = useState(initialFruits);
//     const [collectedFruits, setCollectedFruits] = useState([]);
//     const quantityInputRef = useRef(null);

//     useEffect(() => {
//         const storedFruits = JSON.parse(localStorage.getItem('collectedFruits'));
//         if (storedFruits) {
//             setCollectedFruits(storedFruits);
//         }
//     }, []); // Empty dependency array ensures this runs only once on mount

//     useEffect(() => {
//         localStorage.setItem('collectedFruits', JSON.stringify(collectedFruits));
//     }, [collectedFruits]); // This runs whenever collectedFruits changes

//     const toggleStock = (id) => {
//         setFruits(fruits.map(fruit =>
//             fruit.id === id ? { ...fruit, inStock: !fruit.inStock } : fruit
//         ));
//     };

//     const handleAddFruit = (fruit) => {
//         const quantity = parseInt(quantityInputRef.current.value, 10) || 1;

//         if (!fruit.inStock) {
//             console.log("This fruit is out of stock");
//             return;
//         }

//         const existingFruit = collectedFruits.find(item => item.id === fruit.id);

//         if (existingFruit) {
//             setCollectedFruits(collectedFruits.map(item =>
//                 item.id === fruit.id ? { ...item, quantity: item.quantity + quantity } : item
//             ));
//         } else {
//             setCollectedFruits([...collectedFruits, { ...fruit, quantity }]);
//         }

//         setFruits(fruits.map(f =>
//             f.id === fruit.id ? { ...f, inStock: false } : f
//         ));
//     };

//     const handleRemoveFruit = (fruitToRemove) => {
//         setCollectedFruits(collectedFruits.filter(fruit => fruit.id !== fruitToRemove.id));
//     };

//     const handleClearCollection = () => {
//         setCollectedFruits([]);
//     };

//     return (
//         <div>
//             <h1>Fruits</h1>

//             <h3>Available Fruits:</h3>
//             <ul>
//                 {fruits.map(fruit => (
//                     <li key={fruit.id}>
//                         <span>{fruit.name} {fruit.emoji}</span>
//                         <button onClick={() => toggleStock(fruit.id)}>
//                             {fruit.inStock ? "In Stock" : "Out of Stock"}
//                         </button>
//                         {fruit.inStock && (
//                             <div>
//                                 <input
//                                     type="number"
//                                     defaultValue={1}
//                                     min={1}
//                                     ref={quantityInputRef}
//                                 />
//                                 <button onClick={() => handleAddFruit(fruit)}>
//                                     Add to Collection
//                                 </button>
//                             </div>
//                         )}
//                     </li>
//                 ))}
//             </ul>

//             <h3>Collected Fruits:</h3>
//             <button onClick={handleClearCollection}>Clear Collection</button>
//             <ul>
//                 {collectedFruits.map(item => (
//                     <li key={item.id}>
//                         <span>{item.name} {item.emoji} (x{item.quantity})</span>
//                         <button onClick={() => handleRemoveFruit(item)}>Remove</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Fruits;

import { useState } from 'react'
import './Fruits.css';
function Fruits() {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple", color: "Red", inStock: true, emoji: "🍎" },
            { id: 2, name: "Banana", color: "Yellow", inStock: false, emoji: "🍌" },
            { id: 3, name: "Grapes", color: "Purple", inStock: true, emoji: "🍇" },
            { id: 4, name: "Kiwi", color: "Brown", inStock: false, emoji: "🥝" },
            { id: 5, name: "Strawberry", color: "Red", inStock: true, emoji: "🍓" },
            { id: 6, name: "Watermelon", color: "Green", inStock: false, emoji: "🍉" },
            { id: 7, name: "Pineapple", color: "Yellow", inStock: true, emoji: "🍍" },
            { id: 8, name: "Mango", color: "Orange", inStock: false, emoji: "🥭" },
            { id: 9, name: "Peach", color: "Orange", inStock: true, emoji: "🍑" },
            { id: 10, name: "Pear", color: "Green", inStock: false, emoji: "🍐" },
            { id: 11, name: "Cherry", color: "Red", inStock: true, emoji: "🍒" },
            { id: 12, name: "Blueberry", color: "Blue", inStock: false, emoji: "🫐" }
  ])
  const [collectedFruits, setCollectedFruits] = useState([]);
  const toggleStock = (id) => {
    setFruits(fruits.map(fruit => fruit.id === id ? { ...fruit, inStock: !fruit.inStock } : fruit))
  }
  const handleAddFruit = (fruit) => {
    if (!fruit.inStock) {
      console.log("This fruit is out of stock!")
      return;
    }
    setCollectedFruits([...collectedFruits, fruit])
  }
  console.log(collectedFruits, "collected Fruits")
  const handleRemoveFruit = (fruit) => {
    setCollectedFruits(collectedFruits.filter(f => f.id !== fruit.id))
  }
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name} {fruit.emoji}
            <strong>{fruit.inStock ? "In Stock" : "Out of Stock"}</strong>
            <button onClick={() => toggleStock(fruit.id)}>{fruit.inStock ? "In Stock" : "Out of Stock"}</button>
          </li>
        ))
        }
      </ul>
      <div>
        <h1>Fruit Inventory</h1>
        <div>
          <h3> Available Fruits:</h3>
          <ul>
            {
              fruits.map(fruit => (
                <li key={fruit.id}>
                  <span>{fruit.name} {fruit.emoji} </span>
                  {fruit.inStock && (<button onClick={() => handleAddFruit(fruit)}>Add to Collection</button>)}
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h3> Your Collection:</h3>
          <ul>
            {
              collectedFruits.map(fruit => (
                <li key={fruit.id}>
                  <span>{fruit.name} {fruit.emoji} </span>
                  <button onClick={() => handleRemoveFruit(fruit)}>Remove</button>
                </li>
              ))
            }
          </ul>
        </div>
      </div >
    </>
  )
}
export default Fruits