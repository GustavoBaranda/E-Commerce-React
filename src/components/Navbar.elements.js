import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    heigth: 70px;
    background-color: #000;
    color: #fff;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    width: 100%;
    heigth: 70px;
`;

export const LogoContainer = styled.div`
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-family: sans-serif;
    cursor:pointer;
    text-decoration:none;

    p{
        &:nth-chaild(1){
            color: #fff:
        }

        &:nth-child(2){
            font-size: 1.5rem;
            font-weigth: 500;
            color #e07924;
        }

        }

        svg{
            fill: #e07924;
            margin-right: 0.5rem;
        }
`;

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
`;

export const MenuItem = styled.li`
    heigth: 100%;

`;

export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration:none;
    heigth: 100%;
    padding: 0.5rem 2rem;
    color: #e07924;
    font-family: sans-serif;
    font-size: 2rem;
    font-weigth: 300:
    cursor: pointer;
    transsition: 0.5s all ease;
    font-size: 1.6rem;

    &:hover{
        color: #fff;
        background-color: #e07924;
        transsition: 0.5s all ease;
        border-radius: 5px;
    }
`;
