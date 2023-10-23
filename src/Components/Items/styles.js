import styled from "styled-components";

export const Container = styled.div`


    background-color: ${({ theme }) => theme.COLORS.RED};
    width: 100%;
    
    margin-bottom: 24px;
    padding: 32px;
    border-radius: 16px;
    
    

    > h2 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 8px;
    }

    > .stars {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 12px;
        margin-bottom: 15px;
        display: flex;
        gap: 1px;
    }

    .transparent-star {
        path:first-child {
            color: transparent;
        }
    }

    > p {
         width: 100%;
         height: 53px;
         overflow: hidden;
         color: ${({ theme }) => theme.COLORS.GRAY};
         margin-bottom: 15px;
    }

    footer {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

`;