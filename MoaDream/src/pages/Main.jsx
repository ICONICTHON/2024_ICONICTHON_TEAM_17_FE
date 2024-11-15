import styled from "styled-components";
import iconUrl from '/img/icon.svg?url';

const Main = () => {
    return (
        <Container>
            <Icon>
                <img src={iconUrl} alt="Icon" />
                <h1>학생 정보</h1>
            </Icon>
            <hr />
            <Section>
                <Table>
                    <tbody>
                        <tr>
                            <ProfileCell rowSpan="5">
                                <ProfileImage src="/img/student.jpg" alt="Profile" />
                            </ProfileCell>
                            <TableHeader>학번/성명</TableHeader>
                            <TableData>2022112055 / 박채현</TableData>
                            <TableHeader>성명(영문)</TableHeader>
                            <TableData>PARK CHAEHYUN</TableData>
                        </tr>
                        <tr>
                            <TableHeader>학생구분</TableHeader>
                            <TableData>본교생(학생)</TableData>
                            <TableHeader>학위과정</TableHeader>
                            <TableData>학사과정 3학년 가진급 3학년</TableData>
                        </tr>
                        <tr>
                            <TableHeader>입학구분</TableHeader>
                            <TableData>본교생(학생)</TableData>
                            <TableHeader>학과전공</TableHeader>
                            <TableData>공과대학 컴퓨터정보통신공학부</TableData>
                        </tr>
                        <tr>
                            <TableHeader>입학일</TableHeader>
                            <TableData>2022-03-02(신입학)</TableData>
                            <TableHeader>국적</TableHeader>
                            <TableData>대한민국</TableData>
                        </tr>
                    </tbody>
                </Table>
            </Section>
            <Icon>
                <img src={iconUrl} alt="Icon" />
                <h1>졸업 요건</h1>
            </Icon>
            <hr />
            <Section>
                <Table>
                    <tbody>
                        <tr>
                            <TableHeader>취득 학점</TableHeader>
                            <TableData color="#e8d8d8"><strong>93</strong> / 130</TableData>
                            <TableHeader>평점 평균</TableHeader>
                            <TableData><strong>4.2</strong> / 2.0</TableData>
                        </tr>
                        <tr>
                            <TableHeader>외국어시험</TableHeader>
                            <TableData><strong>885</strong> / 700</TableData>
                            <TableHeader>영어 강의</TableHeader>
                            <TableData><strong>4</strong> / 4</TableData>
                        </tr>
                        <tr>
                            <TableHeader>전공선택</TableHeader>
                            <TableData color="#e8d8d8"><strong>4</strong> / 5</TableData>
                            <TableHeader>전공필수</TableHeader>
                            <TableData color="#e8d8d8"><strong>5</strong> / 7</TableData>
                        </tr>
                        <tr>
                            <TableHeader>MSC</TableHeader>
                            <TableData color="#e8d8d8"><strong>29</strong> / 30</TableData>
                            <TableHeader>기본소양</TableHeader>
                            <TableData><strong>6</strong> / 6</TableData>
                        </tr>
                        <tr>
                            <TableHeader>공통교양</TableHeader>
                            <TableData><strong>15</strong> / 14</TableData>
                            <TableHeader>졸업논문</TableHeader>
                            <TableData color="#e8d8d8"><strong>미수강</strong> / 캡스톤 디자인</TableData>
                        </tr>
                    </tbody>
                </Table>
            </Section>
        </Container>
    );
};

export default Main;

// 스타일드 컴포넌트

const Container = styled.div`
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    padding: 1rem 2rem;
    overflow-y: auto;
`;

const Icon = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem 0;
`;

const Section = styled.div`
    margin-bottom: 3rem;
    background: #f9f9f9;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHeader = styled.th`
    font-size: 1.2rem;
    text-align: left;
    padding: 1rem;
    background-color: ${props => props.color || '#E3DED1'};
    color: #333;
    font-weight: bold;
    border: 1px solid #ccc;
`;

const TableData = styled.td`
    font-size: 1.1rem;
    padding: 1rem;
    background-color: ${props => props.color || 'transparent'};
    border: 1px solid #ccc;
    color: #555;
`;

const ProfileCell = styled.td`
    width: 200px;
    height: 200px;
    padding: 0;
    border: 1px solid #ccc;
`;

const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;
