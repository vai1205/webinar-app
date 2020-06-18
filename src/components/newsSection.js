import React from 'react';
import NewsCard from './newsCard';
import { newsData } from '../resources/newsData';

const NewsSection = props => {
    return (
        <React.Fragment>
            <div className="container" style={{ marginTop: "5rem" }}>
                <h2 className="ns-subheading text-center">Latest News</h2>
                <h3 className="ns-heading text-center">Read them all to be updated!</h3>
                <div className="row">
                    {
                        newsData.map((n, i) => <NewsCard key={i} data={n} />)
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default NewsSection;