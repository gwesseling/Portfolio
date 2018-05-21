// @flow
import React, {Component} from 'react';
import '../css/components/banner.css';
// import BannerVideo from '../video/banner.mp4';
import BannerImage from '../img/banner.jpg';

type bannerProps = {
    position: string,
}

/**
 * Banner.
 */
class Banner extends Component<bannerProps> {
    /**
     * @inheritDoc
     */
    render() {
        const {position} = this.props;
        return (
            <div className="banner">
                <img className="banner-media" alt="banner" src={BannerImage} style={{objectPosition: position}}/>
                {/* <video*/}
                {/* className="banner-media"*/}
                {/* src={BannerVideo}*/}
                {/* muted={true}*/}
                {/* autoPlay={true}*/}
                {/* />*/}
                <div className="banner-overlay">
                    <div className="banner-content">
                        <p className="title">Hi, my name is Gerard Wesseling.</p>
                        <p className="title">A developer who wants to change the world.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
