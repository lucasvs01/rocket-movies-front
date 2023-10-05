import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 120px;
    gap: 64px;
    display: flex;
    padding: 25px 123px;
   

    grid-area: header;
    
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_600};

    align-items: center;
    text-align: center;
    justify-content: space-between;

    

    > h1 {
        font-size: 24px;
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.PINK};

    }

    
    > a {
        display: flex;
        gap: 9px;
        align-items: center;

        div {

            
            

        strong {
        font-size: 14px;
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.WHITE};

        display: flex;
        justify-content: end;

        white-space: nowrap;
        }

        span {
            font-size: 14px;
            display: flex;
            justify-content: end;
            color: ${({ theme }) => theme.COLORS.GRAY};
        }
    }
    
    img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }


    }



`;