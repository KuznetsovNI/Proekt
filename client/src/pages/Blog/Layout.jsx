import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Home from "./Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import style from "./blog.scss";
import Button from "/Users/kuzne/Desktop/Proekty/ProektD/client/src/components/Button/Button";

const Layout = () => {

    const menu = [
        { text: 'Ошибки', path: '/' },
        { text: 'Задачи', path: '/' },
        { text: 'Новшества', path: '/' },
        { text: 'Lifehacks', path: '/' },
    ]
    return (
        <div>
            <Navbar />
            <div className="Layout">
                        <ul className='Layout__navbar'>
                        <Button className='Layout__navbar_button'>
                            <Link to='/create' className='Layout__navbar_button_text'>+ Создать пост</Link>
                        </Button>
                            <Link to='/'>
                                <span className='Layout__navbar_all'>Все</span>
                            </Link>
                            {
                                menu.map((x, i) => {
                                    return <li key={i}><Link className='Layout__navbar_item' to={`/?category=${x.text}`}><span>{x.text}</span></Link></li>
                                })
                            }
                        </ul>
            </div>
            {/* <Body></Body> */}
            <div className="flex mx-auto px-5 md:px-20">
                <div className="mt-5 mb-5 min-h-[500px] w-full">
                    <Home />
                </div>

            </div>
            {/* <Footer></Footer> */}
            <div>
                    <Footer />
            </div>
        </div>
    );
}

export default Layout;
