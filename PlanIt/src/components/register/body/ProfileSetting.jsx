import {ChevronLeft} from "lucide-react";
import { useState } from "react";
import profile from '../../../assets/profile.png'
import {useNavigate} from "react-router-dom";
import Button from '../../commons/Button/Button.jsx'
import * as profileSetting from './styles/profileSetting_style.js'



const ProfileSetting = () => {
    const [nickname, setNickname] = useState("");
    const [mbti, setMbti] = useState("ENTJ");
    const [gender, setGender] = useState("남성");
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/welcome");
    }

    return (
        <profileSetting.Container>
            <profileSetting.FormHeader>
                <profileSetting.Header>
                    <profileSetting.BackButton>
                        <ChevronLeft size={20} color="#4B5563" />
                    </profileSetting.BackButton>
                </profileSetting.Header>

                <profileSetting.Title>회원가입</profileSetting.Title>
            </profileSetting.FormHeader>

            <profileSetting.ProfileContainer>
                <profileSetting.ProfileWrapper>
                    <profileSetting.ProfileImage
                        src={profile}
                        alt="Profile"
                    />
                    <profileSetting.AddButton>+</profileSetting.AddButton>
                </profileSetting.ProfileWrapper>
            </profileSetting.ProfileContainer>

            <div>
                <profileSetting.Label>닉네임</profileSetting.Label>
                <profileSetting.Input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="글자 수 제한"
                />
            </div>

            <div style={{ marginTop: "16px" }}>
                <profileSetting.Label>MBTI</profileSetting.Label>
                <profileSetting.Select value={mbti} onChange={(e) => setMbti(e.target.value)}>
                    {["ENTJ", "INTJ", "ENTP", "INFJ", "ENFP", "INFP"].map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </profileSetting.Select>
            </div>

            <div style={{ marginTop: "16px" }}>
                <profileSetting.Label>성별</profileSetting.Label>
                <profileSetting.GenderContainer>
                    <profileSetting.GenderLabel>
                        <input
                            type="radio"
                            value="남성"
                            checked={gender === "남성"}
                            onChange={() => setGender("남성")}
                        />
                        남성
                    </profileSetting.GenderLabel>
                    <profileSetting.GenderLabel>
                        <input
                            type="radio"
                            value="여성"
                            checked={gender === "여성"}
                            onChange={() => setGender("여성")}
                        />
                        여성
                    </profileSetting.GenderLabel>
                </profileSetting.GenderContainer>
            </div>

            <Button type="submit" variant="primary" size="large" fullWidth onClick={handleSubmit}>가입하기</Button>
        </profileSetting.Container>
    )
}

export default ProfileSetting;