import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`

    width: 100%;
    height: 50px;
    font-size: 16px;

    display: flex;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme, isActive }) => isActive ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK};
    /* color: ${({ theme, isActive }) => isActive ? theme.COLORS.BACKGROUND_900 : theme.COLORS.GRAY}; */
    
    border-radius: 10px;


    > p {
        color: ${({ theme}) => theme.COLORS.BACKGROUND_900};
        align-self: center;
        
    }


    > svg {
        color: ${({ theme}) => theme.COLORS.BACKGROUND_900};
        margin-right: 10px;
    }

    


    


`;