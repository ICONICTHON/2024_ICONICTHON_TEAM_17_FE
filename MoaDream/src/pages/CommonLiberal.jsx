import styled from "styled-components";
import iconUrl from '/img/icon.svg?url';

const CommonLiberal = () => {
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
                                <TableHeader1>수강 학점</TableHeader1>
                                <TableHeader1>수강 요구 학점</TableHeader1>
                            </tr>
                            <tr>
                                <TableData1>충족</TableData1>
                                <TableData1>15</TableData1>
                                <TableData1>14 ~ 16</TableData1>
                            </tr>
                        </tbody>
                    </Table>
                </Section>
                <Icon>
                    <img src={iconUrl} alt="Icon" />
                    <h1>공통 교양</h1>
                </Icon>
                <hr />
                <Section>
                    <Table>
                        <tbody>
                            <tr>
                                <TableHeader>영역</TableHeader>
                                <TableHeader>교과목명</TableHeader>
                                <TableHeader>학점</TableHeader>
                                <TableHeader>교수명</TableHeader>
                            </tr>
                            <tr>
                                <TableData>글쓰기</TableData>
                                <TableData>기술보고서작성및발표</TableData>
                                <TableData>3</TableData>
                                <TableData>조미라</TableData>
                            </tr>
                            <tr>
                                <TableData>대학탐구</TableData>
                                <TableData>커리어디자인</TableData>
                                <TableData>1</TableData>
                                <TableData>우혜인</TableData>
                            </tr>
                            <tr>
                                <TableData>자아성찰</TableData>
                                <TableData>자아와명상1</TableData>
                                <TableData>1</TableData>
                                <TableData>안병희</TableData>
                            </tr>
                            <tr>
                                <TableData>영어</TableData>
                                <TableData>EAS1</TableData>
                                <TableData>2</TableData>
                                <TableData>김명숙</TableData>
                            </tr>
                            <tr>
                                <TableData>자아성찰</TableData>
                                <TableData>불교와인간</TableData>
                                <TableData>2</TableData>
                                <TableData>임윤경</TableData>
                            </tr>
                            <tr>
                                <TableData>영어</TableData>
                                <TableData>EAS2</TableData>
                                <TableData>2</TableData>
                                <TableData>사무엘맥도널드</TableData>
                            </tr>
                            <tr>
                                <TableData>리더십</TableData>
                                <TableData>테크노앙트프레너십과리더십</TableData>
                                <TableData>2</TableData>
                                <TableData>성창수</TableData>
                            </tr>
                            <tr>
                                <TableData>리더십</TableData>
                                <TableData>테크노앙트프레너십과리더십</TableData>
                                <TableData>2</TableData>
                                <TableData>성창수</TableData>
                            </tr>
                        </tbody>
                    </Table>
                </Section>
            </Container>
        </>
    );
};

export default CommonLiberal;

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
const TableHeader = styled.th`
    width: 25%;
    padding: 1rem;
    background-color: #E3DED1;
    color: #333;
    font-weight: bold;
    border: 1px solid #ccc;
`;

const TableData = styled.td`
    width: 25%;
    padding: 1rem;
    border: 1px solid #ccc;
    color: #555;
`;