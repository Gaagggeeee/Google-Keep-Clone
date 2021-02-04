import React from 'react';
import styled from 'styled-components';
import firebase from '../images/firebase.png';
import react from '../images/react.png';


// Trying out styled-components ( Use CSS as javascript ) just testing the waters with it.

const Nav = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 25px;
    border-bottom: 1px solid rgba(60, 64, 67, 0.2);
`;

const ImgWrap = styled.div `
    display: flex;
    align-tems: center;
`;

const Img = styled.img `
    width: 40px;
    height: 40px;
`;

const Header = () => {
    return (
        <>
            <Nav>
                <p>Google Keep Clone</p>
                <ImgWrap>
                    <Img src={firebase} alt='Firebase Logo'/>
                    
                    <Img src={react} alt='React Logo' />
                </ImgWrap>
            </Nav>
        </>
    );
};

export default Header;
