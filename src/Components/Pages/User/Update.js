import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Update() {
    const {register, handleSubmit, setValue} = useForm();

    const navi = useNavigate();

    const {userId} = useParams();

    async function fetchData(){
        const result =  await axios.get(`http://localhost:5000/users/${userId}`)
        // console.log(result)
        setValue('sr', result.data.sr)
        setValue('village', result.data.village)
        setValue('population', result.data.population)
        setValue('head', result.data.head)
    }

    function saveData(data){
        // console.log('updated data', data);
        axios.put(`http://localhost:5000/users/${userId}`, data)
        navi('/show')
    }

    useEffect(()=>{
        fetchData();
    }, [])

  return (
    <>
        <div className='container w-50'>
            <center><u>VILLAGE UPDATE FORM</u></center>
            <form onSubmit={handleSubmit(saveData)} className='mt-5'>
                <label htmlFor='s'><b>SR NO</b></label>
                <input type='number' id='s' className='form-control' {...register('sr')}/>
                <br /> <br />

                <label htmlFor='n'><b>VILLAGE NAME</b></label>
                <input type='text' id='n' className='form-control' {...register('village')}/>
                <br /> <br />

                <label htmlFor='p'><b>POPULATION</b></label>
                <input type='number' id='p' className='form-control' {...register('population')} />
                <br /> <br />

                <label htmlFor='h'><b>VILLAGE HEAD</b></label>
                <input type='text' id='h' className='form-control' {...register('head')}/>
                <br /> <br />

                <input type='submit' value="UPDATE VILLAGE" className='btn btn-outline-success col-6' />
                <input type='reset' value="RESET" className='btn btn-outline-warning col-6' />
            </form>
        </div>
    </>
  )
}

export default Update