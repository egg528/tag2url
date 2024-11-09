import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./SignUp";
import PropTypes from "prop-types";

const Home = ({ member_id, member_nickname }) => {
    const [id, ] = useState(member_id)
    const [nickname, setNickname] = useState(member_nickname)


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/cat_motivation" element={<SignUp id={id} nickname={nickname} setNickname={setNickname}/>} />
            </Routes>
        </BrowserRouter>
    )
};

Home.propTypes = {
    member_id: PropTypes.number
}

export default Home;
