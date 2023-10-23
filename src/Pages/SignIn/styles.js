import styled from "styled-components"; 
import background from "../../assets/background.png"

export const Container = styled.div`

    display: grid;
    grid-template-columns: 637px auto;
    grid-template-areas: "main" 
    "img";

    > a {
        align-self: center;
    }
    

    > .content {
        width: 100%;
        height: 100vh;
        grid-area: "main";

    }

    > .background {
        width: 100%;
        height: 100vh;
        grid-area: "img";

        background: url(${background}) no-repeat center;
        background-size: cover;
        opacity: 0.4;
    }

`;


export const Form = styled.form`
    grid-area: "main";


    display: grid;
    width: 100%;
    height: 100vh;

    place-content: center;

    padding: 0px 163px 0 134px;


    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.PINK};
        font-weight: bold;

    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY};

    }

    > h2 {
        margin: 48px 0;
        font-size: 24px;
        font-weight: 500;

    }

    > .inputs{
        display: grid;
        gap: 8px;
        margin-bottom: 24px;
    }


    > :last-child {
        margin-top: 42px;
        display: flex;
        place-items: center;
    }

    


`;
