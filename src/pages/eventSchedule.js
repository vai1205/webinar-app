import React from 'react';
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import { scheduleData } from '../resources/scheduleData';
import FooterSection from '../components/footerSection';
import { withRouter } from 'react-router-dom';
import BackBtn from '../components/backBtn';
const EventSchedule = props => {
    const columnStyle = {
        backgroundColor: 'red',
        color: "#fff",
        fontSize: "20px"
    }
    return (
        <div className="schedule-page">
            <BackBtn backPath="event"/>
            <div className="row">
                <div className="col-md-8">
                    <div className="event-schedule-page pt-5">
                        <h1>ECHO-DELHI MIDTERM</h1>
                        <h2>Virtual 2020</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo cum pariatur quaerat aperiam rem, ducimus itaque est maxime ullam delectus aut laudantium accusamus possimus ipsam esse vel laboriosam exercitationem natus!</p>
                        <div className="sub-heading">
                            <h3>Sunday, October 11th, 2020</h3>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <h3>3.00-9.00 pm</h3>
                        </div>
                        <h4>Strictly, Case-based 6-hour session</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src="meet.png" />
                </div>
            </div>
            <div className="schedule-table mt-5">
                <div style={{ maxWidth: "90%", margin: "0 auto" }}>
                    <MaterialTable
                        columns={[
                            { title: "SNo.", field: "num", headerStyle: columnStyle },
                            { title: "Topic", field: "topic", headerStyle: columnStyle },
                            { title: "Presenter(s)", field: "presenter", headerStyle: columnStyle },
                            { title: "Timing", field: "timing", headerStyle: columnStyle },
                        ]}
                        data={scheduleData.map(d => d)}
                        title="Event Schedule"
                    />
                </div>
            </div>
            <div className="mt-5 mb-5 spacer" style={{ height: "5rem" }}>
                <button className="button" 
                onClick={e=>{e.preventDefault(); props.history.push("register")}}>
                Register Now!
                </button>
            </div>
            <FooterSection/>
        </div>
    )
}
export default withRouter(EventSchedule);