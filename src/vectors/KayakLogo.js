/** @jsx jsx */

import { jsx, css, keyframes } from '@emotion/core';

const orange = '#ff690f';
const white = '#ffffff';
const lime = 'limegreen';
const pink = 'pink';

const cssLogo = css`
  fill: ${orange};
  transition: 0.5s ease-in-out fill;
`;

const cssLogoPink = css`
  ${cssLogo}
  fill: ${pink};
`;

const cssLogoLime = css`
  ${cssLogo}
  fill: ${lime};
`;

const cssLetter = css`
  fill: ${white};
`;

const bounce = x => keyframes`
  0% {
    transform: translate(${x}px, 0);
  }

  25% {
    transform: translate(${x}px, -5px);
  }

  75% {
    transform: translate(${x}px, 5px);
  }

  100% {
    transform: translate(${x}px, 0px);
  }
`;

const fade = (from, to) => keyframes`
  from {
    fill: ${from};
  }

  to {
    fill: ${to};
  }
`;

const animate = (animation = bounce, delay) => css`
  animation-name: ${animation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  animation-timing-function: linear;
  animation-delay: ${delay}s;
`;

const KayakLogo = props => (
  <svg preserveAspectRatio="xMinYMin" viewBox="0 0 125 24" {...props}>
    <g css={animate(bounce(0), 0)}>
      <path css={cssLogo} d="M0 .03h23.94v23.94H0z" />
      <path css={cssLetter} d="M7.38 6.02h2.91v11.97H7.38z" />
      <path css={cssLetter} d="M16.56 17.98h-3.21L10.04 12l3.31-5.98h3.21L13.23 12l3.33 5.98z" />
    </g>
    <g css={animate(bounce(0), 0.1)}>
      <path css={cssLogo} d="M25.27.03h23.94v23.94H25.27z" />
      <path css={cssLetter} d="M35.07 16.26L34.55 18h-3.1l3.94-12h3.7L43 18h-3.17l-.52-1.72zm2.12-6.82l-1.4 4.47h2.8z" />
    </g>
    <g css={animate(bounce(0), 0.2)}>
      <path css={cssLogo} d="M50.53.03h23.94v23.94H50.53z" />
      <path css={cssLetter} d="M64 18h-2.93v-5.29L57.14 6h3.46l1.94 3.68L64.45 6h3.41L64 12.71z" />
    </g>
    <g css={animate(bounce(50.5), 0.3)}>
      <path css={cssLogo} d="M25.27.03h23.94v23.94H25.27z" />
      <path css={cssLetter} d="M35.07 16.26L34.55 18h-3.1l3.94-12h3.7L43 18h-3.17l-.52-1.72zm2.12-6.82l-1.4 4.47h2.8z" />
    </g>
    <g css={animate(bounce(101), 0.4)}>
      <path css={cssLogo} d="M0 .03h23.94v23.94H0z" />
      <path css={cssLetter} d="M7.38 6.02h2.91v11.97H7.38z" />
      <path css={cssLetter} d="M16.56 17.98h-3.21L10.04 12l3.31-5.98h3.21L13.23 12l3.33 5.98z" />
    </g>
  </svg>
);

export default KayakLogo;
