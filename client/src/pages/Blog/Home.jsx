import React, { useEffect, useState } from 'react';
import Blogcard from '../components/Blogcard';
import { getBlogs } from './Api';
import { useSearchParams } from "react-router-dom";
import style from "./blog.scss";

const Home = () => {

    let [searchParams, setSearchParams] = useSearchParams();
    const [blogs,setBlogs] = useState(null);

    useEffect(() => {
        async function fetchData(){
            const allBlogs = await getBlogs();
            setBlogs(allBlogs.data);
        }
        fetchData();
    },[]);

    useEffect(() => {
        async function fetchData(){
            const allBlogs = await getBlogs(searchParams.get('category'));
            setBlogs(allBlogs.data);
        }
        fetchData();
    },[searchParams]);

    return (
        <div className="Home__container">
            <div className="Home__grid">
                {blogs && blogs.map((x,i) => {
                    return <Blogcard key={i} blogdata={x} />
                })}
                
            </div>
        </div>
    );
}

export default Home;
