function CourseCard({ course }) {
    return (
        <div className="course-item">
            <div className="course-item__img">
                <img src={course.imageUrl} alt={course.title} /></div>
            <div className="course-item__detail">
                <CourseCardBody course={course} />
                <CourseCardFooter course={course} />
            </div>
        </div>
    )
}

export default CourseCard;

function CourseCardBody({ course }) {
    return (
        <div className="course-item__body">
            <div>
                <p className="title">{course.title}</p>
                <p className="desc">{course.description}</p></div>
            <span className="rate">{course.rate}🥮</span></div>
    )
}

function CourseCardFooter({ course }) {
    return (
        <div className="course-item__footer">
            <div className="tags">
                {
                    course.tags.map((c) => {
                        return (
                            <span className="badge badge--secondary">React.js</span>
                        )
                    })
                }
            </div>
            <div className="caption">
                <div className="date">{new Date().toLocaleDateString("en-us", { month: "short", day: "numeric", year: "numeric" })}</div>
                <span className={`badge ${course.status === "Active" ? "badge--primary" : course.status === "Upcoming" ? "badge--danger" : "badge--secondary"}`}>{course.status}</span>
            </div>
        </div>
    )
}