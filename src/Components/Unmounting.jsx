import React from 'react'

function Unmounting() {

    const matter = [
        {
            title:"Unmounting",
            defination:"The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.React has only one built-in method that gets called when a component is unmounted:",
            imgsrc:"https://raw.githubusercontent.com/lokesh1987-hack/Life-Cycle-Method-in-React-JS-/main/public/Images/Unmounting/Screenshot%20(150).png",
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
        <div className="container">
            <div className="row">
                {matter.map((value) => {
                    return (
                        <div className="col-ms-4 col-lg-4 col-xl-12">
                            <div className="card mt-5">
                                <div class="card-body">
                                    <h5 class="card-title text-center">{value.title}</h5>
                                    <p class="card-text mb-3">{value.defination}</p>
                                </div>
                                <img src={value.imgsrc} class="card-img-top" alt="Please Check Your Network" />
                                <div class="card-body">
                                <a href={value.link_url} target="_blank" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Unmounting
