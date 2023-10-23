import styled from "styled-components";

export const Container = styled.div`

    display: grid;
    width: 100%;
    height: 100vh;

    grid-template-rows: 120px auto;
    grid-template-areas: "header" "main";

    > main {
        grid-area: "main";

        margin: 40px 106px 85px 123px;

        overflow-y: auto;

        padding-right: 24px;

        a {
            justify-content: flex-start;
            width: 70px;
        }


        header {
            margin-top: 24px;
            


             .title {
                display: flex;

                align-items: center;

                gap: 19px;

                h1{
                    font-size: 36px;
                    font-weight: 500;
                }

                .stars {
                    color: ${({ theme }) => theme.COLORS.PINK};
                    font-size: 20px;
                    display: flex;
                    gap: 10px;



                    
                }

                .transparent-star {
                    path:first-child {
                        color: transparent;
                    }
                }
             }
        }


        .tags {
            display: flex;
            gap: 8px;
            margin-top: 40px;

            :nth-child(){
                background-color: ${({ theme }) => theme.COLORS.RED};
            }
        }

        p {
            margin-top: 40px;
        }

    }
`;


export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    margin-top: 24px;



    > img {
        width: 16px;
        height: 16px;

        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
        border-radius: 50%;
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }


`;