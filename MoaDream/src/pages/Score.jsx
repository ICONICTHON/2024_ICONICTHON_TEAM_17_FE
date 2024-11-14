import styled from "styled-components";
import iconUrl from '/img/icon.svg?url';

const Score = () => {
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
                                <TableHeader1>영역</TableHeader1>
                                <TableHeader1>대학생활탐구</TableHeader1>
                                <TableHeader1>자아성찰</TableHeader1>
                                <TableHeader1>글쓰기</TableHeader1>
                                <TableHeader1>리더십</TableHeader1>
                                <TableHeader1>영어</TableHeader1>
                                <TableHeader1>세미나</TableHeader1>
                                <TableHeader1>합계</TableHeader1>
                            </tr>
                            <tr>
                                <TableData1>학점</TableData1>
                                <TableData1>1</TableData1>
                                <TableData1>4</TableData1>
                                <TableData1>3</TableData1>
                                <TableData1>2</TableData1>
                                <TableData1>4</TableData1>
                                <TableData1>3</TableData1>
                                <TableData1>17</TableData1>
                            </tr>
                        </tbody>
                    </Table>
                </Section>
                <Icon>
                    <img src={iconUrl} alt="Icon" />
                    <h1>기본 소양</h1>
                </Icon>
                <hr />
                <Section>
                    <Table>
                        <tbody>
                            <tr>
                                <TableHeader>교과목명</TableHeader>
                                <TableHeader>학점</TableHeader>
                                <TableHeader>비고</TableHeader>
                            </tr>
                            <tr>
                                <TableData>기술창조와특허</TableData>
                                <TableData>3</TableData>
                                <TableData></TableData>
                            </tr>
                            <tr>
                                <TableData>공학경제</TableData>
                                <TableData>3</TableData>
                                <TableData>1학년 수강신청 불가</TableData>
                            </tr>
                            <tr>
                                <TableData>공학윤리</TableData>
                                <TableData>3</TableData>
                                <TableData></TableData>
                            </tr>
                        </tbody>
                    </Table>
                </Section>
            </Container>
        </>
    );
};

export default Score;

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
    background-color: #f2f2f2;
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
    background-color: #f2f2f2;
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