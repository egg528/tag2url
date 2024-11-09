import React from 'react';
import * as style from './CatMotivation.module.css';
import PropTypes from "prop-types";

const Cat = ({ bg, title, headerText , footerText, buttonText, onClick }) => {
    let containerStyleName = 'greenContainer';

    if (bg === 'brown') {
        containerStyleName = 'brownContainer'
    }

    return (
        <div className={style[containerStyleName]}>
            {headerText &&
                <div className={style.headerText}>
                    {headerText.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            }
            <img className={style.catImage} src="/assets/cat.png" alt="Cat"/>
            {title && <p className={style.title}>{title}</p>}
            {footerText &&
                <div className={style.footerText}>
                    {footerText.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            }
            {buttonText && <button className={style.button} onClick={onClick}>{buttonText}</button>}
        </div>
    );
};

Cat.propTypes = {
    bg: PropTypes.string,
    headerText: PropTypes.array,
    title: PropTypes.string,
    footerText: PropTypes.array,
    buttonText: PropTypes.string,
    onClick: PropTypes.func,
};

Cat.defaultProps = {
    bg: 'green',
    headerText: [],
    title: '',
    footerText: [],
    buttonText: '',
};

export default Cat;