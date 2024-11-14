import styled, { keyframes } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import iconUrl from '/img/icon.svg?url';
import logoutUrl from '/img/logout.svg?url';
import arrowUrl from '/img/arrow.svg?url';
import arrowupUrl from '/img/arrowup.svg?url';
import closeUrl from '/img/close.svg?url';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogoutClick = () => {
        setIsModalOpen(true);
    };

    const handleConfirmLogout = () => {
        setIsModalOpen(false);
        navigate('/');
    };

    const handleCancelLogout = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <>
            <NavStyle>
                <DivStyle>
                    <Go to={'/main'} ><Logo/></Go>
                    <Go to={'/main/curriculum'}><BtnStyle>이수체계도</BtnStyle></Go>
                    <Go to={'/main/english'}><BtnStyle>영어</BtnStyle></Go>
                    
                    <DropdownContainer ref={dropdownRef}>
                        <BtnStyle onClick={toggleDropdown}>
                            학점
                            <ArrowIcon src={isDropdownOpen ? arrowupUrl : arrowUrl} alt="Arrow" />
                        </BtnStyle>
                        {isDropdownOpen && (
                            <DropdownMenu>
                                <DropdownItem to={'/main/score'}><Icon><img src={iconUrl} alt="Icon" width="10px"/>기본소양</Icon></DropdownItem>
                                <DropdownItem to={'/main/score/msc'}><Icon><img src={iconUrl} alt="Icon" width="10px"/>MSC</Icon></DropdownItem>
                                <DropdownItem to={'/main/score/major'}><Icon><img src={iconUrl} alt="Icon" width="10px"/>전공</Icon></DropdownItem>
                                <DropdownItem to={'/main/score/commonliberal'}><Icon><img src={iconUrl} alt="Icon" width="10px"/>공통교양</Icon></DropdownItem>
                            </DropdownMenu>
                        )}
                    </DropdownContainer>
                    
                    <Go to={'/main/timetable'}><BtnStyle>시간표</BtnStyle></Go>
                </DivStyle>
                <DivStyle>
                    박채현(2022112055) 님
                    <LogoutButton onClick={handleLogoutClick}>
                        <img src={logoutUrl} alt="logout" width="30px"/>
                    </LogoutButton>
                </DivStyle>
            </NavStyle>

            {isModalOpen && (
                <>
                    <Overlay />
                    <Modal>
                        <ModalTop>confirm<img src={closeUrl} alt="close" width="20px"/></ModalTop>
                        <ModalContent>
                            <p>로그아웃 하시겠습니까?</p>
                            <ButtonContainer>
                                <ConfirmButton onClick={handleConfirmLogout}>확인</ConfirmButton>
                                <CancelButton onClick={handleCancelLogout}>취소</CancelButton>
                            </ButtonContainer>
                        </ModalContent>
                    </Modal>
                </>
            )}
        </>
    );
};

export default Navbar;

const NavStyle = styled.nav`
    display: flex;
    padding: 0.2rem 1.7rem;
    color: #F5EBE0;
    background-color: #403935;
    align-items: center;
    justify-content: space-between;
`;

const DivStyle = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
`;

const BtnStyle = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 3rem;
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0.5rem;
    color: ${props => props.color || '#F5EBE0'};
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const Go = styled(Link)`
    text-decoration: none;
    color: ${props => props.color || 'white'};
`;

const DropdownContainer = styled.div`
    position: relative;
`;

const slideDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    padding: 1rem;
    background-color: #ffffff;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 100%;
    animation: ${slideDown} 0.3s ease forwards;
    z-index: 10;
`;

const DropdownItem = styled(Link)`
    display: block;
    padding: 1rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
    &:hover {
        background-color: #f0f0f0;
    }
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const Logo = styled.div`
    width: 187px;
    height: 58px;
    margin: 1rem;
    background-image: url(/img/logo.png);
    background-size: contain;
    background-repeat: no-repeat;
`;

const ArrowIcon = styled.img`
    width: 12px;
`;

const LogoutButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
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
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 11;
    width: 410px;
    height: 295px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const ModalTop = styled.div`
    position: absolute;
    top:0;
    box-sizing: border-box;
    width: 100%;
    height: 15%;
    border-radius: 5px 5px 0 0;
    background-color: #403935;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    justify-content: space-between;
    color: #F5EBE0;
`
const ModalContent = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1rem;
    color: #333;
`;

const ButtonContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
`;

const ConfirmButton = styled.button`
    background-color: #897C75;
    color: white;
    border: none;
    padding: 0.3rem 1rem;
    border-radius: 4px;
    cursor: pointer;
`;

const CancelButton = styled.button`
    background-color: #627893;
    color: white;
    border: none;
    padding: 0.3rem 1rem;
    border-radius: 4px;
    cursor: pointer;
`;
