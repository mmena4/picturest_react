
import {useState} from 'react';


const BoardForm = (props) => {

    const [title, setTitle] = useState();
    const [select, setSelect] = useState();

    const body = {
        author: props.id,
        title: title,
        collaborators: []
    }

    const handleSubmit = () => {

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify.body
        }

        fetch("http://localhost:5000/api/boards", options)
        .then(response => console.log(response.json))
        .then(json => console.log(json));

    }

    


    console.log(body);

    return (
        <form>
         <label>
            Name:
             <input type="text" name="name" onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <select onChange={(e) => setSelect(e.target.value)}>
            <option value="1">hola</option>
            <option value="2">mundo</option>
            <option value="3">otravez"</option>
        </select>
        <button onClick={handleSubmit} type="submit" >Enviar</button>
        </form>

    )

}

export default BoardForm;