import styled from "styled-components"; 

export const Container = styled.textarea`
    
    width: 100%;
    height: 274px;

    border: none;
    border-radius: 10px;

    padding: 20px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    font-family: 'Roboto Slab', serif;

    color: ${({theme}) => theme.COLORS.WHITE};

    resize: none;

    
`;