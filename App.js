/*
 <div id="Parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
     </dev>
     <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
     </dev>
 </dev>

 ReactElement(Object) = HTML(Bowser understand)

const heading = React.createElement("h1", {id: "heading"}, "hello world from react!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

const parent = React.createElement(
    "div", 
    { id: "parent" }, 
    [React.createElement(
        "div", 
        { id: "child" }, 
        [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")]
    ), 
    React.createElement(
        "div", 
        { id: "child2" }, 
        [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")]
    )]
);

// JSX

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
