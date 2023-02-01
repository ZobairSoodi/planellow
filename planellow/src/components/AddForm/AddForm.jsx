import { useState } from 'react';
import './AddForm.css';
import axios from 'axios';
import { state } from '../state/state';
import { useHookstate } from '@hookstate/core';

export default function AddForm(props) {
    const [form, setForm] = useState({});
    const data = useHookstate(state);
    if (props.open) {
        const handleClose = () => {
            props.setOpen(false);
        }

        const handleOuterClick = (e) => {
            if (e.target.getAttribute("id") === "add-container") {
                handleClose();
            }
        }

        const handleForm = (e)=>{
            let name = e.target.name;
            let value = e.target.value;
            setForm((old)=>{return {...old, [name]: value}});
        }

        const handleSubmit = (e)=>{
            e.preventDefault();
            let dataForm = new FormData();
            for (const key in form){
                dataForm.append(key, form[key]);
            }
            axios.post('http://localhost/planellow/backend/add.php', dataForm).then((res)=>{
                console.log(res);
                handleClose();
                data.set((old)=>{return [...old, res.data]});
            });
        }

        return (
            <div id='add-container' onClick={handleOuterClick}>
                <form onSubmit={handleSubmit}>
                    <h1>Add Task</h1>
                    <button onClick={handleClose} id="close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
                    </button>
                    <div className='form-child'>
                        <label htmlFor="title">Title</label>
                        <input name="title" placeholder='Title' onChange={handleForm}></input>
                    </div>
                    <div className='form-child'>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" placeholder='Description' onChange={handleForm}></textarea>
                    </div>
                    <div id='date-container'>
                        <label htmlFor="from_date">from
                            <input type="date" name="from_date" onChange={handleForm}></input>
                        </label>
                        <label htmlFor="to_date">to
                            <input type="date" name="to_date" onChange={handleForm}></input></label>
                    </div>
                    <div id='radio-container'>
                        <span>Importance</span>
                        <div>
                            <label>
                                <input type="radio" name='is_important' value="high" onChange={handleForm}/>High
                            </label>
                            <label>
                                <input type="radio" name='is_important' value="medium" onChange={handleForm}/>Medium
                            </label>
                            <label>
                                <input type="radio" name='is_important' value="low" onChange={handleForm}/>Low
                            </label>
                        </div>
                    </div>
                    <div id='add-div'>
                        <button type="submit" id='add-btn'>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}