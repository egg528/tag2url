import React from 'react';
import * as style from './CatMotivation.module.css';
import PropTypes from "prop-types";
import dayjs from "dayjs";

const Motivation = ({ type, quoteContent, quoteAuthor }) => {
    dayjs.locale('ko');
    const today = dayjs();
    const formattedDate = today.format('YY.MM.DD (ddd)');
    let containerStyleName = `${type}Container`;

    return (
        <div className={style[containerStyleName]}>
            <div className={style.headerText}>
                <p>{quoteContent}</p>
                <p>{`- ${quoteAuthor}`}</p>
            </div>
            <img className={style.sittingCatImage} src={`/assets/${type}-cat`} alt="Sitting Cat"/>

            <div className={style.footerText} style={{top: '80%'}}>
                <p>{`${formattedDate}    📅`}</p>
            </div>
        </div>
    );
};

Motivation.propTypes = {
    type: PropTypes.string,
    nickname: PropTypes.string,
};

export default Motivation;