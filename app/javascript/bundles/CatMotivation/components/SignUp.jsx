import React, { useEffect, useState } from 'react';
import Cat from './Cat';
import NameForm from './NameForm'
import PropTypes from "prop-types";

const SignUp = ({ id, nickname, setNickname }) => {
    const [level, setLevel] = useState(0);
    const addLevel = () => {
        setLevel(prevLevel => prevLevel + 1);
    }

    const setNicknameAndAddLevel = (nickname) => {
        addLevel()
        setNickname(nickname)
    }

    useEffect(() => {
        if (level === 0 || level === 2 || level === 3 || level === 6 || level === 7) {
            const timer = setTimeout(() => {
                addLevel();
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [level]);




    switch (level) {
        case 0:
            return <Cat title={'냥기부여'} footerText={['냥이가 전해주는 1일 1 동기부여']}/>
        case 1:
            return <Cat headerText={['안녕하세요.', '제 이름은 동키에요.']} buttonText={'안녕 동키야'}
                        onClick={addLevel}/>
        case 2:
            return <Cat headerText={['만나서 반가워요.']}/>
        case 3:
            return <Cat headerText={['언제든 든든하게', '동기부여 해드릴게요.']}/>
        case 4:
            return <Cat headerText={['더 친근하게 부르고 싶은데,', '이름을 여쭤봐도 될까요?']} buttonText={'응!'} onClick={addLevel}/>
        case 5:
            return <NameForm id={id} onSuccess={setNicknameAndAddLevel}/>
        case 6:
            return <Cat headerText={[`우와 ${nickname}님`, '다시 한 번 만나서 반가워요.']}/>
        case 7:
            return <Cat bg={'brown'} headerText={['저는 하루에 한번씩', '행운의 메시지를 가지고 올 거예요.']}/>
        case 8:
            return <Cat bg={'brown'} headerText={[`${nickname}님이 고른 키워드에`, '따라서 제 성격이 조금씩 달라져요 ㅎㅎ.', '괜찮겠죠?']} buttonText={'응! 괜찮아'} onClick={addLevel}/>
        case 9:
            return <Cat bg={'brown'} headerText={['다행이네요! 맞다, 키워드는 하루에 1번만', '선택할 수 있다는 것을 꼭 기억해주세요.']} buttonText={'오케이'} onClick={() => {}}/>
        default:
            return <Cat/>
    }
};

SignUp.propTypes = {
    id: PropTypes.number,
    nickname: PropTypes.string,
    setNickname: PropTypes.func
}

export default SignUp;