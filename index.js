// const   heading  =  React.createElement("h1", { id: " head",  xyz: "abc"}, " hi from the react"); 
//  console.log(heading)  // js boject 
//  const root =  ReactDOM.createRoot(document.getElementById("root"));
//   root.render( heading);


//  *************************** typ1 ***************************************
//  const head =  React.createElement("div", { id: " parent" ,  xyz:"abc" }, 

//  [  React.createElement("h1", { id: "child 1" ,  xyz:"abc" }, " hi react") ,
//   React.createElement("h1", { id: "child 2" ,  xyz:"abc" }, " hi react") ]

// );
  // const root =  ReactDOM.createRoot(document.getElementById("root"));
  // root.render(head);


// ******************************** typ2******************************

 const parent =  React.createElement("div", { id: "parent"}  ,  [ 

 React.createElement("div", { id: "child 1"} ,

  [React.createElement("h1", { id: "h1"} ," I am  h1"), 
 React.createElement("h2", { id: "h2"} , " I am h2" ) ,
 React.createElement("h3", { id: "h3"} , " I am h3" ) ,
]

  )  , 

 React.createElement("div", { id: "child 2"} ,

  [React.createElement("h1", { id: "h1"} ," I am  h1"), 
 React.createElement("h2", { id: "h2"} , " I am h2" ) ,
 React.createElement("h3", { id: "h3"} , " I am h3" ) ,
]

  )  


]
)
  

  console.log(parent)  //
  const root =  ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
    
