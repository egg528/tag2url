import React from 'react';
import * as style from './CatMotivation.module.css';
import PropTypes from "prop-types";
import dayjs from "dayjs";
import 'dayjs/locale/ko'
import {useNavigate} from "react-router-dom";

dayjs.locale('ko');

const Select = ({ nickname, quoteType, setQuoteType, setQuoteContent, setQuoteAuthor }) => {
    const formattedDate = dayjs().format('YY.MM.DD (ddd)');
    const csrfToken = document.querySelector('meta[name="csrf-token"]')
        .getAttribute('content');
    const navigator = useNavigate()

    const handleSelect = (taste) => {
        setQuoteType(taste);
    };

    const handleClick = async (event) => {
        event.preventDefault();
        await fetch(`/selections`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken,
            },
            body: JSON.stringify({ quote_type: quoteType }),
        });

        setQuoteType(quoteType)

        const res = await fetch(`/quotes/today?quote_type=${quoteType}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken,
            }
        });

        const data = await res.json()

        setQuoteContent(data.quote_content);
        setQuoteAuthor(data.quote_author);

        navigator('/cat_motivation/quote')
    };

    return (
        <div className={style.greenContainer}>
            <div className={style.headerText}>
                <p>{`안녕하세요 ${nickname}님`}</p>
                <p>오늘의 키워드를 선택해주세요.</p>
            </div>
            <img className={style.sittingCatImage} src="/assets/sitting-cat.png" alt="Sitting Cat"/>
            <div className={style.tasteButtons}>
                <img
                    src={'/assets/soft-button.png'}
                    alt="순한맛"
                    className={`${style.tasteImage} ${quoteType === 'soft' ? style.selected : ''}`}
                    onClick={() => handleSelect('soft')}
                />
                <img
                    src={'/assets/hard-button.png'}
                    alt="매운맛"
                    className={`${style.tasteImage} ${quoteType === 'hard' ? style.selected : ''}`}
                    onClick={() => handleSelect('hard')}
                />
            </div>
            <div className={style.footerText} style={{top: '80%'}}>
                <p>{`${formattedDate}    📅`}</p>
            </div>
            <button className={style.button} onClick={handleClick}>선택 완료!</button>
        </div>
    );
};

Select.propTypes = {
    nickname: PropTypes.string,
    quoteType: PropTypes.string,
    setQuoteType: PropTypes.func,
    setQuoteContent: PropTypes.func,
    setQuoteAuthor: PropTypes.func
}

export default Select;