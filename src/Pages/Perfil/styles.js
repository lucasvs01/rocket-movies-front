import styled from "styled-components"; 

export const Container = styled.div`

    display: grid;
    grid-template-rows: 144px auto;
    grid-template-areas: "header" 
    "content";

    > header {
        width: 100%;

        grid-area: "header";

        background-color: ${({ theme }) => theme.COLORS.RED};


        a{
            display: flex;
            width: 70px;
            margin: 64px 0 0 144px;
            align-items: center;
            color: ${({ theme }) => theme.COLORS.PINK};
            font-size: 16px;

            svg {
                margin: 0 10px 0 0;
            }
        }


    }

    > main {

        width: 100%;
        display: grid;
        grid-area: "content";

        overflow-y: visible;

        

        

        }



`;

export const Form = styled.form`

    width: 340px;


    margin: -85px auto 0 auto;

    > .inputs_readOnly, .inputs_write  {
        display: grid;
        gap: 8px;

        margin-bottom: 24px;

    }

`;


export const Profile = styled.div`
    position: relative;

    display: grid;
    align-items: center;
    justify-content: center;

    margin-bottom: 64px;


    > img {
        width: 186px;
        height: 186px;

        border-radius: 50%;
        
    }

    > label {

        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: absolute;

        display: flex;
        align-items: center;
        justify-content: center;

        bottom: 0px;
        right: 78px;

        background-color: ${({ theme }) => theme.COLORS.PINK};

        input {
            display: none;
        }

        svg {

                font-size: 25px;
                color: ${({ theme }) => theme.COLORS.BLACK};
                                
            }

    }

`;

