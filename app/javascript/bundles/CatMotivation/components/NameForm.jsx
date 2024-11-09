import React, { useRef } from 'react';
import * as style from './CatMotivation.module.css';
import PropTypes from "prop-types";

const NameForm = ({ id, onSuccess }) => {
    const inputRef = useRef(null);
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const nickname = inputRef.current.value;
        const response = await fetch(`/members/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken,
            },
            body: JSON.stringify({ nickname }),
        });

        onSuccess(nickname)
    };

    return (
        <form onSubmit={handleSubmit} className={style.greenContainer}>
            <div className={style.headerText}>
                <p>이름은~</p>
            </div>

            <input ref={inputRef} className={style.input} />

            <button type="submit" className={style.button}>
                입력 완료!
            </button>
        </form>
    );
};

NameForm.propTypes = {
    id: PropTypes.number,
    onSuccess: PropTypes.func
};

export default NameForm;