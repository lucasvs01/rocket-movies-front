import { styled } from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 120px auto;

    grid-template-areas: 
    "header" 
    "content";
    
    /* > div strong{
        margin-bottom: 18px;
    } */
    
    > main {

        grid-area: content;
        overflow-y: auto;

        margin: 50px 123px 56px;
        padding-right: 16px;

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            
            margin-bottom: 40px;

            a {
                max-width: 207px;
            }



        }


        h1 {
            font-size: 32px;
            font-weight: 400;
            white-space: nowrap;

        }


    }


`;
