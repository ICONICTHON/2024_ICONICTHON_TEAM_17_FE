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
                                <TableHeader1>조건 충족 여부</TableHeader1>
                                <TableHeader1>미적분학 1, 2</TableHeader1>
                                <TableHeader1>공업수학/산업수학</TableHeader1>
                                <TableHeader1>실험 과목 1, 2</TableHeader1>
                                <TableHeader1>개론 과목</TableHeader1>
                                <TableHeader1>프로그래밍기초실습</TableHeader1>
                                <TableHeader1>기타 전산학 1개</TableHeader1>
                                <TableHeader1>취득 학점</TableHeader1>
                                <TableHeader1>취득 요구 학점</TableHeader1>
                            </tr>
                            <tr>
                                <TableData1>미충족</TableData1>
                                <TableData1>수강</TableData1>
                                <TableData1>수강</TableData1>
                                <TableData1>수강</TableData1>
                                <TableData1>수강</TableData1>
                                <TableData1>수강</TableData1>
                                <TableData1>수강</TableData1>
                                <TableData1>29</TableData1>
                                <TableData1>30</TableData1>
                            </tr>
                        </tbody>
                    </Table>
                </Section>
                <Icon>
                    <img src={iconUrl} alt="Icon" />
                    <h1>MSC(M)</h1>
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
                                <TableData>미적분학및연습1</TableData>
                                <TableData>3</TableData>
                                <TableData>박정준</TableData>
                            </tr>
                            <tr>
                                <TableData>미적분학및연습2</TableData>
                                <TableData>3</TableData>
                                <TableData>안재욱</TableData>
                            </tr>
                            <tr>
                                <TableData>산업수학</TableData>
                                <TableData>3</TableData>
                                <TableData>이유철</TableData>
                            </tr>
                            <tr>
                                <TableData>확률및통계학</TableData>
                                <TableData>3</TableData>
                                <TableData>곽화륜</TableData>
                            </tr>
                        </tbody>
                    </Table>
                </Section>
                <Icon>
                    <img src={iconUrl} alt="Icon" />
                    <h1>MSC(S)</h1>
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
                                <TableData>생물학개론</TableData>
                                <TableData>3</TableData>
                                <TableData>이보영</TableData>
                            </tr>
                            <tr>
                                <TableData>일반물리학및실험1</TableData>
                                <TableData>4</TableData>
                                <TableData>오형택</TableData>
                            </tr>
                            <tr>
                                <TableData>일반물리학및실험2</TableData>
                                <TableData>4</TableData>
                                <TableData>류영선</TableData>
                            </tr>
                        </tbody>
                    </Table>
                </Section>
                <Icon>
                    <img src={iconUrl} alt="Icon" />
                    <h1>MSC(C)</h1>
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
                                <TableData>프로그래밍기초와실습</TableData>
                                <TableData>3</TableData>
                                <TableData>송양의</TableData>
                            </tr>
                            <tr>
                                <TableData>인터넷프로그래밍</TableData>
                                <TableData>3</TableData>
                                <TableData>엄진영</TableData>
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
    width: 11.11%;
    padding: 1rem;
    background-color: #E3DED1;
    color: #333;
    font-weight: bold;
    border: 1px solid #ccc;
`;

const TableData1 = styled.td`
    width: 11.11%;
    padding: 1rem;
    border: 1px solid #ccc;
    color: #555;
`;