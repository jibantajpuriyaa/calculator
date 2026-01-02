import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"


 


function App() {

const [isChecked, setIsChecked] = useState(false);
    const [btndark, setbtnDark] = useState("dark mode");
    const [inputfrom , setInputfrom] = useState("");
    const [inputfromm , setInputfromm] = useState("");


    const btnclick =() =>{
      if(btndark === "light mode"){
        setbtnDark("dark mode")
        setDark(false)
    }else if(btndark === "dark mode"){
      setbtnDark("light mode")
       setDark(true)
    }
    }

    const btnclicked =(btn) =>{
     if(btn != "="){
      setInputfrom(inputfrom + btn)

    }else if( btn == "="){
      let result = eval(inputfrom);
      
      setInputfromm(result);
     }

   if(btn == "Ac"){
      
         setInputfrom('');
          setInputfromm('');
     }
    }

    const handleInput = (e) =>{
      e.traget.value
      
    }
 const handleOnChange = (e) => {
  setIsChecked(e.target.checked);
};


  return (
    <>
       <div class="form-check form-switch btn-dark">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" checked={isChecked}
onChange={handleOnChange}/>
  <label class="form-check-label checkbox-text" for="switchCheckDefault">Dark mode</label>
</div>
   
    <div className="headingtext"><h3>Hi this is my frist app<br/> check github <br/><br/><br/><br/><br/>
    <div className="seconddiv">Jiban Tajpuriya's  future projects.
    <ul>
      <li>Messsaging app</li>
      </ul></div></h3></div>
  

  <div className="container">

  
  
    <div className={`calculator ${isChecked === true?'dark' :  'light'}`}>
    
      <input value={inputfrom} onChange={handleInput} className="display">
       </input>
      <input value={inputfromm} readOnly className="displayy"></input>

      <div className="buttons">
        <button   onClick={()=>btnclicked("Ac")}  className="func">AC</button>
        <button   onClick={()=>btnclicked("+-")}  className="func">±</button>
        <button   onClick={()=>btnclicked("%")}  className="func">%</button>
        <button   onClick={()=>btnclicked("/")}  className="op">÷</button>

        <button   onClick={()=>btnclicked("7")} >7</button>
        <button   onClick={()=>btnclicked("8")} >8</button>
        <button   onClick={()=>btnclicked("9")} >9</button>
        <button   onClick={()=>btnclicked("*")}  className="op">×</button>

        <button   onClick={()=>btnclicked("4")} >4</button>
        <button   onClick={()=>btnclicked("5")} >5</button>
        <button   onClick={()=>btnclicked("6")} >6</button>
        <button   onClick={()=>btnclicked("-")}  className="op">−</button>

        <button   onClick={()=>btnclicked("1")} >1</button>
        <button   onClick={()=>btnclicked("2")} >2</button>
        <button   onClick={()=>btnclicked("3")} >3</button>
        <button   onClick={()=>btnclicked("+")}  className="op">+</button>

        <button   onClick={()=>btnclicked("0")}  className="zero">0</button>
        <button   onClick={()=>btnclicked(".")} >.</button>
        <button   onClick={()=>btnclicked("=")}  className="equal">=</button>
      </div>
    </div>

{/*    
    <div className="calculator dark">
      <div className="display">
        <small>6000 / 2 + 3227 × 2</small>
        <h2>= 12,454</h2>
      </div>

      <div className="buttons">
        <button   onClick={()=>btnclicked("Ac")}  className="func">AC</button>
        <button   onClick={()=>btnclicked("Ac")}  className="func">±</button>
        <button   onClick={()=>btnclicked("Ac")}  className="func">%</button>
        <button   onClick={()=>btnclicked("Ac")}  className="op">÷</button>

        <button   onClick={()=>btnclicked("Ac")} >7</button>
        <button   onClick={()=>btnclicked("Ac")} >8</button>
        <button   onClick={()=>btnclicked("Ac")} >9</button>
        <button   onClick={()=>btnclicked("Ac")}  className="op">×</button>

        <button   onClick={()=>btnclicked("Ac")} >4</button>
        <button   onClick={()=>btnclicked("Ac")} >5</button>
        <button   onClick={()=>btnclicked("Ac")} >6</button>
        <button   onClick={()=>btnclicked("Ac")}  className="op">−</button>

        <button   onClick={()=>btnclicked("Ac")} >1</button>
        <button   onClick={()=>btnclicked("Ac")} >2</button>
        <button   onClick={()=>btnclicked("Ac")} >3</button>
        <button   onClick={()=>btnclicked("Ac")}  className="op">+</button>

        <button   onClick={()=>btnclicked("Ac")}  className="zero">0</button>
        <button   onClick={()=>btnclicked("Ac")} >.</button>
        <button   onClick={()=>btnclicked("Ac")}  className="equal">=</button>
      </div>
    </div> */}
  </div>
    </>
  );
}

export default App;
