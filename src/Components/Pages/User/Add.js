import React from 'react'
import { useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Add() {
        const {register, handleSubmit} = useForm();

        const navi = useNavigate()

        function saveData(data){
            axios.post('http://localhost:5000/users', data)
            navi('/show')

        }

  return (
    <>
        <div className='container w-50'>
            <center><u>VILAAGE FORM</u></center>
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

                <input type='submit' value="ADD VILLAGE" className='btn btn-outline-success col-6' />
                <input type='reset' value="RESET" className='btn btn-outline-warning col-6' />
            </form>
        </div>
    </>
  )
}

export default Add