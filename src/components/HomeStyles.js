import styled from 'styled-components'

export const HomeStyles = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 1500px;

    .home-row {
        display: flex;
        z-index: 1;
        margin: 0 5px;
    }

    .home-image {
        width: 100%;
        z-index: -1;
        margin-bottom: -150px;
        mask-image: linear-gradient(to bottom , rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    }
    
`