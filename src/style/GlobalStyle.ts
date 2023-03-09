import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
:root {

	/* Brand */
	--brand1: #4529e6;
	--brand2: #5126ea;
	--brand3: #B0A6F0;
	--brand4: #edeafd;

	/* Grey Scale */
	--grey0: #0B0D0D;
	--grey1: #212529;
	--grey2: #495057;
	--grey3: #868E96;
	--grey4: #ADB5BD;
	--grey5: #CED4DA;
	--grey6: #DEE2E6;
	--grey7: #E9ECEF;
	--grey8: #F1F3F5;
	--grey9: #F8F9FA;
	--grey10: #FDFDFD;
	--white-fixed: #FFFFFF;

	/* Feedback */
	--alert1: #CD2B31;
	--alert2: #FDD8D8;
	--alert3: #FFE5E5;
	--sucess1: #18794E;
	--sucess2: #CCEBD7;
	--sucess3: #DDF3E4;

	/* Colors Random Profile */
	--random1: #E34D8C;
	--random2: #C04277;
	--random3: #7D2A4D;
	--random4: #7000FF;
	--random5: #6200E3;
	--random6: #36007D;
	--random7: #349974;
	--random8: #2A7D5F;
	--random9: #153D2E;
	--random10: #6100FF;
	--random11: #5700E3;
	--random12: #30007D;

	/* Typography */
	--heading-font-family: 'Lexend', sans-serif;
	--heading-color: var(--grey1);
	--heading-1-700: 700;
	--heading-2-600: 600;
	--heading-3-600: 600;
	--heading-3-500: 500;
	--heading-4-600: 600;
	--heading-4-500: 500;
	--heading-5-600: 600;
	--heading-5-500: 500;
	--heading-6-600: 600;
	--heading-6-500: 500;
	--heading-7-600: 600;
	--heading-7-500: 500;

	--body-font-family: 'Inter', sans-serif;
	--body-color: var(--grey2);
	--body-1-400: 400;
	--body-1-600: 600;
	--body-2-400: 400;
	--body-2-500: 500;

	--button-font-family: 'Inter', sans-serif;
	--button-color: var(--grey2);
	--button-big-text: 16px;
	--button-medium-text: 14px;

	--input-font-family: 'Inter', sans-serif;
	--input-color: var(--grey2);
	--input-placeholder: ;
	--input-label: ;

}

​
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  font-family: 'Inter', sans-serif;
}
​
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
​
body {
	line-height: 1;
}
​
ol, ul {
	list-style: none;
}
​
blockquote, q {
	quotes: none;
}
​
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
​
table {
	border-collapse: collapse;
	border-spacing: 0;
}
​
button {
  cursor: pointer;
}
`;
