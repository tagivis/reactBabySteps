import React from 'react'
import styles from './MyHobbies.module.css'

export default function MyHobbies() {
  return (
    <div>
        <h2>Mis pasatiempos son</h2>
        <p>Cuidar de Sophie y Luke</p>
        <img src="./images/lukeSophie.jpg" alt=""/>
        <p className={styles.textFormat} >Ademas me encantan los documentales medicos</p>
    </div>
  )
}
