import React, { useState } from 'react'
import "./Fruits.css"
function Fruits() {
    const fruits = [
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
      ]

    const [fruit, setFruit] = useState('')
    const toggleStock = (id) => { 
        setFruit(fruits.map(fruit => fruit.id === id) ? {...fruit, inStock: !fruit.inStock} : fruit)
    }
    
        return (
        <ul>
            {fruits.map((fruit) => (
                <li key={fruit.id}>{fruit.name} {fruit.emoji}
                <strong>{fruit.inStock ? "In Stock" : "Out of Stock"}</strong>
                    <button>{fruit.inStock ? "In Stock" : "Out of Stock"}</button>
                </li>
            ))
            }
        </ul>
    )
}

export default Fruits