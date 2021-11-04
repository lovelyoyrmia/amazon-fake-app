import styled from "styled-components";

export const CheckoutProductStyles = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;

    .checkoutProduct-info {
        padding-left: 20px;
    }

    button {
        background: #f0c14b;
        border: 1px solid;
        margin-top: 10px;
        padding: 6px 3px;
    }

    img {
        object-fit: contain;
        width: 180px;
        height: 180px;
    }

    .checkoutProduct-rating {
        display: flex;
    }

    .checkoutProduct-title {
        font-size: 17px;
        font-weight: 800;
    }
`