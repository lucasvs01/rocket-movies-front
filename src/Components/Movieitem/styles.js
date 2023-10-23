import styled from "styled-components"; 

export const Container = styled.div`

    border-radius: 10px;

    height: 56px;
    padding-right: 16px;

    
    
    font-size: 16px;
    font-weight: 400;
    
    display: flex;

    background-color: ${({ theme, isNew}) => !isNew ?  `${theme.COLORS.BACKGROUND_800}` : `transparent`};

    border: ${({ theme, isNew}) => !isNew ?  `none` : `2px dashed ${theme.COLORS.GRAY}`};

    
    > input {
        
        
        background-color: transparent;
        border: none;
        border-radius: 10px;

        padding: 16px;

        color: ${({ theme, isNew}) => !isNew ?  `${theme.COLORS.WHITE}` : `${theme.COLORS.GRAY}`};

        font-family: 'Roboto Slab', serif;

        display: flex;
        text-align: center;

        
        
    }

    > button svg {
            color: ${({ theme }) => theme.COLORS.PINK};

            display: flex;
            justify-content: center;

        }



`;