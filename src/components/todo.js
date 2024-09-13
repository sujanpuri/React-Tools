import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [idnum, setidnum] = useState(0)
    const [name, setname] = useState("")
    const [array, setarray] = useState([]);

    function handleCheckbox(id){
        setarray(array.map(item=>{
            return(item.idnum === id? {...item, checked: !item.checked}: item)
        }))
    }      
//the Id of clicked item comes here & compares with every idnum of item of array, and if it matches with the idnum of any item, it changes the checked status of that item

    function handleRemoving(){      //this removes the items that is selected.
        setarray(array.filter(item => !item.checked))
    }   //this filter out all the items that has true checked in status. and only shows the items with true checked status

    function handleRemoveAll(){
        setarray([])        //set the array empty.
    }

  return (
    <div>

        <h2>To-Do App</h2>
        {/* ADDING DATA TO THE ARRAY */}

        <input value={name} onChange={(e)=>{setname(e.target.value)}} required/>
        <button 
            onClick={()=>{
                if(name===""){
                    <p>Enter some thing please</p>
                }else{
                    setarray([
                    ...array, 
                    {idnum: idnum, name: name, checked: false}
                    ])
                    setidnum(idnum+1)   //increases the idnum
                    setname("")     //clears the input box
                }
        }
            }>
            Add
        </button>

        {/* MAPPING THE ARRAY */}
        <ul>
            {array.map((arrayData)=>{
                return(
                    <li key={arrayData.idnum}>
                        {arrayData.name}
                        <input 
                            type="checkbox" 
                            checked={arrayData.checked}     //checked = the checked state of current item of array (i.e false initially)
                            onChange={()=>{handleCheckbox(arrayData.idnum)}}      //calls the function by sending the idnum of item as parameter.
                        />
                    </li>
                )
            })}
        </ul>

        {/* REMOVING THE DATA FROM THE ARRAY */}
        <button onClick={handleRemoving}>
            Remove selected
        </button>
        <button onClick={handleRemoveAll}>
            Remove All
        </button>
    </div>
  )
}

export default Todo;