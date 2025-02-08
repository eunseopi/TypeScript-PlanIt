import Input from "../../commons/Input";
import Button from "../../commons/Button";
import { useState } from "react";
import styled from "@emotion/styled";

const FormWrapper = styled.div`
    min-height: 53.8vh;
`

const ChangePassword = ({ email, onNext}) => {
    const [newPassword,setNewPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({password:'', confirmPassword:''});
    

    // 비밀번호 조합체크
    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Za-z])(?=.*[!@#$%^&*(),.?":{}|<>0-9]).{10,}$/;
        return regex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 에러 초기화
        setErrors({password:'', confirmPassword:''});

        let hasError = false;
        const newErrors = {};
        
        if(!validatePassword(newPassword)) {
            newErrors.password = '비밀번호는 10자 이상이며 영문, 특수문자, 숫자 중 2가지 이상을 포함해야 합니다.';
            hasError = true;
        } 
        
        if (newPassword !== confirmPassword) {
            newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.'
            hasError = true;
        } 
        
        if (hasError) {
            setErrors(newErrors); // 에러가 있을 때 상태 업데이트
        } else {
            onNext(); // 없을 때 다음 단계로 진행
        }
    }

    return(
        <>
            <form noValidate onSubmit={handleSubmit}>
                <FormWrapper>
                    <Input 
                        id='pw-password'
                        label='새비밀번호 입력'
                        type='password'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder='10자 이상 영문,특수문자,숫자 중 2가지 조합'
                        hasError={!!errors.password} // 에러가 있으면 스타일 적용
                        error={errors.password}
                        required
                    />
                    <Input 
                        id='pw-confirm'
                        label='새비밀번호 확인'
                        type='password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder='입력하신 비밀번호를 다시 입력해주세요.'
                        hasError = {!!errors.confirmPassword} // 에러가 있으면 스타일 적용
                        error={errors.confirmPassword}
                        required
                    />
                </FormWrapper>
                <Button type='submit' variant='primary' size='large' fullWidth>변경하기 </Button>
            </form>
        </>
    )
}

export default ChangePassword;