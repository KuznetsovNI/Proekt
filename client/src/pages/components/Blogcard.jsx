import React from 'react';
import { Link } from 'react-router-dom';
import { IoApps } from "react-icons/io5";

const Blogcard = (props) => {
    let blogdata = props.blogdata;
    const apiURL = 'http://localhost:5000/'
    return (
        <div className='blogCards'>
            <Link to={`/blog/${blogdata.id}`}>
            <div className="blogCard__main">
    {/* Поменять на img исправить H*/}

                <img className='blogCard__img' src={apiURL+blogdata.image} alt="" />
                <div className='blogCard__footer'>
                    <h4 className='blogCard__footer_title'>{blogdata.title}</h4>
                    <div className='blogCard__footer_post' dangerouslySetInnerHTML={{__html: blogdata.post}} />
                    <p className='blogCard__footer_tags'>
                        <IoApps />
                        <span className='blogCard__footer_tags2'>{blogdata.category}</span>
                    </p>
                </div>
            </div>
            </Link>
        </div>
    );
}

export default Blogcard;
