import React, {useState, useEffect} from 'react';
import {getBlogbyid} from './Api';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import dateFormat from "dateformat";

const Blog = () => {

    const apiURL = 'http://localhost:5000/'

    let {id} = useParams();
    const [blog,setBlog] = useState(null);

    useEffect(() => {
        async function fetchData(){
            const allBlogs = await getBlogbyid(id);
            setBlog(allBlogs.data[0]);
        }
        fetchData();
    },[]);
    

    return (
        <div className=''>
            {blog && <div className="">
                <h1 className=''>{blog.title}</h1>
            
                <div className="">
                    <small>{dateFormat(blog.createdon)}</small>
                </div>
                <img className='' src={apiURL+blog.image} alt="" />
                <div>
                    {parse(blog.post)}  
                </div>
            </div>}
        </div>
    );
}

export default Blog;
