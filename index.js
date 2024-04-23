
const style={
    width:"80%",
    fontSize:"20px"
}
const style1={
  textDecoration: 'underline',
  color:"blue"
}





const h1 = React.createElement("h1", {}, "Topics covered");
const p1 = React.createElement("p", {style:style}, "Documentation for Web developers");
const h2 = React.createElement("h3", {style:style1}, "Web Developer Guide");
const p2 = React.createElement("p", {style:style}, "The Web Developer Guide provides useful how-to content to help you actually use Web technologies to do what you want or need to do.");
const h3 = React.createElement("h3", {style:style1}, "Tutorials for Web developers");
const p3 = React.createElement("p", {style:style}, "Tutorials to take you step-by-step through learning HTML, CSS, JavaScript, and Web APIs.");
const h4 = React.createElement("h3", {style:style1}, "Accessibility");
const p4 = React.createElement("p", {style:style}, "Enabling as many people as possible to use websites, even when those people's abilities are limited in some way.");

const div = React.createElement("div", {}, [h1,p1,h2,p2,h3,p3,h4,p4]);
ReactDOM.render(div, document.getElementById("root"));
