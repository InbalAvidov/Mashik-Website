import client1 from '../assets/imgs/client1.jpg'
import client2 from '../assets/imgs/client2.jpg'
import client3 from '../assets/imgs/client3.jpg'
import client4 from '../assets/imgs/client4.jpg'
import client5 from '../assets/imgs/client5.jpg'
import client6 from '../assets/imgs/client6.jpg'
import client7 from '../assets/imgs/client7.jpg'
import client8 from '../assets/imgs/client8.jpg'
import client9 from '../assets/imgs/client9.jpg'

export function Clients() {
    return (
        <div className="clients-container full">
            <div className="clients">
                <div className="client-box" >
                    <img src={client1} />
                </div>
                <div className="client-box">
                    <img src={client2} />
                </div>
                <div className="client-box">
                    <img src={client3} />
                </div>
                <div className="client-box">
                    <img src={client4} />
                </div>
                <div className="client-box">
                    <img src={client5} />
                </div>
                <div className="client-box">
                    <img src={client6} />
                </div>
                <div className="client-box">
                    <img src={client7} />
                </div>
                <div className="client-box">
                    <img src={client8} />
                </div>
                <div className="client-box">
                    <img src={client9} />
                </div>

            </div>

        </div>
    )
}