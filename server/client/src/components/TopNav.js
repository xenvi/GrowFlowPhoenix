import React, { Component } from "react";
import styled from 'styled-components';
// icons
import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    padding: 1rem;
    background: #fff;
    & svg {
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
            color: #6a43f7;
            transition: 0.3s ease-in-out;
        }
    }
`;
const RightNav = styled.div`
    & svg {
        margin: 0 0.2rem;
    }
`;

class TopNav extends Component {
    render() {
        return (
            <Wrapper>
               <MenuOpenOutlinedIcon/>
               <RightNav>
                    <HelpOutlineIcon/>
                    <AccountCircleIcon/>
                    <ExpandMoreIcon/>
               </RightNav>
            </Wrapper>
        )
    }
}

export default TopNav