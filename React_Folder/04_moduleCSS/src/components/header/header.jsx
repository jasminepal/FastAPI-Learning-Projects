import React from 'react'
import styles from './header.module.css'

const header = () => {
  return (
    <div>
      <h1 className={styles.greet}>hello</h1>
      <button className={styles.btn}>Save Me</button>
    </div>
  )
}

export default header
