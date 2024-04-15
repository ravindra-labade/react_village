import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {
    const [user, setUser] = useState([]);

    const {userId} = useParams();
    const navi = useNavigate();

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`);
        setUser(result.data);
    }
    function deleteUser(){
        axios.delete(`http://localhost:5000/users/${userId}`);
        navi('/show')
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <>
        <center>
        <h1><u>DELETE CONFIRMATION</u></h1>
                <div className='container mt-5'>
                        <h2><u>DO YOU WANTS TO DELETE {user.sr} {user.village} {user.population} {user.head} RECORD..?</u></h2>
                        <button onClick={()=>deleteUser()} className='btn btn-outline-danger col-3'>YES</button>
                        <NavLink to="/show"><button className='btn btn-outline-warning col-3'>NO</button></NavLink>

                </div>
        </center>
    </>
  )
}

export default Delete