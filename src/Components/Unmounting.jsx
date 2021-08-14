import React from 'react'

function Unmounting() {

    const matter = [
        {
            title:"Unmounting",
            defination:"The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.React has only one built-in method that gets called when a component is unmounted:",
            imgsrc:"",
            link_url:"https://www.w3schools.com/react/react_lifecycle.asp"
        },
        {
            title:"componentWillUnmount",
            defination:"The componentWillUnmount method is called when the component is about to be removed from the DOM.",
            imgsrc:"https://raw.githubusercontent.com/lokesh1987-hack/Life-Cycle-Method-in-React-JS-/main/Images/Unmounting/Unmounting.png",
            link_url:"https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_componentwillunmount"

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

export default Unmounting
