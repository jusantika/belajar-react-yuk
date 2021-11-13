import React from 'react';
import styled from 'styled-components';
import bg from 'https://raw.githubusercontent.com/Maclinz/yt_animated-landing-page/b9dd0913bf1b3f8b4226d7eead2dddf68dfcfa94/src/img/bg.svg';

function Header() {
  return (
    <HeaderStyled>
      <div>
        <h6>Main Lost Saga</h6>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  height: 100vh;
  width: 100%;
  background-image: url(${bg});
`;

export default Header;
