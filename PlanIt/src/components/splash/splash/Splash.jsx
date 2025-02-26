import * as splash from './splash.js'
import Button from "../../commons/Button/index.js";

const Splash = ({ selectedLanguage, onLanguageSelect, onStart }) => {
    const languages = [
        { code: 'ko', name: '한국어', flag: '🇰🇷' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'zh', name: '中文', flag: '🇨🇳' },
        { code: 'ja', name: '日本語', flag: '🇯🇵' },
    ];


    return (
        <splash.ModalContent>
            <splash.ModalTitle>선호하는 언어가 있으신가요?</splash.ModalTitle>
            <splash.ModalSubTitle>Choose your preferred language</splash.ModalSubTitle>

            {languages.map((language) => (
                <splash.LanguageOption
                    key={language.code}
                    onClick={() => onLanguageSelect(language.code)}
                    selected={selectedLanguage === language.code}
                >
                    <splash.FlagOption>
                        <splash.Flag>{language.flag}</splash.Flag>
                        {language.name}
                    </splash.FlagOption>
                    <splash.RadioButton selected={selectedLanguage === language.code} />
                </splash.LanguageOption>
            ))}

            <Button variant="primary" size="large" fullWidth onClick={onStart}>
                시작하기
            </Button>
        </splash.ModalContent>
    );
};

export default Splash;
