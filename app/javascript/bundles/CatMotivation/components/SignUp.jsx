import React from 'react';
import * as style from './CatMotivation.module.css';

const SignUp = () => {
    return (
        <div className={style['app-container']}>
            <div className={style.text}>
                <p>안녕하세요. </p>
                <p>제 이름은 동키에요.</p>
            </div>
            <img className={style['cat-image']} src="/assets/cat.png" alt="Cat" />
            <button className={style.button}>안녕 동키야</button>
        </div>
    );
};

export default SignUp;
