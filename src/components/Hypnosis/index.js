import React , { Component } from 'react';
import { TimelineMax } from 'gsap';
import Waypoint from 'react-waypoint';
import './style.css';

class Hypnosis extends Component {
    constructor(props) {
        super(props);
        this.spike = this.spike.bind(this);
        this.state = {
			animationEntered: false,
        }
    }

    componentDidMount() {
        this.lsdtl = new TimelineMax({paused: true});
        this.entertl = new TimelineMax({paused: true})

        const {
            lsdtl,
            entertl,
        } = this;

        lsdtl.to("#LSDCapsule", 1, {transformOrigin: "50% 50%", scaleY:1.2, scaleX: 1.2, yoyo: true, repeat: -1}, "entice")
        .to("#TopCapsule", 0.5, {fill: "#74BCFF", yoyo: true, repeat: -1}, "entice")   

        entertl.to("#LSDCapsule", 1, {transformOrigin: "50% 50%", rotation: 90, scaleX: 0.5, scaleY: 0.5, y:2})
        .from("#Glass", 0.8, {autoAlpha: 0, x: 2})
        .to("#LSDCapsule", 0.6, {y:380, autoAlpha: 0}, "drop")
        .from("#GlassCapsule", 0.6, {delay: 0.35, autoAlpha: 0, y: 0.5}, "drop")
        .from("#GlassCapsule", 0.7, {transformOrigin: "50% 50%", rotation: 80, yoyo: true})
        .to("#TopCapsuleG", 0.8, {y:-35}, "broken")
        .to("#BottomCapsule", 0.8, {y:65}, "broken")
        .to("#One", 1, {x: -50, autoAlpha: 1, fill: "#A23434"})
        .to("#Two", 0.2, {x: -50, autoAlpha: 1, fill: "#A23434"})
        .to("#Three", 0.7, {x: -50, autoAlpha: 1, fill: "#A23434"})
        .to("#Four", 1.2, {x: -50, autoAlpha: 1, fill: "#A23434"})
        .to("#Five", 0.9, {x: -50, autoAlpha: 1, fill: "#A23434"})
        .to("#Six", 0.4, {x: -50, autoAlpha: 1, fill: "#A23434"})
        .to("#Seven", 0.6, {x: -50, autoAlpha: 1, fill: "#A23434"})
        .to("#GlassCapsule", 1, {autoAlpha: 0}, "changed")
        .to("#Liquor", 1, {fill: "#942D2D"}, "change")
        .to("#Liquor-top", 1, {fill: "#AE3F3F"}, "change")
    }

    onEnter = () => {
        const {
            animationEntered
        } = this.state;

        if (animationEntered) {
            return;
        }
        else {
            this.runAnimation();

            this.setState({
                animationEntered: true,
            });
        }
    }

    runAnimation = () => {
        console.log('Animation entered');
		this.lsdtl.play(0, false).delay(1);
    }

    spike() {
        this.entertl.play(0, false)
    }

    render() {
        return (
<div className="c-preventFlow">
<div className="c-Hypnosis">
<Waypoint onEnter={this.onEnter}>
<svg id="Hypnosis" width="720px" height="800px" viewBox="0 0 720 800">
    <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect fill="#C93030" x="0" y="0" width="720" height="800"></rect>
    </g>
</svg>
</Waypoint>
<div className="c-Hypnosis_info">
<span className="redacted">Psychological - Hypnosis</span>
<p> Used in combination with ECT and LSD, results incuded permanent amnesia. </p>
</div>
</div>
</div>
            )
        }
    }
export default Hypnosis;