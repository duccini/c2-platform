import React from 'react'
import styles from "./styles.module.css"
 
interface Validation{
    
    message: string;
}


function Error({message}:Validation) {
  return (
    <div className='contaiter-p'>
        <p className={styles.error}>{message}</p>
    </div>
  )
}

export default Error