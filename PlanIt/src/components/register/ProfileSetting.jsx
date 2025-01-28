import styled from '@emotion/styled'
import {ChevronLeft} from "lucide-react";
import { useState } from "react";
import profile from '../../assets/profile.png'
import {useNavigate} from "react-router-dom";

const Container = styled.div`
    padding: 20px;
    max-width: 500px;
    margin: -70px auto;
    
`;

const FormHeader = styled.div`
    display: flex;
    gap: 40px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
`;

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

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
    background-color: rgb(243,243,243);
    margin-bottom: 16px;
`;

const ProfileWrapper = styled.div`
    position: relative;
`;

const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #3b82f6;
`;

const AddButton = styled.button`
    position: absolute;
    bottom: 50px;
    right: -20px;
    border: none;
    background: #dbebff;
    color: #3b82f6;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

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
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
`;

const Select = styled.select`
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
`;

const GenderContainer = styled.div`
    display: flex;
    gap: 16px;
`;

const GenderLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #3b82f6;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 16px;

    &:hover {
        background-color: #2563eb;
    }
`;

const ProfileSetting = () => {
    const [nickname, setNickname] = useState("");
    const [mbti, setMbti] = useState("ENTJ");
    const [gender, setGender] = useState("남성");
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/welcome");
    }

    return (
        <Container>
            <FormHeader>
                <Header>
                    <BackButton>
                        <ChevronLeft size={20} color="#4B5563" />
                    </BackButton>
                </Header>

                <Title>회원가입</Title>
            </FormHeader>

            <ProfileContainer>
                <ProfileWrapper>
                    <ProfileImage
                        src={profile}
                        alt="Profile"
                    />
                    <AddButton>+</AddButton>
                </ProfileWrapper>
            </ProfileContainer>

            <div>
                <Label>닉네임</Label>
                <Input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="글자 수 제한"
                />
            </div>

            <div style={{ marginTop: "16px" }}>
                <Label>MBTI</Label>
                <Select value={mbti} onChange={(e) => setMbti(e.target.value)}>
                    {["ENTJ", "INTJ", "ENTP", "INFJ", "ENFP", "INFP"].map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </Select>
            </div>

            <div style={{ marginTop: "16px" }}>
                <Label>성별</Label>
                <GenderContainer>
                    <GenderLabel>
                        <input
                            type="radio"
                            value="남성"
                            checked={gender === "남성"}
                            onChange={() => setGender("남성")}
                        />
                        남성
                    </GenderLabel>
                    <GenderLabel>
                        <input
                            type="radio"
                            value="여성"
                            checked={gender === "여성"}
                            onChange={() => setGender("여성")}
                        />
                        여성
                    </GenderLabel>
                </GenderContainer>
            </div>

            <SubmitButton onClick={handleSubmit}>가입하기</SubmitButton>
        </Container>
    )
}

export default ProfileSetting;