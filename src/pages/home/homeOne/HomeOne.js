import React, { Component } from 'react';
import HeaderHome from './headerHome/HeaderHome';
import Forcast from './forcast/Forcast';
import WhyBufet from './whyBufet/WhyBufet';
import ExplainBufet from './explainBufet/ExplainBufet';
import AdvanceFeatures from './advanceFeatures/AdvanceFeatures';
import ScreenShots from './screenShots/ScreenShots';
import WatchVideo from './watchVideo/WatchVideo';
import FactArea from './factArea/FactArea';
import Testimonials from './testimonials/Testimonials';
import SelectPlan from './selectPlan/SelectPlan';
import Questions from './questions/Questions';
import Blog from './blog/Blog';
import AppMobile from './appMobile/AppMobile';
import ScollToTop from './scollToTop/ScollToTop';

class HomeOne extends Component {
    render() {
        return (
            <div>
                <HeaderHome/>
                <ScollToTop/>
                <Forcast/>
                <WhyBufet/>
                <ExplainBufet/>
                <AdvanceFeatures/>
                <ScreenShots/>
                <WatchVideo/>
                <FactArea/>
                <Testimonials/>
                <SelectPlan/>
                <Questions/>
                <AppMobile/>
                <Blog/>
            </div>
        );
    }
}

export default HomeOne;