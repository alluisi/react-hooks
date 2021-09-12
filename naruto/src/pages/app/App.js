import { useState } from 'react';
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';
import { Quotes } from '../../components';
import { getQuote } from '../../services';

export function App() {

    const [quoteState, setQuoteState] = useState({
        quote: 'ok',
        speaker: 'Speaker'
    });

    const onUpdate = async () => {
        const quote = await getQuote();

        setQuoteState(quote);
    };

    return (
        <div className="App">
            <Content>
                <Quotes {...quoteState} onUpdate={onUpdate} />
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