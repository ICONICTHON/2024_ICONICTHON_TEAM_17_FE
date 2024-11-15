import styled from "styled-components";
import iconUrl from '/img/icon.svg?url';
import curriUrl from '/img/curriculum.svg?url';

const Curriculum= () =>{
    return (
        <Container>
            <Icon>
                    <img src={iconUrl} alt="Icon" />
                    <h1>정보통신공학전공 교과과정 이수체계도</h1>
            </Icon>
            <hr/>
            <Section>
                <img src={curriUrl} alt="Icon" />
            </Section>
        </Container>
    );
}
export default Curriculum;
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
`
const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1.5rem;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;