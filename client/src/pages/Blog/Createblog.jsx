import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {uploadFile, createBlog} from './Api';
import style from "./blog.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Createblog = () => {
    
    const blankBlog = {
        "title":"",
        "image":"",
        "post":"<p><br></p>",
        "category":""
    }

    const [newblog,setNewblog] = useState(blankBlog);

    const handleUpload = async (event) => {
        let uploadedFile = await uploadFile(event.target.files[0]);
        if(uploadedFile.path){
            setNewblog({...newblog,image:uploadedFile.path});
        }
    }

    const handleSubmit = async () => {
        let createdBlog = await createBlog(newblog);
        if(createdBlog.desc == 1){
            setNewblog(blankBlog);
        }
    }

    const menu = [
        {text:'Ошибки',path:'/'},
        {text:'Задачи',path:'/'},
        {text:'Новшества',path:'/'},
        {text:'Lifehacks',path:'/'},
    ]
    return (
        <div className="create__full">
            <Navbar />
        <div className='create'>
                {/* <small>{JSON.stringify(newblog)}</small> */}
                <h1 className='create__bigText'>Создайте свой пост</h1>
                <div className="create__main">

                    <div className="create__title_form">
                    <label htmlFor="" className='create__main_title'>Заголовок: </label>
                    <input type="text" value={newblog.title} onChange={(e) => setNewblog({...newblog,title:e.target.value})} className='create__main_title_select' />
                    </div>
                    
                    <div className="create__tag_form">
                    <label htmlFor="" className='create__main_tag'>Категория: </label>
                    <select value={newblog.category} onChange={(e) => setNewblog({...newblog,category:e.target.value})} name="" id="" className='create__main_title_tag'>
                        <option value="" default disabled>Выбрать</option>
                        {menu.map(x => {
                            return <option value={x.text}>{x.text}</option>
                        })}
                    </select>
                    </div>

                    <div className="create__img_form">
                    <label htmlFor="" className='create__main_img'>Добавить изображение: </label>
                    <input onChange={(e)=> handleUpload(e)} type="file" />
                    </div>
                    <ReactQuill className='' theme="snow" value={newblog.post} onChange={(e)=>{setNewblog({...newblog,post:e})}} />
                    
                    
                    <hr />
                    <div className="create__main_buttons">
                    <Link  className='create__main_button1' to="/">Назад</Link>
                    <button onClick={()=> handleSubmit()} className='create__main_button2'>Создать</button>
                    </div>
                </div>
            </div>
            <Footer />
            </div>
    );
}

export default Createblog;
