import styled from '@emotion/styled';
import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';


const FormContainer = styled.div`
    padding: 20px;
    max-width: 500px;
    margin: -70px auto;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
`;

const FormHeader = styled.div`
    display: flex;
    gap: 40px;
`

const BackButton = styled.button`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EFF6FF;
    border: none;
    border-radius: 50%;
    cursor: pointer;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 42px;
`;

const FormGroup = styled.div`
    margin-bottom: 20px;
`

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    
    &::after {
        content: '*';
        color: #f00;
        margin-left: 2px;
    }
`

const Input = styled.input`
    width: 90%;
    padding: 15px;
    border: 1px solid #E5E7EB;
    border-radius: 50px;
    font-size: 14px;
    
    &::placeholder {
        color: #9CA3AF;
    }
`

const CheckboxGroup = styled.div`
    margin-top: 30px;
`

const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 14px;
    cursor: pointer;
`

const Checkbox = styled.input`
    margin-right: 8px;
`

const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #3B82F6;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
`


const BasicInform = ({ onNext }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        passwordConfirm: '',
        termsAgreed: false,
        privacyAgreed: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(formData);
    }


    return (
        <FormContainer>
            <FormHeader>
                <Header>
                    <BackButton>
                        <ChevronLeft size={20} color="#4B5563" />
                    </BackButton>
                </Header>
                <Title>회원가입</Title>
            </FormHeader>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="name">이름</Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="성명을 입력해주세요"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </form>

                <form onSubmit={handleSubmit}>
                    <FormGroup>
                    <Label htmlFor="phone">휴대폰 번호</Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="-없이 입력"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </form>

                <form onSubmit={handleSubmit}>
                    <FormGroup>
                    <Label htmlFor="email">이메일 주소</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="abc@naver.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    </FormGroup>
                </form>


                <form onSubmit={handleSubmit}>
                    <FormGroup>
                    <Label htmlFor="password">비밀번호</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="비밀번호 조합 설정"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    </FormGroup>
                </form>

                <form onSubmit={handleSubmit}>
                    <FormGroup>
                    <Label htmlFor="passwordConfirm">비밀번호</Label>
                    <Input
                        id="passwordConfirm"
                        name="passwordConfirm"
                        type="password"
                        placeholder="비밀번호를 다시 입력해주세요"
                        value={formData.passwordConfirm}
                        onChange={handleChange}
                    />
                    </FormGroup>
                </form>

                <CheckboxGroup>
                    <CheckboxLabel>
                        <Checkbox
                            type="checkbox"
                            name="termsAgreed"
                            checked={formData.termsAgreed}
                            onChange={handleSubmit}
                        />
                        [필수] 이용약관 동의
                    </CheckboxLabel>
                    <CheckboxLabel>
                        <Checkbox
                            type="checkbox"
                            name="privacyAgreed"
                            checked={formData.privacyAgreed}
                            onChange={handleSubmit}
                        />
                        [필수] 개인정보 수집 및 이용동의
                    </CheckboxLabel>
                </CheckboxGroup>

            <Button onClick={onNext} type="submit"> 다음으로 </Button>
        </FormContainer>
    )
}

export default BasicInform