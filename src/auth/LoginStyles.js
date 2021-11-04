import styled from "styled-components";

export const LoginStyles = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;

    .login-logo {
        margin-top: 20px;
        margin-bottom: 20px;
        object-fit: contain;
        width: 100px;
        margin-left: auto;
        margin-right: auto;
    }
    .login-container {
        width: 300px;
        height: fit-content;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        border: 1px solid lightgray;
        padding: 20px;
    }
    h1 {
        font-weight: 500;
        margin-bottom: 1rem;
    }

    form h5 {
        margin-bottom: 5px;
    }

    form input {
        height: 30px;
        margin-bottom: 0.5rem;
        background-color: white;
        width: 98%;
    }

    p {
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 12px;
    }

    .signin {
        background: #f0c14b;
        border: 1px solid;
        margin-top: 10px;
        width: 100%;
        height: 30px;
        padding: 6px;
        font-size: 15px;
    }

    .signup {
        border-radius: 2px;
        width: 100%;
        height: 30px;
        border: 1px solid;
        border-color: darkgray;
        padding: 6px;
    }

    .login-google {
        display: flex;
        margin-bottom: 1rem;
        justify-content: space-between; 
        background-color: rgb(234, 237, 237);  
        padding: 8px;  
        border-radius: 5px;
        border: 1px solid;   
        align-items: center;
        cursor: pointer;
    }

    .login-google img {
        width: 26px;
    }

    .login-google h5 {
        font-weight: 400;
        margin-right: 5rem;
    }
     
    .signup:hover {
        background-color: lightgray;
    }

    .login-google:hover {
        background-color: rgba(234, 237, 237, 0.7);
    }
    
    .signin:hover {
        background: rgba(240, 193, 75, 0.8);
    }
    
`