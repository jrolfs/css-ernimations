/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

import KayakLogo from './vectors/KayakLogo';

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const cssKayakLogo = css`
  width: 50%;
  overflow: visible;
`;

const App = () => <Container><KayakLogo css={cssKayakLogo} /></Container>;

export default App;
