import React, { useEffect } from 'react';
import axios from 'axios';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';

function Show() {

    const [users, setUser] = useState([])

    async function fetchData(){
        const result = await axios.get('http://localhost:5000/users')
        setUser(result.data)
    }
    useEffect(()=>{
        fetchData();
    }, [])


  return (
    <>
    <div className='container'>
    <table className='table table-danger table-scripted'>
        <thead>
            <tr>
                <th>SR NO</th>
                <th>VILLAGE NAME</th>
                <th>POPULATION</th>
                <th>VILLAGE HEAD</th>
                <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((obj)=>{
                    return(
                        <tr>
                            <td>{obj.sr}</td>
                            <td>{obj.village}</td>
                            <td>{obj.population}</td>
                            <td>{obj.head}</td>
                            <td>
                               <NavLink to={`/update/${obj.id}`}><button className='btn btn-outline-primary btn-sm me-3'>UPDATE</button></NavLink>
                                <NavLink to={`/delete/${obj.id}`}><button className='btn btn-outline-danger'>DELETE</button></NavLink>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </div>
    </>
  )
}

export default Show