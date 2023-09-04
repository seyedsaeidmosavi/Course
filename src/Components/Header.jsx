import React from 'react'
const CourseStatus = ["All","Upcoming","Active","Complated"];
function Header() {
    return (
    <div>
        <h1>My Course</h1>
        <div className="course-status">
            {
                CourseStatus.map((e)=>(
                    <div key={e}>{e}</div>
                ))
            }
        </div>
    </div>
    )
}

export default Header;