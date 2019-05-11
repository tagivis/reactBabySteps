import React from 'react'
import './Mybooks.css';

export default function MyBooks() {
  return (
    <div>
      <p>
          Mis ultimos dos libros que he leido son:
            <ol>
                <li className="textFormat" >Una vida con proposito- Rick Warren </li>
                <li>La magia despues del orden - Kon Mari</li>
            </ol>
      </p>
    </div>
  )
}
