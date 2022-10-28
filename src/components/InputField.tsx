import React from 'react'

//styles
import './styles.css'

export const InputField = () => {
  return (
    <form className = "input">
        <input type = "input" placeholder="Enter a Task" className= "inputBox" />
        <button className="inputSubmit" type="submit">
            Go
        </button>

    </form>
  )
}
