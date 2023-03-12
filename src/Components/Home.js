import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    const {username} = useParams();
    const [searchParam,SetSearchParam] = useSearchParams();
    console.log(searchParam.get('id'))
    const n = () =>{
            navigate("/products/add")
    }
    return (
    <div>Welcome {username} {searchParam.get('id')}
    <button onClick={n}>To add product</button>
    </div>
  )
}

export default Home