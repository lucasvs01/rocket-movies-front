import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 120px;

    display: grid;
    grid-area: content;

    overflow-y: auto;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_600};
`;