import React from 'react';
import * as style from './CatMotivation.module.css';
import PropTypes from "prop-types";
import SignUp from "./SignUp";

const Home = () => {

    return (
        <div className={style['app-container']}>
            <img className={style['cat-image']} src="/assets/cat.png" alt="Cat"/>
            <p className={style.title}>냥기부여</p>
            <div className={style.text}>
                <p>냥이가 전해주는 1일 1 동기부여</p>
            </div>
        </div>
    );
};

SignUp.propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default Home;
