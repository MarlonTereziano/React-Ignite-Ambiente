import {useState} from 'react';

export function Counter(){
    const [counter, setCounter] = useState(0);

    function Increment(){
        
        if(counter > 10){
            setCounter(0);
        } else {
            setCounter(counter + 1);
        }

    }


    return(
        
        <div>
            <h2> {counter} </h2>
            <button type = "button" onClick = {Increment}> 
                mentador     
            </button> 
            


        </div>
    );
}
