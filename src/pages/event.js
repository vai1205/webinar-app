import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import BackBtn from '../components/backBtn';
const Event = props => {
    let countDownDate = new Date("Oct 11, 2020 14:50:00").getTime();
    const [time, setTime] = useState({ days: "", hours: "", minutes: "", seconds: "" });
    const [isLive, setIsLive] = useState(false);
    const { days, hours, minutes, seconds } = time;
    let x = setInterval(function () {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        setTime({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
        if (distance < 0) {
            clearInterval(x);
            setIsLive(true);
        }
    }, 1000);
    return (
        <div className="event-page">
            <BackBtn backPath="/" />
            <div className="row">
                <div className="col-md-6 event-photo">
                    <img src="event.png" className="event-img" />
                </div>
                <div className="col-md-6 event-desc">
                    {/* <img className="event-bg-img" src="HEART KEY.png"/> */}
                    <h1 className="mb-2">ECHO-DELHI MIDTERM</h1>
                    <h2 className="mb-3">Virtual 2020</h2>
                    {
                        isLive
                            ? <h1 className="mb-5 mt-5">Event is Live!</h1>
                            : <div className="countdown mb-5">
                                <div className="countBlock">
                                    <div className="count">{days}</div>
                                    <div className="label">Days</div>
                                </div>
                                <div className="countBlock">
                                    <div className="count">{hours}</div>
                                    <div className="label">hrs</div>
                                </div>
                                <div className="countBlock">
                                    <div className="count">{minutes}</div>
                                    <div className="label">mins</div>
                                </div>
                                <div className="countBlock">
                                    <div className="count">{seconds}</div>
                                    <div className="label">secs</div>
                                </div>
                            </div>
                    }

                    <div className="cta">
                        <button
                            onClick={e => { e.preventDefault(); props.history.push("event-schedule") }} className="button">
                            Event Schedule
                        </button>
                        <button
                            onClick={e => { e.preventDefault(); props.history.push("register") }}
                            className="button">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Event);