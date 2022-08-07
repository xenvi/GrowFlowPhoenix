import React, { Component } from "react";
import styled from 'styled-components';
// icons
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 250px;
    min-height: 100vh;
    background: #160754;
    color: #a79dd4;
`;
const Logo = styled.div`
    margin: 1rem auto;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    font-family: Georgia, san-serif;
    & span {
        font-family: Georgia, san-serif;
        color: #6a43f7;
        font-style: italic;
    }
`;
const Menu = styled.ul`
    list-style: none;
    padding: 0;
    & .active {
        background: #6a43f7;
        a {
            color: #DCD6F0;
        }
    }
`;
const MenuItem = styled.li`
    padding: 0.75rem 2rem;
    &:hover {
        cursor: pointer;
    }
    & svg {
        margin-right: 0.5rem;
    }
    & a {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;
        color: #AAA2C5;
    }
`;

class Sidebar extends Component {
    render() {
        return (
            <Wrapper>
                <Logo>grow<span>flow</span></Logo>
                <Menu>
                    <MenuItem className="active"><a href="https://www.growflow.com"><MoodOutlinedIcon /> Employees</a></MenuItem>
                    <MenuItem><a href="https://www.growflow.com"><MailOutlinedIcon/> Messages</a></MenuItem>
                    <MenuItem><a href="https://www.growflow.com"><StoreOutlinedIcon/> Store</a></MenuItem>
                    <MenuItem><a href="https://www.growflow.com"><FavoriteBorderOutlinedIcon/> Favorites</a></MenuItem>
                    <MenuItem><a href="https://www.growflow.com"><SettingsOutlinedIcon/> Settings</a></MenuItem>
                </Menu>
            </Wrapper>
        )
    }
}

export default Sidebar