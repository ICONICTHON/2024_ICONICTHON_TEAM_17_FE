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
            <hr/>
            <Section>
                <Table>
                    <tbody>
                        <tr>
                            <TableHeader>취득학점</TableHeader>
                            <TableData>80/130</TableData>
                            <TableHeader>평점평균</TableHeader>
                            <TableData>3.8/2.0</TableData>
                            <TableHeader>외국어시험</TableHeader>
                            <TableData>80/130</TableData>
                        </tr>
                        <tr>
                            <TableHeader>영어강의</TableHeader>
                            <TableData>2/4</TableData>
                            <TableHeader>전공선택</TableHeader>
                            <TableData>21/84</TableData>
                            <TableHeader>전공필수</TableHeader>
                            <TableData>17/17</TableData>
                        </tr>
                        <tr>
                            <TableHeader>MSC</TableHeader>
                            <TableData>--/--</TableData>
                            <TableHeader>기본소양</TableHeader>
                            <TableData>9/9</TableData>
                            <TableHeader>공통교양</TableHeader>
                            <TableData>--/--</TableData>
                        </tr>
                        <tr>
                            <TableHeader>일반교양</TableHeader>
                            <TableData>--/--</TableData>
                            <TableHeader></TableHeader>
                            <TableData></TableData>
                            <TableHeader></TableHeader>
                            <TableData></TableData>
                        </tr>
                    </tbody>
                </Table>
            </Section>

            {/* Add more sections with table data as needed */}
        </Container>
    );
};

export default Main;

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
    text-align: left;
    padding: 1rem;
    background-color: #eee;
    color: #333;
    font-weight: bold;
    border: 1px solid #ccc;
`;

const TableData = styled.td`
    padding: 1rem;
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
