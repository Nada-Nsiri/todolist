import {addTodo} from "../reducer/action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button } from "react-bootstrap";
function Add() {
    
const [newtodo, setNewtodo] = useState({
        id:"" ,
        name: "",
        description: "",
        
    });
    const { id, name, description } = newtodo;

    const handleChange = (e) =>
        setNewtodo({ ...newtodo, [e.target.name]: e.target.value });
    const handleSubmit = () => {
       dispatch(addTodo(newtodo));
        setNewtodo({
            id: "",
            name: "",
            description: "",
           
        });
    };
const dispatch=useDispatch();
  return (
    <div className="App">
    <label >id</label>
<input type="text" id="id" name="id" onChange={handleChange}/>
<label >name</label>
<input type="text" id="name" name="name" onChange={handleChange}/>
<label >description</label>
<input type="text" id="des" name="description" onChange={handleChange}/>
<Button onClick={()=>handleChange}>add</Button>
    </div>
  );


  }

export default Add;