import * as React from 'react';
import "./container.module.css";
import { header, subtitle, container, joinContainer, buttonCenter} from "./container.module.css";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Container = (props) => {
    const bannerTitle = props.bannerTitle;
    const bannerSubtitle = props.bannerSubtitle;
    const bannerImage = props.bannerImage;
    return (
        <Card className={container}>
            <Card.Img variant="overlay" src={bannerImage} />
            <Card.ImgOverlay>
                <Card.Body>
                    <Card.Title className={header}>{bannerTitle}</Card.Title>
                    <Card.Text className={subtitle}>
                        {bannerSubtitle}
                    </Card.Text>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    )
}

const JoinContainer = (props) => {
    const bannerTitle = props.bannerTitle;
    const bannerSubtitle = props.bannerSubtitle;
    const bannerImage = props.bannerImage;
    return (
        <Card className={joinContainer}>
            <Card.Img variant="overlay" src={bannerImage}/>
            <Card.ImgOverlay>
                <Card.Body>
                    <Card.Title className={header}>{bannerTitle}</Card.Title>
                    <Card.Text className={subtitle}>
                        {bannerSubtitle}
                    </Card.Text>
                    <div className={buttonCenter}>
                        <Button href="/" variant="outline-primary" size="lg">Learn More</Button>
                    </div>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
        // <div className={joinContainer}>
        //     <div className={subtitle}>
        //         {bannerSubtitle}
        //     </div>
        //     <div className={header}>
        //         {bannerTitle}
        //     </div>
        //     
        // </div>
    )
}

export {JoinContainer};

export default Container;