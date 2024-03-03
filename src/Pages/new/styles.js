import styled from "styled-components"; 

export const Container = styled.div`

    display: grid;
    grid-template-rows: 120px auto;
    grid-template-areas: "header"
    "content";

    width: 100%;
    height: 100vh;

    
    > main {
        grid-area: "content";
        
        overflow-y: auto;

        margin: 40px 106px 85px 123px;
        padding-right: 24px;

        .back{
            display: flex;
            justify-content: flex-start;
            width: 70px;
        }

        h1 {

            margin: 24px 0 40px;
            font-size: 36px;
            font-weight: 500;
        }

        .inputs {
            display: flex;
            gap: 40px;
            margin-bottom: 40px;

            
        }


        .markers {
            background-color: ${({ theme }) => theme.COLORS.BLACK};

            display: flex;
            gap: 24px;

            border-radius: 8px;

            padding: 16px;

            margin-top: 24px;

            flex-wrap: wrap;

        }

        footer {
            display: flex;
            gap: 40px;

            margin-top: 40px;

            a:nth-child(1){
                background-color: ${({ theme }) => theme.COLORS.PINK};
                justify-content: center;
               p {
                    color: ${({ theme }) => theme.COLORS.BLACK};
                    

               } 

            }

            a:nth-child(2){
                justify-content: center;
            }

        }



    }

`;