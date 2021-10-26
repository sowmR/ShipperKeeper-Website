import * as React from 'react';
import "./container.module.css";
import { header, subtitle, container, joinContainer} from "./container.module.css";

const Container = (props) => {
    const bannerTitle = props.bannerTitle;
    const bannerSubtitle = props.bannerSubtitle;
    return (
        <div className={container}>
            <div className={header}>
                <h1>{bannerTitle}</h1>
            </div>
            <div className={subtitle}>
                <p>{bannerSubtitle}</p>
            </div>
        </div>
    )
}

const JoinContainer = (props) => {
    const bannerTitle = props.bannerTitle;
    const bannerSubtitle = props.bannerSubtitle;
    return (
        <div className={joinContainer}>
            <div className={subtitle}>
                <p>{bannerSubtitle}</p>
            </div>
            <div className={header}>
                <h1>{bannerTitle}</h1>
            </div>
        </div>
    )
}

export {JoinContainer};

export default Container;