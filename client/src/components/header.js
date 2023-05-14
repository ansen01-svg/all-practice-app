import React, { useState } from "react";
import styled from 'styled-components';
import Icon from './icon';
import { NavLink } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


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
            <Icon
                handleClick={handleClick}
            >
                <MenuRoundedIcon
                    fontSize="medium"
                />
            </Icon>
            <HeaderContent
                className={ showHeaderContent ? 'show' : '' }
            />
        </SubHeaderWrapper>
    )
}

const HeaderContent = ({ className }) => {
    return (
        <HeaderContentWrapper
            className={className}
        >
            <Nav />
            <UserHolder />
            <SignOutHolder />
        </HeaderContentWrapper>
    )
}

const Nav = () => {
    return (
        <NavWrapper>
            <Link linkTo='profile' title='Profile' />
            <Link linkTo='other' title='Other' />
        </NavWrapper>
    )
}

const Link = ({ linkTo, title }) => {
    return (
        <NavLink
            to={linkTo}
            className={ ({ isActive }) => isActive ? '' : '' }
        >
            { title }
        </NavLink>
    )
}

const UserHolder = () => {
    return (
        <UserWrapper></UserWrapper>
    )
}

const SignOutHolder = () => {
    return (
        <SignOutWrapper></SignOutWrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    padding: 16px;
    background: #161b22;
`

const SubHeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;

    .show {
        display: block;
    }

    @media screen and (min-width: 700px) {
        flex-direction: row;
        align-items: center;
        justify: space-between;
    }
`

const HeaderContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    display: none;

    @media screen and (min-width: 700px) {
        flex-direction: row;
        align-items: center;
        justify: space-between;
    }
`

const NavWrapper = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
`

const UserWrapper = styled.div``

const SignOutWrapper = styled.div``


export default Header;