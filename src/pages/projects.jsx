import box1 from '../assets/imgs/box1.jpg'
import box2 from '../assets/imgs/box2.jpg'
import box3 from '../assets/imgs/box3.jpg'
import box4 from '../assets/imgs/box4.jpg'
import box5 from '../assets/imgs/box5.jpg'
import box6 from '../assets/imgs/box6.jpg'

export function Projects() {
    return (
        <main className='main-proj-page full'>
            <section className="projects">
                <div className="project-box" >
                    <img src={box1} />
                    <p>גישור</p>
                </div>

                <div className="project-box">
                    <img src={box2} />
                    <p>מנהור</p></div>
                <div className="project-box">
                    <img src={box3} />
                    <p>שיקום גשרים</p>
                </div>
                <div className="project-box">
                    <img src={box4} />
                    <p>אנרגיה מתחדשת</p>
                </div>
                <div className="project-box">
                    <img src={box5} />
                    <p>פיתוח תשתיות</p>
                </div>
                <div className="project-box">
                    <img src={box6} />
                    <p>בנייה</p>
                </div>
            </section>
        </main>
    )
}