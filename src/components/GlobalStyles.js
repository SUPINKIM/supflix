import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// eslint-disable-next-line import/no-anonymous-default-export
const Globalstyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration : none;
        color : inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        padding : 0;
        margin : 0;
        font-family : --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color : rgba(20,20,20,1);
        color:#fff;
        padding-top: 50px;
    }
`;
export default Globalstyles;
