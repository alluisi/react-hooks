import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';

export function App() {
    return (
        <div className="App">
            <Content>
                <p>quote xpto - Speaker</p>
                <button>Quote No Jutsu</button>
                <NarutoImg src={narutoImg} alt='Naruto with a kunai' />
            </Content>
        </div>
    );
}

const Content = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NarutoImg = styled.img`
    max-width: 50vh;
    align-self: flex-end;
`;