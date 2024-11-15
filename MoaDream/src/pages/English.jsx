import styled from "styled-components";
import iconUrl from '/img/icon.svg?url';

const English = () => {
    return (
        <>
            <Container>
                <Icon>
                    <img src={iconUrl} alt="Icon" />
                    <h1>학점 현황</h1>
                </Icon>
                <hr />
                <Section>
                    <Table>
                        <tbody>
                            <tr>
                                <TableHeader1>조건 충족 여부</TableHeader1>
                                <TableHeader1>수강 강좌 수</TableHeader1>
                                <TableHeader1>수강 요구 강좌 수</TableHeader1>
                            </tr>
                            <tr>
                                <TableData1>충족</TableData1>
                                <TableData1>4</TableData1>
                                <TableData1>4</TableData1>
                            </tr>
                        </tbody>
                    </Table>
                </Section>
                <Icon>
                    <img src={iconUrl} alt="Icon" />
                    <h1>영어 강의</h1>
                </Icon>
                <hr />
                <Section>
                    <Table>
                        <tbody>
                            <tr>
                                <TableHeader>교과목명</TableHeader>
                                <TableHeader>이수구분</TableHeader>
                            </tr>
                            <tr>
                                <TableData>객체지향언어와실습</TableData>
                                <TableData>전공</TableData>
                            </tr>
                            <tr>
                                <TableData>컴퓨터알고리즘및실습</TableData>
                                <TableData>전공</TableData>
                            </tr>
                            <tr>
                                <TableData>EAS1</TableData>
                                <TableData>공통교양</TableData>
                            </tr>
                            <tr>
                                <TableData>EAS2</TableData>
                                <TableData>공통교양</TableData>
                            </tr>
                        </tbody>
                    </Table>
                </Section>
                <Icon>
                    <img src={iconUrl} alt="Icon" />
                    <h1>외국어 시험</h1>
                </Icon>
                <hr />
                <Section>
                    <Table>
                            <tbody>
                                <tr>
                                    <TableHeader>자격증명</TableHeader>
                                    <TableHeader>점수</TableHeader>
                                    <TableHeader>취득일</TableHeader>
                                </tr>
                                <tr>
                                    <TableData>TOEIC</TableData>
                                    <TableData>885</TableData>
                                    <TableData>2023-11-14</TableData>
                                </tr>
                            </tbody>
                        </Table>
                </Section>
            </Container>
        </>
    );
};

export default English;

const Container = styled.div`
    box-sizing: border-box;
    height: 90vh;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 3rem;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    font-size: 1.2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
    width: 33.33%;
    padding: 1rem;
    background-color: #E3DED1;
    color: #333;
    font-weight: bold;
    border: 1px solid #ccc;
`;

const TableData = styled.td`
    width: 33.33%;
    padding: 1rem;
    border: 1px solid #ccc;
    color: #555;
`;
const TableHeader1 = styled.th`
    width: 12.5%;
    padding: 1rem;
    background-color: #E3DED1;
    color: #333;
    font-weight: bold;
    border: 1px solid #ccc;
`;

const TableData1 = styled.td`
    width: 12.5%;
    padding: 1rem;
    border: 1px solid #ccc;
    color: #555;
`;