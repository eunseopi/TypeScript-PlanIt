import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Button from '../../commons/Button/Button.jsx'
import * as inquiry from './inquiry.js'
import {ChevronDown} from "lucide-react";
import {useNavigate} from "react-router-dom";

const Inquiry = ({
    email,
    handleChangeEmail
}) => {
    const [formData, setFormData] = useState({
        inquiry: '',
        category: ''
    });
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const categories = [
        { id: 1, name: '계정 찾기' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCategorySelect = (categoryName) => {
        setFormData(prevState => ({
            ...prevState,
            category: categoryName
        }));
        setIsOpen(false);
    };

    const handleBackBtnClick = () => {
        navigate(-1);
    }

    return (
        <inquiry.FormContainer>
            <inquiry.FormHeader>
                <inquiry.Header>
                    <inquiry.BackButton>
                        <ChevronLeft onClick={handleBackBtnClick} size={20} color="#4B5563" />
                    </inquiry.BackButton>
                </inquiry.Header>
                <inquiry.Title>문의하기</inquiry.Title>
            </inquiry.FormHeader>

            <form>
                <inquiry.FormGroup>
                    <inquiry.Label>이메일주소</inquiry.Label>
                    <inquiry.Input
                        type="email"
                        id="login-email"
                        value={email}
                        placeholder="해당 주소로 답변을 보내드립니다."
                        onChange={handleChangeEmail}
                        required
                    />
                </inquiry.FormGroup>
            </form>

            <form>
                <inquiry.FormGroup>
                    <inquiry.Label>카테고리</inquiry.Label>
                    <inquiry.SelectWrapper>
                        <inquiry.SelectButton type="button" style={{color: "#aab1bb"}}onClick={() => setIsOpen(!isOpen)}>
                            {formData.category || "카테고리를 선택해주세요"}
                            <ChevronDown size={20} color="#4B5563" />
                        </inquiry.SelectButton>
                        {isOpen && (
                            <inquiry.DropdownList>
                                {categories.map((category) => (
                                    <inquiry.DropdownItem
                                        key={category.id}
                                        onClick={() => handleCategorySelect(category.name)}
                                    >
                                        {category.name}
                                    </inquiry.DropdownItem>
                                ))}
                            </inquiry.DropdownList>
                        )}
                    </inquiry.SelectWrapper>
                </inquiry.FormGroup>
            </form>

            <form>
                <inquiry.FormGroup>
                    <inquiry.Label>문의내용</inquiry.Label>
                    <inquiry.Input
                        id="inquiry"
                        name="inquiry"
                        type="text"
                        placeholder="문의하실 내용을 입력해주세요"
                        value={formData.inquiry}
                        onChange={handleChange}
                    />
                </inquiry.FormGroup>
            </form>

            <inquiry.ButtonGroup>
                <Button variant="secondary" size="large" ninetyWidth type="submit"> 뒤로가기 </Button>
                <Button variant="primary" size="large" ninetyWidth type="submit"> 전송하기 </Button>
            </inquiry.ButtonGroup>
        </inquiry.FormContainer>
    );
};

export default Inquiry;