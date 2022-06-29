import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle` html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
// @font-face {
//   font-family: Shabnam;
//   src: url("Shabnam.eot");
//   src: url("Shabnam.eot?#iefix") format("embedded-opentype"),
//     url("Shabnam.woff2") format("woff2"),
//     url("Shabnam.woff") format("woff"),
//     url("Shabnam.ttf") format("truetype");
//   font-weight: normal;
// }
// @font-face {
//   font-family: Shabnam;
//   src: url("Shabnam-Bold.eot");
//   src: url("Shabnam-Bold.eot?#iefix") format("embedded-opentype"),
//     url("Shabnam-Bold.woff2") format("woff2"),
//     url("Shabnam-Bold.woff") format("woff"),
//     url("Shabnam-Bold.ttf") format("truetype");
//   font-weight: bold;
// }
// @font-face {
//   font-family: Shabnam;
//   src: url("Shabnam-Thin.eot");
//   src: url("Shabnam-Thin.eot?#iefix") format("embedded-opentype"),
//     url("Shabnam-Thin.woff2") format("woff2"),
//     url("Shabnam-Thin.woff") format("woff"),
//     url("Shabnam-Thin.ttf") format("truetype");
//   font-weight: 100;
// }
// @font-face {
//   font-family: Shabnam;
//   src: url("Shabnam-Light.eot");
//   src: url("Shabnam-Light.eot?#iefix") format("embedded-opentype"),
//     url("Shabnam-Light.woff2") format("woff2"),
//     url("Shabnam-Light.woff") format("woff"),
//     url("Shabnam-Light.ttf") format("truetype");
//   font-weight: 300;
// }
// @font-face {
//   font-family: Shabnam;
//   src: url("Shabnam-Medium.eot");
//   src: url("Shabnam-Medium.eot?#iefix") format("embedded-opentype"),
//     url("Shabnam-Medium.woff2") format("woff2"),
//     url("Shabnam-Medium.woff") format("woff"),
//     url("Shabnam-Medium.ttf") format("truetype");
//   font-weight: 500;
// }
html,
body {
  font-family: Shabnam;
  direction: rtl;
  font-size: 16px;
}
* {
  font-family: Shabnam;
  box-sizing: border-box;
}
body {
  background: white;
  font-weight: 400;
  line-height: 1.75;
  color: #333;
}`;

export default Reset;
