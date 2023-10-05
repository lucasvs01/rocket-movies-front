import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 56px;

    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    > input {
   
        align-self: center;
        width: 100%;
        height: 100%;
        padding: 20px 20px 20px 20px;
        
        font-family: 'Roboto Slab', serif;

        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};

        border: none;
        border-radius: 10px;
        outline: none;

    }

    > svg {

        margin-left: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY};
        align-self: center;

        }
    
    
`;