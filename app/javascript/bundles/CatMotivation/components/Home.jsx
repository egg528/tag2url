import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import SignUp from "./SignUp";
import PropTypes from "prop-types";
import Select from "./Select";
import Motivation from "./Motivation";

const Home = ({ member_id, member_nickname, selected_quote_type, quote_content, quote_author }) => {
    const [id, ] = useState(member_id)
    const [nickname, setNickname] = useState(member_nickname)
    const [quoteType, setQuoteType] = useState(selected_quote_type)
    const [quoteContent, setQuoteContent] = useState(quote_content)
    const [quoteAuthor, setQuoteAuthor] = useState(quote_author)
    const navigator = useNavigate();

    useEffect(() => {
        if (!nickname) {
            navigator('/cat_motivation/sign_up')
        } else if (!quoteType) {
            navigator('/cat_motivation/select')
        } else {
            navigator('/cat_motivation/quote')
        }
    }, []);


    return (
        <Routes>
            <Route path={'/cat_motivation'}>
                <Route path={'/cat_motivation/sign_up'} element={<SignUp id={id} nickname={nickname} setNickname={setNickname}/>}/>
                <Route path={'/cat_motivation/selection'} element={<Select nickname={nickname} quoteType={quoteType} setQuoteType={setQuoteType} setQuoteContent={setQuoteContent}setQuoteAuthor={setQuoteAuthor}/>}/>
                <Route path={'/cat_motivation/quote'} element={<Motivation type={quoteType}  quoteContent={quoteContent} quoteAuthor={quoteAuthor}/>}/>
            </Route>
        </Routes>
    )
};

Home.propTypes = {
    member_id: PropTypes.number,
    member_nickname: PropTypes.string,
    selected_quote_type: PropTypes.string,
    quote_content: PropTypes.string,
    quote_author: PropTypes.string
}

export default Home;
