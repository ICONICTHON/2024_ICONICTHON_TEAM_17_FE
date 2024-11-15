import styled from "styled-components";
import iconUrl from '/img/icon.svg?url';

const Major = () => {
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
                                <TableHeader1>전공 필수</TableHeader1>
                                <TableHeader1>전공 설계 선택 필수</TableHeader1>
                                <TableHeader1>취득 학점</TableHeader1>
                                <TableHeader1>취득 요구 학점</TableHeader1>
                            </tr>
                            <tr>
                                <TableData1>미충족</TableData1>
                                <TableData1>미수강</TableData1>
                                <TableData1>수강</TableData1>
                                <TableData1>45</TableData1>
                                <TableData1>60</TableData1>
                            </tr>
                        </tbody>
                    </Table>
                </Section>
                <Icon>
                    <img src={iconUrl} alt="Icon" />
                    <h1>전공 필수</h1>
                </Icon>
                <hr />
                <Section>
                    <Table>
                        <tbody>
                            <tr>
                                <TableHeader>교과목명</TableHeader>
                                <TableHeader>학점</TableHeader>
                                <TableHeader>교수명</TableHeader>
                            </tr>
                            <tr>
                                <TableData>어드벤처디자인</TableData>
                                <TableData>3</TableData>
                                <TableData>김은정</TableData>
                            </tr>
                            <tr>
                                <TableData>자료구조와실습</TableData>
                                <TableData>3</TableData>
                                <TableData>임민중</TableData>
                            </tr>
                            <tr>
                                <TableData>컴퓨터구성</TableData>
                                <TableData>3</TableData>
                                <TableData>김양우</TableData>
                            </tr>
                            <tr>
                                <TableData>신호와시스템</TableData>
                                <TableData>3</TableData>
                                <TableData>류철</TableData>
                            </tr>
                            <tr>
                                <TableData>통신이론및실험</TableData>
                                <TableData>3</TableData>
                                <TableData>임대운</TableData>
                            </tr>
                        </tbody>
                    </Table>
                </Section>
                <Icon>
                    <img src={iconUrl} alt="Icon" />
                    <h1>전공 선택</h1>
                </Icon>
                <hr />
                <Section>
                    <Table>
                        <tbody>
                            <tr>
                                <TableHeader>교과목명</TableHeader>
                                <TableHeader>학점</TableHeader>
                                <TableHeader>이수학년</TableHeader>
                            </tr>
                            <tr>
                                <TableData>객체지향언어와실습</TableData>
                                <TableData>3</TableData>
                                <TableData>이유철</TableData>
                            </tr>
                            <tr>
                                <TableData>컴퓨터알고리즘및실습</TableData>
                                <TableData>3</TableData>
                                <TableData>김웅섭</TableData>
                            </tr>
                            <tr>
                                <TableData>운영체제</TableData>
                                <TableData>3</TableData>
                                <TableData>김양우</TableData>
                            </tr>
                            <tr>
                                <TableData>임베디드소프트웨어와스마트모빌리티</TableData>
                                <TableData>3</TableData>
                                <TableData>이유철</TableData>
                            </tr>
                        </tbody>
                    </Table>
                </Section>
            </Container>
        </>
    );
};

export default Major;

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