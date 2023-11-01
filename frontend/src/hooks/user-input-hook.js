import { useState } from "react"




const useInput = (valaidateValue)=>{
    
    const [enteredValue, setEnteredValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const valueIsValid = valaidateValue(enteredValue)
  const hasError= !valueIsValid && isTouched
  
  const valueChangeHandler = e => {
    setEnteredValue(e.target.value)
  }
  const inputBlurHandler = e => {
    setIsTouched(true)

  }

  const reset=()=>{
    setEnteredValue('')
    setIsTouched(false)
  }

  return{
    value: enteredValue,
    hasError:hasError, 
    isValid: valueIsValid, 
    valueChangeHandler,
    inputBlurHandler,
    reset
  }  
}

export default useInput