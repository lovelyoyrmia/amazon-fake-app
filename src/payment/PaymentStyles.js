import styled from "styled-components";

export const PaymentStyles = styled.div`
    background-color: white;

    h1 {
        text-align: center;
        padding: 10px;
        font-weight: 400;
        background-color: rgb(234, 237, 237);
        border-bottom: 1px solid lightgray;
    }

    h1 a {
        text-decoration: none;
    }
    .payment-section {
        display: flex;
        padding: 1rem;
        margin: 0 1rem;
        border-bottom: 1px solid lightgray;
    }
    .payment-title {
        flex: 0.2;
    }
    .payment-address, .payment-items, .payment-details {
        flex: 0.8;
    }
    
`