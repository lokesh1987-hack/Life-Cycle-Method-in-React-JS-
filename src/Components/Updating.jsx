import React from 'react'

function Updating() {
    const matter2 = [
        {
            title:"Updating",
            defination:"The next phase in the lifecycle is when a component is updated.",
            imgsrc:"https://raw.githubusercontent.com/lokesh1987-hack/Life-Cycle-Method-in-React-JS-/main/Images/Updating/Updating.png",
            link_url:"https://www.w3schools.com/react/react_lifecycle.asp"
        },
        {
            title:"getDerivedStateFromProps",
            defination:"Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated.This is still the natural place to set the state object based on the initial props.The example below has a button that changes the favorite color to blue, but since the getDerivedStateFromProps() method is called, which updates the state with the color from the favcol attribute, the favorite color is still rendered as yellow:",
            imgsrc:"https://raw.githubusercontent.com/lokesh1987-hack/Life-Cycle-Method-in-React-JS-/main/Images/Updating/Gdsfp.png",
            link_url:"https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_constructor"

        },
        {
            title:"shouldComponentUpdate",
            defination:"In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not. The default value is true.The example below shows what happens when the shouldComponentUpdate() method returns false:",
            imgsrc:"https://raw.githubusercontent.com/lokesh1987-hack/Life-Cycle-Method-in-React-JS-/main/Images/Updating/Scu.png",
            link_url:""
        },
        {
            title:"render",
            defination:"The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.The example below has a button that changes the favorite color to blue:",
            imgsrc:"https://raw.githubusercontent.com/lokesh1987-hack/Life-Cycle-Method-in-React-JS-/main/Images/Updating/Render.png",
            link_url:"https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_getderivedstatefromprops"

        },
        {
            title:"getSnapshotBeforeUpdate",
            defination:"In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update. If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.",
            imgsrc:"https://raw.githubusercontent.com/lokesh1987-hack/Life-Cycle-Method-in-React-JS-/main/Images/Updating/Gscbu.png",
            link_url:"https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_render"
        }, 
        {
            title:"componentDidMount",
            defination:"The componentDidUpdate method is called after the component is updated in the DOM.",
            imgsrc:"https://raw.githubusercontent.com/lokesh1987-hack/Life-Cycle-Method-in-React-JS-/main/Images/Updating/Cdm.png",
            link_url:"https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_componentdidmount"
        }
    ]
    return (
        <div>
            {matter2.map((value,index)=>{
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

export default Updating