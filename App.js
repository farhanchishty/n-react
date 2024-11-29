/**
 * 
 * <div id="parent">
 *     <div id="child">
 *          <h1>I'm  H1 </h1>
 *          <h2>I'm H2  </h2>
 *     </div>
 * 
 *      <div id="child2">
 *          <h1>I'm  H1 </h1>
 *          <h2>I'm H2  </h2>
 *     </div>
 * </div>
 * 
 * 
 */

const parent = React.createElement(
    "div", 
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child1"},
            [
                React.createElement("h1",{}, "Hello I'm H1 TAG form child 1"),                
                React.createElement("h2",{}, "Hello I'm H2 TAG form child 1"),                
            ]
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [
                React.createElement("h1",{}, "Hello I'm H1 TAG form child 2"),                
                React.createElement("h2",{}, "Hello I'm H2 TAG form child 2"),          
            ]
        )
    ]
);

console.log(parent);


//const heading = React.createElement("h1", {id : "heading"}, "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);