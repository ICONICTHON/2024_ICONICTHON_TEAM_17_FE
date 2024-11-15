import styled from "styled-components";
import iconUrl from '/img/icon.svg?url';

const Timetable = () => {
    return (
        <Container>
            <Icon>
                <img src={iconUrl} alt="Icon" />
                <h1>시간표</h1>
            </Icon>
            <hr />
            <Section>
                <Table>
                    <tbody>
                        <tr>
                            <TableHeader>시간</TableHeader>
                            <TableHeader>월</TableHeader>
                            <TableHeader>화</TableHeader>
                            <TableHeader>수</TableHeader>
                            <TableHeader>목</TableHeader>
                            <TableHeader>금</TableHeader>
                        </tr>
                        <tr>
                            <TableData>12:00</TableData>
                            <TableData />
                            <TableData />
                            <TableData />
                            <TableData />
                            <TableData />
                        </tr>
                        <tr>
                            <TableData>12:30</TableData>
                            <TableData />
                            <TableData />
                            <TableData />
                            <TableData />
                            <TableData />
                        </tr>
                        <tr>
                            <TableData>13:00</TableData>
                            <TableData rowSpan="3" filled><strong>컴퓨터네트워크</strong><br /><br />614 신공학관(기숙사) 401-6141 강의실</TableData>
                            <TableData />
                            <TableData rowSpan="3" filled><strong>컴퓨터네트워크</strong><br /><br />614 신공학관(기숙사) 401-6141 강의실</TableData>
                            <TableData />
                            <TableData />
                        </tr>
                        <tr>
                            <TableData>13:30</TableData>
                            <TableData />
                            <TableData />
                            <TableData />
                        </tr>
                        <tr>
                            <TableData>14:00</TableData>
                            <TableData rowSpan="4" filled><strong>인공지능프로그래밍기초실습</strong><br /><br />L432 사회학관/경영관 202-463 (L) 공용컴퓨터실</TableData>
                            <TableData rowSpan="4" filled><strong>인공지능프로그래밍기초실습</strong><br /><br />L432 사회학관/경영관 202-463 (L) 공용컴퓨터실</TableData>
                            <TableData />
                        </tr>
                        <tr>
                            <TableData>14:30</TableData>
                            <TableData rowSpan="2" filled><strong>자아와명상2</strong><br /><br />202 계산관 508-202 좌선실</TableData>
                            <TableData />
                            <TableData />
                        </tr>
                        <tr>
                            <TableData>15:00</TableData>
                            <TableData />
                            <TableData />
                        </tr>
                        <tr>
                            <TableData>15:30</TableData>
                            <TableData />
                            <TableData />
                        </tr>
                        <tr>
                            <TableData>16:00</TableData>
                            <TableData rowSpan="4" filled><strong>농구</strong><br /><br />113 체육관 502-143 경기장</TableData>
                            <TableData rowSpan="6" filled><strong>데이터베이스체제</strong><br /><br />3165 신공학관(기숙사) 401-3165 정보통신공학실습실2</TableData>
                            <TableData />
                            <TableData rowSpan="4" filled><strong>취업실전전략</strong><br /><br />L302 사회학관/경영관 202-378 강의실</TableData>
                            <TableData />
                        </tr>
                        <tr>
                            <TableData>16:30</TableData>
                            <TableData />
                            <TableData />
                        </tr>
                        <tr>
                            <TableData>17:00</TableData>
                            <TableData />
                            <TableData />
                        </tr>
                        <tr>
                            <TableData>17:30</TableData>
                            <TableData />
                            <TableData />
                        </tr>
                        <tr>
                            <TableData>18:00</TableData>
                            <TableData />
                            <TableData />
                            <TableData />
                            <TableData />
                        </tr>
                        <tr>
                            <TableData>18:30</TableData>
                            <TableData />
                            <TableData />
                            <TableData rowSpan="4" filled><strong>산학융합종합설계(시각경영 프로젝트)</strong><br /><br />5143 신공학관(기숙사) 401-5143 강의실</TableData>
                            <TableData />
                        </tr>
                        <tr>
                            <TableData>19:00</TableData>
                            <TableData />
                            <TableData />
                            <TableData />
                            <TableData />
                        </tr>
                        <tr>
                            <TableData>19:30</TableData>
                            <TableData />
                            <TableData />
                            <TableData />
                            <TableData />
                        </tr>
                        <tr>
                            <TableData>20:00</TableData>
                            <TableData />
                            <TableData />
                            <TableData />
                            <TableData />
                        </tr>
                    </tbody>
                </Table>
            </Section>
        </Container>
    );
};

export default Timetable;

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
    font-size: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
    width: 12.5%;
    padding: 0.75rem;
    background-color: #E3DED1;
    color: #333;
    font-weight: bold;
    border: 1px solid #ccc;
    white-space: nowrap;
`;

const TableData = styled.td`
    width: 12.5%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    color: ${({ filled }) => (filled ? "black" : "#555")};
    background-color: ${({ filled }) => (filled ? "#E3DED1" : "white")};
    white-space: normal;
    vertical-align: top;
`;