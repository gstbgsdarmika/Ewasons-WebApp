import { css } from 'styled-components';

const mobile = (props) => css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;

export default mobile;
