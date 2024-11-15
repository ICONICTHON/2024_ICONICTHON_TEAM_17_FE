import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import closeUrl from '/img/close.svg?url';
import iconUrl from '/img/icon.svg?url';

const Login = () => {
    const navigate = useNavigate();
    const [modalContent, setModalContent] = useState(null);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [isIdError, setIsIdError] = useState(false);
    const [isPasswordError, setIsPasswordError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsIdError(false);
        setIsPasswordError(false);

        const errors = [];
        if (!id) {
            errors.push("아이디은(는) 필수 입력 항목입니다.");
            setIsIdError(true);
        }
        if (!password) {
            errors.push("비밀번호은(는) 필수 입력 항목입니다.");
            setIsPasswordError(true);
        }

        if (errors.length > 0) {
            setModalContent({
                title: "알림",
                content: "로그인",
                message: errors.join('\n')
            });
            return;
        }

        if (id !== '2022112055' || password !== '1234') {
            setModalContent({
                title: "알림",
                content: "로그인",
                message: "아이디 또는 비밀번호가 올바르지 않습니다."
            });
            setIsIdError(id !== '2022112055');
            setIsPasswordError(password !== '1234');
            return;
        }

        navigate('/main');
    };

    const handleLogoutClick = (content) => {
        setModalContent(content);
    };

    const handleCancelLogout = () => {
        setModalContent(null);
    };

    const handlePrivacyPolicyClick = () => {
        window.location.href = "https://www.dongguk.edu/page/534";
    };

    const handleUsageGuideDownload = () => {
        const link = document.createElement('a');
        link.href = '/file/사용안내.pdf';
        link.download = 'nDRIMS사용안내.pdf';
        link.click();
    };

    const handleCertificateGuideDownload = () => {
        const link = document.createElement('a');
        link.href = '/file/인증서발급안내.pdf';
        link.download = '교내 인증서 신규(재발급) 및 관리 메뉴얼.pdf';
        link.click();
    };

    return (
        <>
            <LogIn>
                <LoginDiv>
                    <Left>
                        <Logo/>
                        <Title>
                            <TitleImg/>
                            학사행정정보시스템
                        </Title>
                        <Form onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                placeholder="nDRIMS ID(학번)을 입력해 주세요."
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                isError={isIdError}
                            />
                            <Input
                                type="password"
                                placeholder="비밀번호를 입력해 주세요."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                isError={isPasswordError}
                            />
                            <div style={{ fontSize: '0.8rem' }}>
                                <label><Check type="checkbox" id="id"/> ID 저장</label>
                            </div>
                            <Submit type="submit">로그인</Submit>
                        </Form>
                        <Address>
                            <Icon><img src={iconUrl} alt="Icon" width="10px"/>서울캠퍼스</Icon><br/>
                            04620 서울특별시 중구 필동로 1길 30 동국대학교<br/>
                            02-2260-3114<br/><br/><br/>
                            <Icon><img src={iconUrl} alt="Icon" width="10px"/>바이오메디캠퍼스</Icon><br/>
                            10326 경기도 고양시 일산동구 동국로32 동국대학교 바이오메디캠퍼스<br/>
                            02-2260-3114
                        </Address>
                    </Left>
                    <Right>
                        <Notice>
                            <h2>Notice</h2>
                            <hr/><br/>
                            <Post1 onClick={() => handleLogoutClick({
                                title: "인증서 문의처",
                                message: "인증서 관련 문의 : 02-2260-3909"
                            })}>𐄂  인증서 문의처</Post1>
                            <Post2 onClick={() => handleLogoutClick({
                                title: "특허사무소 로그인 안내",
                                message: "특허사무소의 대리인의 로그인은 아래 바로가기를 클릭하시기 바랍니다.",
                                linkText: "▶ 특허대리인 로그인 바로가기",
                                linkUrl: "https://support.dongguk.edu/unis/index.do?t=63325A61596D6F7A626B5A45637A5A4E636B4E7661315A3255537436647A3039"
                            })}>𐄂  특허사무소 로그인 안내</Post2>
                            <Post3 onClick={() => handleLogoutClick({
                                title: "nDRIMS 로그인 정책 안내",
                                message: `𐄂 교직원은 중요정보보호를 위하여 인증서 로그인하여야 합니다.\n
𐄂 교직원을 제외한 사용자는 nDRIMS [아이디/비밀번호]로 접속하시면 되며,\n[아이디/비밀번호]를 모르실 경우 로그인화면의 찾기 기능을 활용하시면 됩니다.\n
𐄂 11월 이후 아이디/비밀번호로 로그인 하실경우 2차인증이 적용됩니다. (관련 내용은 추후 공지예정입니다.)\n
𐄂 교내 인증서 로그인 관련 문의 : 서울(02-2260-8877), 의학계열(031-961-7043)`,
                                imgUrl: "/img/unv.png"
                            })}>𐄂  nDRIMS 로그인 정책 안내</Post3>
                        </Notice>
                        <Img/>
                        <Rights>
                            <Rule color="#D93425" onClick={handlePrivacyPolicyClick}>개인정보 처리방침</Rule>
                            <Separator>|</Separator>
                            <Rule onClick={handleUsageGuideDownload}>사용안내</Rule>
                            <Separator>|</Separator>
                            <Rule onClick={handleCertificateGuideDownload}>인증서발급안내</Rule>
                        </Rights>
                        <RightsText>ⓒ 2024 DONGGUK UNIVERSITY. ALL RIGHTS RESERVED.</RightsText>
                    </Right>
                </LoginDiv>
                <Footer src="/img/footer_logo.png"/>
            </LogIn>
            {modalContent && (
                <>
                    <Overlay />
                    <Modal isLoginError={modalContent.content === "로그인"}>
                        <ModalTop isLoginError={modalContent.content === "로그인"}>
                            {modalContent.title}
                            <img src={closeUrl} alt="close" width="20px" onClick={handleCancelLogout} style={{ cursor: 'pointer' }} />
                        </ModalTop>
                        <ModalContent isLoginError={modalContent.content === "로그인"}>
                            <TextContainer isLoginError={modalContent.content === "로그인"}>
                                <p style={{ whiteSpace: "pre-wrap" }}>{modalContent.message}</p>
                            </TextContainer>
                            {modalContent.linkUrl && (
                                <p>
                                    <a href={modalContent.linkUrl} target="_blank" rel="noopener noreferrer">
                                        {modalContent.linkText}
                                    </a>
                                </p>
                            )}
                            {modalContent.imgUrl && <ModalImg src={modalContent.imgUrl} />}
                        </ModalContent>
                        <ButtonContainer>
                            <CancelButton onClick={handleCancelLogout}>닫기</CancelButton>
                        </ButtonContainer>
                    </Modal>
                </>
            )}
        </>
    );
};

export default Login;
const Footer = styled.img`
    position: absolute;
    bottom: 3rem;
`
const Icon = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const Address = styled.div`
    font-size: 12px;
    color: grey;
    padding: 2rem 0;
`
const Separator = styled.span`
    color: #D93425;
`;

const RightsText = styled.div`
    font-size: 11px;
    color: #333;
    margin-left: 1rem;
    position: absolute;
    bottom: 20px;
    font-size: 11px;
`;
const Rule = styled.button`
    background: none;
    border: none;
    color: #D93425;
    font-size: 11px;
    cursor: pointer;
`;

const Rights = styled.p`
    position: absolute;
    bottom: 30px;
    font-size: 11px;
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;
const Input = styled.input`
    display: flex;
    width: 100%;
    margin: 0.5rem 0;
    border: 0.5px solid ${({ isError }) => (isError ? 'red' : 'grey')};
    border-radius: 5px;
    padding: 0.8rem;
    box-sizing: border-box;
    font-size: 0.8rem;
`;

const Form = styled.form`
    margin-top: 1rem;
    width: 100%;
`;
const Check = styled.input`
    width: 18px;
    height: 18px;
    accent-color: white;
    margin: 1rem 0;
    vertical-align: -3px;
    cursor: pointer;
`;

const Submit = styled.button`
    width: 100%;
    border-radius: 5px;
    padding: 1rem;
    border: none;
    background-color: #D93425;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
`;
const Logo = styled.div`
    width: 187px;
    height: 58px;
    background-image: url(/img/logo.png);
    background-size: contain;
    background-repeat: no-repeat;
`;
const Title = styled.div`
    margin-top: 2rem;
    font-weight: bold;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
`;
const TitleImg = styled.div`
    width: 38px;
    height: 40px;
    background-image: url(/img/login_detail.png);
    background-size: cover;
    margin-right: 0.5rem;
`;
const LogIn = styled.div`
    height: 100vh;
    background-image: url(/img/login_bg.jpg);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LoginDiv = styled.div`
    height: 55%;
    width: 38%;
    background-color: white;
    display: flex;
    justify-content: center;
`;
const Left = styled.div`
    height: 100%;
    width: 50%;
    padding: 1.5rem;
`;
const Right = styled.div`
    position: relative;
    height: 100%;
    width: 50%;
    background-color: #F2F1F0;
    display: flex;
    justify-content: center;
`;
const Notice = styled.div`
    width: 80%;
    height: 50%;
    background: white;
    margin-top: 1.5rem;
    z-index: 2;
    border-radius: 10px;
    padding: 1rem;
    font-size: 0.8rem;
`;
const Post1 = styled.div`
    cursor: pointer;
    margin-bottom: 1rem;
    &:hover {
        text-decoration: underline;
    }
`;
const Post2 = styled.div`
    cursor: pointer;
    margin-bottom: 1rem;
    &:hover {
        text-decoration: underline;
    }
`;
const Post3 = styled.div`
    cursor: pointer;
    margin-bottom: 1rem;
    &:hover {
        text-decoration: underline;
    }
`;
const Img = styled.div`
    width: 280px;
    height: 280px;
    background-size: cover;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-image: url(/img/logo_detail.png);
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
`;

const Modal = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 11;
    width: ${({ isLoginError }) => (isLoginError ? '410px' : '810px')};
    height: ${({ isLoginError }) => (isLoginError ? '295px' : '745px')};
    display: flex;
    justify-content: ${({ isLoginError }) => (isLoginError ? 'center' : 'flex-start')};
    align-items: ${({ isLoginError }) => (isLoginError ? 'center' : 'flex-start')};
`;
const ModalTop = styled.div`
    position: absolute;
    top: 0;
    box-sizing: border-box;
    width: 100%;
    height: ${({ isLoginError }) => (isLoginError ? '15%' : '8%')};
    border-radius: 5px 5px 0 0;
    background-color: #403935;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    justify-content: space-between;
    color: #F5EBE0;
`;
const ModalContent = styled.div`
    font-size: 1rem;
    color: #333;
    padding-top: ${({ isLoginError }) => (isLoginError ? '0' : '8%')};
    height: ${({ isLoginError }) => (isLoginError ? '100%' : '92%')};
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${({ isLoginError }) => (isLoginError ? 'center' : 'flex-start')};
    justify-content: ${({ isLoginError }) => (isLoginError ? 'center' : 'flex-start')};
`;

const TextContainer = styled.div`
    width: ${({ isLoginError }) => (isLoginError ? 'auto' : '100%')};
    text-align: ${({ isLoginError }) => (isLoginError ? 'center' : 'left')};
    padding-left: ${({ isLoginError }) => (isLoginError ? '0' : '2rem')};
    margin-bottom: 1rem;
`;


const ModalImg = styled.img`
    width: 780px;
    height: 400px;
`;

const ButtonContainer = styled.div`
    position: absolute;
    bottom: 1rem;
    display: flex;
    justify-content: center;
    width: 100%; /* Centers the button horizontally */
    gap: 1rem;
`;

const CancelButton = styled.button`
    background-color: #627893;
    color: white;
    border: none;
    padding: 0.3rem 1rem;
    border-radius: 4px;
    cursor: pointer;
`;
