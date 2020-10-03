import React from 'react';
const NewsCard = props => {
    const {data} = props;
    const {day,date,title,text,img} = data;
    return (
        <React.Fragment>
            <div className="ns-section col-lg-12">
                <div className="ns-imgContainer">
                    <img src={img} />
                </div>
                <div className="ns-infoContainer">
                    <div className="ns-infoDate">
                        <span>{day}</span>
                        <span>{date}</span>
                    </div>
                    <h1 className="ns-infoTitle">
                        {title}
                    </h1>
                    <p className="ns-text">
                        {text}
                    </p>
                    {/* <a href="" className="button ns-button">
                        Read more
                    </a> */}
                </div>
            </div>
        </React.Fragment>
    );
};

export default NewsCard;