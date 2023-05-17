import React, { useState } from "react";
import styled from 'styled-components';
import Icon from './icon';
import { NavLink, Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import links from '../utils/links'; 
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Header = () => {
    return (
        <Wrapper>
            <SubHeader />
        </Wrapper>
    )
}

const SubHeader = () => {

    const [showHeaderContent, setShowHeaderContent] = useState(false);

    const handleClick = () => {
        setShowHeaderContent(!showHeaderContent)
    }

    return (
        <SubHeaderWrapper>
            <IconHolder>
                <Icon
                    handleClick={handleClick}
                >
                    <MenuRoundedIcon
                        sx={{ fontSize: '30px' }}
                    />
                </Icon>
            </IconHolder>
            <HeaderContent
                className={ showHeaderContent ? 'show' : '' }
            />
        </SubHeaderWrapper>
    )
}

const HeaderContent = ({ className }) => {

    const [showSignoutModal, setShowSignoutModal] = useState(false);

    const handleClick = () => {
        setShowSignoutModal(!showSignoutModal)
    }

    return (
        <HeaderContentWrapper
            className={className}
        >
            <Nav />
            <UserHolder handleClick={handleClick} />
            <SignOutModal showSignoutModal={showSignoutModal} />
        </HeaderContentWrapper>
    )
}

const Nav = () => {
    return (
        <NavWrapper>
            {
                links.map(link => {
                    return (
                        <LinkHolder key={link.id}>
                            <PageLink 
                                linkTo={link.to}
                                title={link.title}
                            />
                        </LinkHolder>
                    )
                })
            }
            <SingleLinkWrapper>
                <LinkHolder>
                    <PageLink
                        linkTo='profile'
                        title='Profile'
                    />
                </LinkHolder>
            </SingleLinkWrapper>
        </NavWrapper>
    )
}

const LinkHolder = ({ children }) => {
    return (
        <LinkHolderWrapper>
            { children }
        </LinkHolderWrapper>
    )
}

const PageLink = ({ linkTo, title }) => {
    return (
        <NavLinkWrapper
            to={linkTo}
        >
            { title }
        </NavLinkWrapper>
    )
}

const UserHolder = ({ handleClick }) => {
    return (
        <UserWrapper>
            <UserButton onClick={handleClick} >
                <Typography
                    variant="p1"
                >
                    Ansen Bey
                </Typography>
                <ArrowDropDownIcon
                    sx={{ color: 'white' }}
                />
            </UserButton>
        </UserWrapper>
    )
}

const SignOutModal = ({ showSignoutModal }) => {
    return (
        <SignOutWrapper
            className={ showSignoutModal ? 'show_signout_modal' : '' }
        >
            <ModalNav />
        </SignOutWrapper>
    )
}

const ModalNav = () => {
    return (
        <ModalNavWrapper>
            <ModalLink>
                <PageLink
                    linkTo='/profile'
                    title='Profile'
                />
            </ModalLink>
            <ModalLink>
                <UserButton>
                    Sign out
                </UserButton>
            </ModalLink>
        </ModalNavWrapper>
    )
}

const ModalLink = ({ children }) => {
    return (
        <ModalLinkWrapper>
            { children }
        </ModalLinkWrapper>
    )
}

//styled components----------
const Wrapper = styled.div`
    width: 100vw;
    padding: 16px;
    background: #161b22;
`

const ReusableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
`

const SubHeaderWrapper = styled(ReusableWrapper)`
   .show {
        display: block;
    }

    @media screen and (min-width: 760px) {
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }
`

const IconHolder = styled.div`
    display: inline-block;

    @media screen and (min-width: 760px) {
        display: none;
    } 
`

const HeaderContentWrapper = styled.div`
    display: none;

    @media screen and (min-width: 760px) {
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        position: relative;

        .show_signout_modal {
            display: block;
        }
    }
`

const NavWrapper = styled.nav`
    columns: 1 100vw;


    @media screen and (min-width: 760px) {
        columns: 0 0;
        height: 100%;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`

const NavLinkWrapper = styled(NavLink)`
    text-decoration: none;
    color: #fff;

    &:hover {
        color: #bac8da;
    }
`

const LinkHolderWrapper = styled.div`
    padding: 7px 0;
    border-bottom: 1px solid #30363d;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (min-width: 760px) {
        padding: 0 10px;
        border-bottom: none;
    }
`

const SingleLinkWrapper = styled.div`
    @media screen and (min-width: 760px) {
        display: none;
    }
`

const UserWrapper = styled.div`
    display: none;

    @media screen and (min-width: 760px) {
        display: inline-block;
    }
`

const UserButton = styled.button`
    background: none;
    outline: none;
    border: none;
    color: white;
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
`

const SignOutWrapper = styled.div`
    display: none;

    @media screen and (min-width: 760px) {
        display: none;
        padding: 16px;
        position: absolute;
        top: 30px;
        right: 0;
        background: #161b22;
        border: 1px solid #30363d;
        border-radius: 6px;
    }
`

const ModalNavWrapper = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const ModalLinkWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`


export default Header;