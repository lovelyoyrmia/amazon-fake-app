import styled from "styled-components";

export const SubtotalStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100px;
    padding: 20px;
    background-color: #f3f3f3;
    border: 1px solid #dddddd;
    border-radius: 3px;

    .subtotal-gift {
        display: flex;
        align-items: center;
    }
    
    input {
        margin-right: 8px;
    }

    button {
        background: #f0c14b;
        border-radius: 2px;
        width: 100%;
        height: 30px;
        border: 1px solid;
        margin-top: 10px;
    }
`