import styled from "styled-components";

export const Container = styled.button`

    width: 100%;
    height: 50px;
    font-size: 16px;

    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    border-radius: 10px;


`;