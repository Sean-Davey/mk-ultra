import React , { Component } from 'react';
import { TimelineMax } from 'gsap';
import Waypoint from 'react-waypoint';
import './style.css';

class LSD extends Component {
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
<div className="c-LSD">
<Waypoint onEnter={this.onEnter}>
<svg id="LSD" height="800px" width="720px" viewBox="0 0 720 800">
	<g id="Artboard" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
		<rect height="800" width="720" fill="#C93030" x="0" y="0"/>
		<g onClick={this.spike} id="LSDCapsule" fillRule="nonzero" transform="translate(315.000000, 296.000000)">
			<g id="Powder" fill="#FFFFFF" transform="translate(30.000000, 56.000000)">
				<circle id="Seven" cx="4.5" cy="4.5" r="4.5"/>
				<circle id="Six" cx="28.5" cy="11.5" r="7.5"/>
				<circle id="Five" cx="6.5" cy="29.5" r="6.5"/>
				<circle id="Four" cx="25.5" cy="40.5" r="4.5"/>
				<circle id="Three" cx="8" cy="58" r="8"/>
				<circle id="Two" cx="27.5" cy="72.5" r="6.5"/>
				<circle id="One" cx="8.5" cy="88.5" r="4.5"/>
				<circle id="Zero" cx="28.5" cy="100.5" r="7.5"/>
			</g>
			<g id="BottomCapsule" transform="translate(0.000000, 37.000000)">
				<path id="Rectangle" d="M47.9504916,11 L47.9504916,11 C70.0145389,11 87.9009832,28.8864443 87.9009832,50.9504916 L87.9009832,130.272378 C87.9009832,152.336425 70.0145389,170.222869 47.9504916,170.222869 L47.9504916,170.222869 C25.8864443,170.222869 8,152.336425 8,130.272378 L8,50.9504916 C8,28.8864443 25.8864443,11 47.9504916,11 Z" fill="#FFFFFF"/>
				<polygon id="Path-2" fill="#C93030" points="0.961856516 18.4862595 19.7611086 71.8971068 31.1664876 45.1916831 49.7769982 96.265731 49.7769982 51.9204672 69.9633505 66.0940548 89.1490733 23.4504604 43 0.358088214"/>
			</g>
			<path id="TopCapsule" d="M47.1810194,-3.28760287 C71.1780633,-3.28760287 90.6315111,16.1658449 90.6315111,40.1628887 L90.6315111,86.5421122 C90.6315111,110.539156 71.1780633,129.992604 47.1810194,129.992604 C23.1839755,129.992604 3.73052783,110.539156 3.73052783,86.5421122 L3.73052783,40.1628887 C3.73052783,16.1658449 23.1839755,-3.28760287 47.1810194,-3.28760287 Z" fill="#3BA0FF" stroke="#C93030" strokeWidth="7"/>
			<path id="BShade" d="M8.45687774,118.453461 C15.7419076,126.615927 21.491371,131.723754 25.7052679,133.776941 C32.0261134,136.856721 36.8966696,140.619398 46.5616354,140.619398 C56.2266011,140.619398 58.4852363,138.60801 65.3806469,134.739864 C69.9775873,132.1611 76.3525027,127.13987 84.5053929,119.676176 C85.5472392,139.76421 85.855684,154.932375 85.4307273,165.180673 C85.0057707,175.42897 82.6929803,183.469585 78.4923562,189.302516 C81.4346619,182.541487 82.9058148,170.712018 82.9058148,153.814108 C82.9058148,148.182011 82.4232072,139.65159 81.457992,128.222843 C74.918549,133.384279 70.1458299,136.86943 67.1398347,138.678296 C59.3736606,143.351611 52.3877352,145.736408 46.5616354,145.610266 C32.748589,145.311197 26.7086104,141.1496 20.2116941,135.746968 C15.8804165,132.145214 11.9621444,126.380712 8.45687774,118.453461 Z" fill="#F3F3F3"/>
			<g id="TShade" fill="#4A95D6" transform="translate(11.000000, 5.000000)">
				<path id="Path-10" d="M1.6580373,92.0491951 C0.405945993,55.2381017 -0.061134729,34.3112576 0.256795135,29.2686627 C0.733689931,21.7047704 3.810565,18.4748177 5.9897465,15.3150045 C8.16892801,12.1551913 17.2354798,0.824548091 35.9705163,0.824548091 C48.4605406,0.824548091 59.626106,6.92643973 69.4672125,19.130223 C59.626106,9.72012107 48.4605406,5.0150701 35.9705163,5.0150701 C17.2354798,5.0150701 12.9741333,12.1285445 8.81222679,17.6269668 C6.03762246,21.2925817 4.6503203,25.173147 4.6503203,29.2686627 L1.6580373,92.0491951 Z"/>
				<path id="Path-12" d="M3.01228297,97.1141135 C13.4367959,111.203111 24.302126,118.247609 35.6082735,118.247609 C46.9144209,118.247609 58.5144675,111.203111 70.4084132,97.1141135 C54.9392775,108.82973 43.3392309,114.687538 35.6082735,114.687538 C27.877316,114.687538 17.0119859,108.82973 3.01228297,97.1141135 Z"/>
			</g>
		</g>
		<g id="Glass" fillRule="nonzero" transform="translate(160.000000, 381.000000)">
			<path id="Liquor-top" d="M7.81989871,87.4826768 C52.1856368,106.202848 116.166422,115.562934 199.762253,115.562934 C283.358085,115.562934 347.33887,106.202848 391.704608,87.4826768 C356.469742,61.7290968 292.488957,48.8523068 199.762253,48.8523068 C107.03555,48.8523068 43.054765,61.7290968 7.81989871,87.4826768 Z" fill="#BD4646"/>
			<path id="Liquor" d="M5.43728682,87.185133 C58.173231,99.5680826 122.856693,105.759557 199.487672,105.759557 C276.118651,105.759557 340.802113,99.5680826 393.538057,87.185133 L373.265794,342.970722 C293.504147,352.533138 233.682912,357.314345 193.802089,357.314345 C153.921266,357.314345 97.9532359,352.533138 25.8979997,342.970722 L5.43728682,87.185133 Z" fill="#A23434"/>
			<path id="Path-3" d="M0,6 L14.4468601,340.007678 C68.9147307,352.019543 130.741971,358.025476 199.928582,358.025476 C269.115192,358.025476 330.01604,352.019543 382.631126,340.007678 L399.857164,6 L365.382113,306.277756 C338.473615,320.845986 283.322437,328.130102 199.928582,328.130102 C116.534726,328.130102 61.070905,320.845986 33.5371185,306.277756 L0,6 Z" fill="#FFFFFF"/>
			<path id="Path-6" d="M4.7938053,88.2783015 C91.6160685,94.0008457 156.792678,96.8621178 200.323634,96.8621178 C243.854591,96.8621178 308.87977,94.0008457 395.399173,88.2783015 C330.525424,99.7233899 265.500244,105.445934 200.323634,105.445934 C135.147025,105.445934 69.970415,99.7233899 4.7938053,88.2783015 Z" fill="#FFFFFF"/>
			<path id="Path-6" d="M12.6633039,47.2783015 C47.4591931,68.7917831 109.679303,79.548524 199.323634,79.548524 C288.967966,79.548524 350.909461,68.7917831 385.148121,47.2783015 C343.748975,74.5143273 281.80748,88.1323402 199.323634,88.1323402 C116.839789,88.1323402 54.6196792,74.5143273 12.6633039,47.2783015 Z" fill="#B83B3B" transform="translate(198.905712, 67.705321) scale(1, -1) translate(-198.905712, -67.705321) "/>
			<path id="Path-7" d="M22.0569447,97.9372618 L48.127122,295.896168 C57.6887136,300.951725 74.4689405,305.306403 98.4678028,308.960204 C122.466665,312.614005 155.863034,315.363358 198.65691,317.208265 C157.558681,311.264537 126.470611,305.600061 105.392701,300.214837 C84.3147904,294.829613 68.6511304,290.691654 58.4017208,287.800962 L22.0569447,97.9372618 Z" fill="#842B2B"/>
			<polygon id="Path-8" fill="#FFFFFF" points="4.67281152 6.2094593 200.673851 0.994219998 396.67489 6.2094593 200.673851 12.6047296"/>
			<path id="Path-9" d="M353.382388,297.996955 L377.212641,102 C345.533552,106.071407 317.657675,108.797696 293.585009,110.178868 C269.512343,111.560041 243.560474,112.527821 215.729401,113.08221 C246.450186,115.385872 272.402055,116.314561 293.585009,115.868276 C314.767963,115.421991 339.316762,114.493302 367.231406,113.08221 L353.382388,297.996955 Z" fill="#BD4646"/>
			<g id="GlassCapsule" transform="translate(209.000000, 251.500000) rotate(-270.000000) translate(-209.000000, -251.500000) translate(185.000000, 196.000000)">
				<ellipse id="Seven" cx="18.375" cy="32.4166667" fill="#FFFFFF" rx="2.375" ry="2.41666667"/>
				<ellipse id="Six" cx="31.0416667" cy="36.1759259" fill="#FFFFFF" rx="3.95833333" ry="4.02777778"/>
				<ellipse id="Five" cx="19.4305556" cy="45.8425926" fill="#FFFFFF" rx="3.43055556" ry="3.49074074"/>
				<ellipse id="Four" cx="29.4583333" cy="51.75" fill="#FFFFFF" rx="2.375" ry="2.41666667"/>
				<ellipse id="Three" cx="20.2222222" cy="61.1481481" fill="#FFFFFF" rx="4.22222222" ry="4.2962963"/>
				<ellipse id="Two" cx="30.5138889" cy="68.9351852" fill="#FFFFFF" rx="3.43055556" ry="3.49074074"/>
				<ellipse id="One" cx="20.4861111" cy="77.5277778" fill="#FFFFFF" rx="2.375" ry="2.41666667"/>
				<ellipse id="Zero" cx="31.0416667" cy="83.9722222" fill="#FFFFFF" rx="3.95833333" ry="4.02777778"/>
				<g id="BottomCapsule" transform="translate(0.000000, 20.000000)">
					<path id="Rectangle" d="M25.5735955,5.85380117 L25.5735955,5.85380117 C37.3410874,5.85380117 46.8805244,15.3932382 46.8805244,27.16073 L46.8805244,69.2795104 C46.8805244,81.0470022 37.3410874,90.5864392 25.5735955,90.5864392 L25.5735955,90.5864392 C13.8061037,90.5864392 4.26666667,81.0470022 4.26666667,69.2795104 L4.26666667,27.16073 C4.26666667,15.3932382 13.8061037,5.85380117 25.5735955,5.85380117 Z" fill="#BD4646"/>
					<polygon id="Path-2" fill="#A23434" points="0.512990142 9.83771703 10.5392579 38.2610334 16.6221267 24.0493752 26.5477324 51.2291317 26.5477324 27.6301902 37.3137869 35.1728596 47.5461724 12.4794848 22.9333333 0.190561564"/>
				</g>
				<path id="TopCapsuleG" d="M25.5,-3.5 C39.3071187,-3.5 50.5,7.69288125 50.5,21.5 L50.5,45.5 C50.5,59.3071187 39.3071187,70.5 25.5,70.5 C11.6928813,70.5 0.5,59.3071187 0.5,45.5 L0.5,21.5 C0.5,7.69288125 11.6928813,-3.5 25.5,-3.5 Z" fill="#742020" stroke="#A23434" strokeWidth="7"/>
			</g>
		</g>
	</g>
</svg>
</Waypoint>
<div className="c-LSD_info">
<span onClick={function() {}} className="redacted">Chemical - LSD</span>
<p> Supplied to individuals unwittingly to test reactions of the mind under stress. </p>
</div>
</div>
</div>
            )
        }
    }
export default LSD;