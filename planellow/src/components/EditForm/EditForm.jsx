import { useState } from 'react';
import './EditForm.css';
import axios from 'axios';
import { state } from '../state/state';
import { useHookstate } from '@hookstate/core';
import { useEffect } from 'react';

export default function EditForm(props) {
    const [form, setForm] = useState({});
    const data = useHookstate(state);
    
    useEffect(()=>{
        axios.get('').then((res)=>{
            setForm(res.data);
        });
    }, []);

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
            setForm((old)=>{return {...old, [name]: value}})
        }

        const handleSubmit = ()=>{
            axios.post('', form).then((res)=>{
                handleClose();
                // data.set((old)=>{return [...old, res.data]})
            });
        }

        return (
            <div id='add-container' onClick={handleOuterClick}>
                <form onSubmit={handleSubmit}>
                    <h1 className='text-3xl'>Edit Task</h1>
                    <button onClick={handleClose} id="close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
                    </button>
                    <div className='form-child'>
                        <label htmlFor="title">Title</label>
                        <input name="title" placeholder='Title' value={form.title} onChange={handleForm}></input>
                    </div>
                    <div className='form-child'>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" placeholder='Description' value={form.description} onChange={handleForm}></textarea>
                    </div>
                    <div id='date-container'>
                        <label htmlFor="start_time">from
                            <input type="date" name="start_time" value={form.start_time} onChange={handleForm}></input>
                        </label>

                        <label htmlFor="finish_time">to
                            <input type="date" name="finish_time" value={form.start_time} onChange={handleForm}></input></label>
                    </div>
                    <div id='radio-container'>
                        <span>Importance</span>
                        <div>
                            <label>
                                <input type="radio" name='importance' value="high" checked={form.importance === "high"?true:false } onChange={handleForm}/>High
                            </label>
                            <label>
                                <input type="radio" name='importance' value="medium"checked={form.importance === "medium"?true:false }  onChange={handleForm}/>Medium
                            </label>
                            <label>
                                <input type="radio" name='importance' value="low"checked={form.importance === "low"?true:false }  onChange={handleForm}/>Low
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