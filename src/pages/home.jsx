import { useEffect, useRef, useState } from 'react'


import home1 from '../assets/imgs/home1.jpg'
import home2 from '../assets/imgs/home2.jpg'
import home3 from '../assets/imgs/home3.jpg'
import home4 from '../assets/imgs/home4.jpg'

export function Home() {
    const photos = [home1, home2, home3, home4]
    let intervalId
    const [currPhoto, setCurrPhoto] = useState(home1)
    let currIdx = 0

    useEffect(() => {
        intervalId = setInterval(() => {
            if (currIdx === 3) currIdx = 0
            else currIdx++
            setCurrPhoto(photos[currIdx])
        }, 6500)
        return () => { clearInterval(intervalId) }
    }, [])
    return (
        <main className="home-page full main-layout">
            <div className={currPhoto + 'img-container full'}>
                <img src={currPhoto}></img>
            </div>
            <p className='full'>חברת<span> משיק הנדסה אזרחית בע"מ </span>הוקמה בשנת 2007 ועוסקת בניהול , פיקוח והבטחת איכות בפרויקטים בתחום התשתיות, הבניה והאנרגיה המתחדשת.

                משיק הנדסה אזרחית מספקת את שרותיה בכל רחבי הארץ , מקרית שמונה בצפון ועד אזור אילת בדרום .

                אנו מעסיקים צוות מהנדסים מנוסים אשר נותנים מענה מתאים לפרויקטים השונים , תוך מעורבות ישירה של מנהלי החברה בכל הפרויקטים .

                החברה מספקת שירותים לחברות פרטיות ולגופים ציבוריים ומלווה את הפרויקטים משלב התכנון ועד לשלב המסירה והבדק .</p>
        </main>
    )
}