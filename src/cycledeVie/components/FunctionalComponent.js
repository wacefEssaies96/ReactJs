import { useContext, useEffect, useState } from "react"
import ThemeContext from './context';

export default function FunctionalComponent(props){
    const [likes,setLikes] = useState(0)
    const {color,background}=useContext(ThemeContext);
    console.log(likes)
    const sayHello=()=>{
        console.log("Hello from functional component")
    }
    useEffect(()=>{
        console.log('I m rendering');
        console.log('I m updating');
        return ()=>{console.log('I m unmounting')}
    })
    return (
        <>
            <p>{props.title}</p>
            <button onClick={sayHello}>Say Hello</button>
            <p>{likes}</p>
            <p>{color}</p>
            <p>{background}</p>

            <button onClick={()=>setLikes(likes+1)}>Likes</button>

        </>
    )
}