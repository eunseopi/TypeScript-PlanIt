import Button from "../../commons/Button";
import Lock from '../../../assets/auth/pw.png'
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
`

const ContentsWrapper = styled.div`
    min-height: 52vh;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 40px;
    text-align: center;

    img {
        width: 120px; 
        margin: 0 auto;
        margin-bottom: 60px;
    }

    h2 {
        font-size: 32px;
        font-weight: 700;
        line-height: 1.4;
    }

    div {
        margin-top: 8px;
        font-size: 18px;
        font-weight: 500;
    }
`

const PasswordChanged = ({ onReturn }) => {
    return(
        <Container>
            <ContentsWrapper>
                <img src={Lock} />
                <h2>비밀번호 변경 완료</h2>
                <div>비밀번호가 성공적으로 교체되었습니다.</div>
            </ContentsWrapper>
            <Button type='button' variant='primary' size='large' fullWidth onClick={onReturn}>로그인으로 돌아가기</Button>
        </Container>
    )
}

export default PasswordChanged;