import React from 'react'


export default function Mounting() {

    const matter = [
        {
            title:"Mounting",
            defination:"Mounting means putting elements into the DOM. React has four built-in methods that gets called, in this order, when mounting a component:",
            imgsrc:"https://raw.githubusercontent.com/lokesh1987-hack/Life-Cycle-Method-in-React-JS-/main/Images/Mounting/Mounting.png",

        },
        {
            title:"Constructor",
            defination:"The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).",
            imgsrc:"https://raw.githubusercontent.com/lokesh1987-hack/Life-Cycle-Method-in-React-JS-/main/Images/Mounting/Constructor.png",
            link_url:"https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_constructor"

        },
        {
            title:"getDerivedStateFromProps",
            defination:"The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM. This is the natural place to set the state object based on the initial props. It takes state as an argument, and returns an object with changes to the state. The example below starts with the favorite color being 'red', but the getDerivedStateFromProps() method updates the favorite color based on the favcol attribute:",
            imgsrc:"https://raw.githubusercontent.com/lokesh1987-hack/Life-Cycle-Method-in-React-JS-/main/Images/Mounting/Gdsfp.png",
            link_url:"https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_getderivedstatefromprops"

        },
        {
            title:"render",
            defination:"The render() method is required, and is the method that actually outputs the HTML to the DOM.",
            imgsrc:"https://raw.githubusercontent.com/lokesh1987-hack/Life-Cycle-Method-in-React-JS-/main/Images/Mounting/Render.png",
            link_url:"https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_render"
        }, 
        {
            title:"componentDidMount",
            defination:"The componentDidMount() method is called after the component is rendered. This is where you run statements that requires that the component is already placed in the DOM.",
            imgsrc:"https://raw.githubusercontent.com/lokesh1987-hack/Life-Cycle-Method-in-React-JS-/main/Images/Mounting/Cdm.png",
            link_url:"https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_componentdidmount"
        }
    ]

    return (
        <div>
            {matter.map((value,index)=>{
               return( 
                   <div className="Card">
                        <h1>{value.title}</h1>
                        <p>{value.defination}</p>
                        <img src={value.imgsrc} />
                        <a target="_blank" href={value.link_url}>Try_it</a>
                   </div>
               )
            })}
    
        </div>
    )
}
