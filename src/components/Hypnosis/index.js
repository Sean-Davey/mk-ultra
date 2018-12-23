import React , { Component } from 'react';
import { TimelineMax } from 'gsap';
import Waypoint from 'react-waypoint';
import './style.css';

class Hypnosis extends Component {
    constructor(props) {
        super(props);
        this.eyeSeeYou = this.eyeSeeYou.bind(this);
        this.state = {
			animationEntered: false,
        }
    }

    componentDidMount() {
        this.eyetl = new TimelineMax({paused: true, repeat: -1});
        this.hypnosistl = new TimelineMax({paused: true})

        const {
            eyetl,
            hypnosistl,
        } = this;

        eyetl.from("#EyeLid", 0.2, {transformOrigin: "50% 0%", scaleY: 0, autoAlpha: 0, repeat: 1, yoyo: true})
        .to("#Pupil", 1, {transformOrigin: "50% 50", x:200, y:120})
        .to("#Pupil", 2, {transformOrigin: "50% 50", x:270, y:140, rotation: 20})
        .to("#EyeLid", 0.2, {transformOrigin: "50% 0%", scaleY: 1, autoAlpha: 1, repeat: 3, yoyo: true})
        .to("#Pupil", 1, {transformOrigin: "50% 50", x:233, y:111, rotation: 0})
        eyetl.timeScale(1.2);

        hypnosistl.to("#EyeLid", 0.2, {transformOrigin: "50% 0%", scaleY: 1, autoAlpha: 1}, "oldNew")
        .to("#Pupil",0.2, {autoAlpha: 0}, "oldNew")
        .to("#InnerSpiral, #Spiral", 0, {autoAlpha: 1})
        .to("#EyeLid", 0.2, {transformOrigin: "50% 0%", scaleY: 0, autoAlpha: 0}, "new")
        .to("#SpyralOne", 0.5, {transformOrigin: "50% 50%", rotation: 10000, repeat: -1, yoyo: true}, "new")
        .to("#SpyralTwo", 0.5, {transformOrigin: "50% 50%", rotation: -10000, repeat: -1, yoyo: true}, "new")
        .to("#WSpyral", 0.5, {transformOrigin: "50% 50%", rotation: 6000, repeat: -1, yoyo: true}, "new")
        .to("#BSpyral", 0.5, {transformOrigin: "50% 50%", rotation: -6000, repeat: -1, yoyo: true}, "new")
        hypnosistl.timeScale(0.5);

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
		this.eyetl.play(0, false).delay(1);
    }

    eyeSeeYou() {
        this.eyetl.kill()
        this.hypnosistl.play(0, false)
    }

    render() {
        return (
<div className="c-preventFlow">
<div className="c-Hypnosis">
<Waypoint onEnter={this.onEnter}>
<svg id="Hypnosis" viewBox="0 0 720 800">
	<g id="Artboard" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
		<rect height="800" width="720" fill="#C93030" x="0" y="0"/>
		<g onClick={this.eyeSeeYou} id="Eye" fillRule="nonzero" transform="translate(65.000000, 229.000000)">
			<path id="Path-4" d="M0,169.519418 C94.2616958,56.5064728 190.970126,7.05940834e-15 290.125292,0 C389.280457,0 489.238693,56.5064728 590,169.519418 C491.666667,285.173139 393.333333,343 295,343 C196.666667,343 98.3333333,285.173139 0,169.519418 Z" fill="#9C2B2B"/>
			<path id="Triangle" d="M293,25 C382.666667,25 472.333333,73 562,169 C442.567837,171.398992 352.90117,172.598488 293,172.598488 C233.09883,172.598488 143.432163,171.398992 24,169 C113.666667,73 203.333333,25 293,25 Z" fill="#313131"/>
			<path id="Triangle" d="M293,169 C382.666667,169 472.333333,217 562,313 L24,313 C113.666667,217 203.333333,169 293,169 Z" fill="#313131" transform="translate(293.000000, 241.000000) scale(1, -1) translate(-293.000000, -241.000000) "/>
			<circle id="Oval" cx="293.5" cy="170.5" fill="#C93030" r="130.5"/>
			<path id="Path-2" d="M41.8305949,170 C88.1276774,124.503048 125.677559,94.2968745 154.480239,79.3814783 C197.684259,57.008384 224.22071,39.9325491 293,39.9325491 C361.77929,39.9325491 387.305933,56.8082775 430.43004,79.3814783 C459.179445,94.4302788 496.196892,124.636453 541.482381,170 C495.692083,214.833831 458.674636,244.470419 430.43004,258.909763 C388.063146,280.56878 362.198913,297.030412 293,297.030412 C223.801087,297.030412 197.926017,280.882722 154.480239,258.909763 C125.516387,244.261124 87.9665055,214.624536 41.8305949,170 Z" stroke="#C93030" strokeWidth="9"/>
			<path id="Path-3" d="M169.608658,75.7533534 C133.2728,96.9994043 106.914583,113.586975 90.5340069,125.516066 C74.1534312,137.445157 56.9754289,152.24789 39,169.924266 L96.2493547,213.610815 L50.7319631,169.924266 C65.5937584,152.709575 80.7662222,137.906842 96.2493547,125.516066 C111.732487,113.12529 136.185588,96.5377192 169.608658,75.7533534 Z" fill="#FFFFFF"/>
			<path id="Path-3" d="M544.608658,76 C527.015133,85.224211 514.526685,92.1123215 507.143313,96.6643313 C489.606891,107.475917 475.573917,118.451187 465.534007,125.762713 C449.153431,137.691803 431.975429,152.494537 414,170.170913 L471.249355,213.857462 L425.731963,170.170913 C440.593758,152.956222 455.766222,138.153488 471.249355,125.762713 C486.732487,113.371937 511.185588,96.7843658 544.608658,76 Z" fill="#FFFFFF" transform="translate(479.304329, 144.928731) scale(-1, 1) translate(-479.304329, -144.928731) "/>
			<g id="Pupil" transform="translate(233.000000, 111.000000)">
				<circle id="Oval" cx="62" cy="62" fill="#1E1E1E" r="62"/>
				<circle id="Oval-2" cx="97.5" cy="26.5" fill="#C93030" r="26.5"/>
			</g>
		</g>
		<g id="InnerSpiral" fillRule="nonzero" transform="translate(295.000000, 338.000000)">
			<polygon id="SpyralTwo" fill="#FFFFFF" points="65 20.7894089 17.7190332 62 65 107.699542 111.992181 60.1327396"/>
			<polygon id="SpyralOne" fill="#242424" points="65 20.7894089 17.7190332 62 65 107.699542 111.992181 60.1327396" transform="translate(64.855607, 64.244476) rotate(-315.000000) translate(-64.855607, -64.244476) "/>
		</g>
		<g id="Spiral" fillRule="nonzero" transform="translate(231.000000, 288.000000)">
			<polygon id="WSpyral" fill="#FFFFFF" points="121.965798 0 51.9909182 26.9266021 0 106.496475 43.830332 205.717724 124.25523 225.055162 209.21266 203.419833 245.235676 108.493983 204.713159 20.6182529 124.25523 13.5595496 64.2964598 43.5128722 28.8572706 108.493983 64.2964598 182.560772 124.25523 198.074233 191.754343 182.560772 209.21266 108.493983 191.754343 48.3615579 124.25523 43.5128722 72.5324522 61.768701 51.9909182 108.493983 81.9758933 165.882577 69.2927134 108.493983 81.9758933 71.8050633 124.25523 61.768701 181.493881 64.6674316 191.754343 110.574073 177.649713 169.451954 124.25523 182.560772 72.5324522 172.446526 43.830332 108.493983 69.2927134 53.1600392 124.25523 30.6011218 197.674817 34.5939473 221.157954 106.496475 197.674817 187.594293 124.25523 208.53831 58.8753631 187.594293 19.9509271 108.493983 58.8753631 38.55637"/>
			<polygon id="BSpyral" fill="#242424" points="132.965798 7 62.9909182 33.9266021 11 113.496475 54.830332 212.717724 135.25523 232.055162 220.21266 210.419833 256.235676 115.493983 215.713159 27.6182529 135.25523 20.5595496 75.2964598 50.5128722 39.8572706 115.493983 75.2964598 189.560772 135.25523 205.074233 202.754343 189.560772 220.21266 115.493983 202.754343 55.3615579 135.25523 50.5128722 83.5324522 68.768701 62.9909182 115.493983 92.9758933 172.882577 80.2927134 115.493983 92.9758933 78.8050633 135.25523 68.768701 192.493881 71.6674316 202.754343 117.574073 188.649713 176.451954 135.25523 189.560772 83.5324522 179.446526 54.830332 115.493983 80.2927134 60.1600392 135.25523 37.6011218 208.674817 41.5939473 232.157954 113.496475 208.674817 194.594293 135.25523 215.53831 69.8753631 194.594293 30.9509271 115.493983 69.8753631 45.55637" transform="translate(133.617838, 119.527581) scale(-1, -1) translate(-133.617838, -119.527581) "/>
		</g>
		<path id="EyeLid" d="M57.4804196,400.5 C157.498448,282.664448 257.085044,223.746672 356.24021,223.746672 C455.395375,223.746672 558.178716,282.664448 664.590232,400.5 C560.553628,521.644811 459.368659,582.217216 361.035326,582.217216 C262.701993,582.217216 161.517024,521.644811 57.4804196,400.5 Z" fill="#C93030" fillRule="nonzero"/>
	</g>
</svg>
</Waypoint>
<div className="c-Hypnosis_info">
<span onClick={function() {}} className="redacted">Psychological - Hypnosis</span>
<p> Used in combination with ECT and LSD, results incuded permanent amnesia. </p>
</div>
</div>
</div>
            )
        }
    }
export default Hypnosis;