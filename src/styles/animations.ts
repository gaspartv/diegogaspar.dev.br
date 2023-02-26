import { keyframes } from "styled-components";

const animationEntring = keyframes`
0%    {width: 0%;}
100%  {width: 100%;}
`;

const animationFadeIn = keyframes`
    from  {opacity: 0;} 
    to    {opacity: 1;}
`;

export { animationEntring, animationFadeIn };
