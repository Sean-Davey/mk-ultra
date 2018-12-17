import React , { Component } from 'react';
import { TimelineMax } from 'gsap';
import Waypoint from 'react-waypoint';
import './style.css';

class Radiological extends Component {
    constructor(props) {
        super(props);
        this.turnOn = this.turnOn.bind(this);
        this.state = {
            animationEntered: false,
            toggle: false,
        }
    }

    componentDidMount() {
        this.radiotl = new TimelineMax({paused: true});
        this.toggletl = new TimelineMax({paused: true})

        const {
            radiotl,
            toggletl,
        } = this;

        radiotl.to("#RadioDetected", 1, {fill: "orange", yoyo: true, repeat: -1}) 

        toggletl.to("#NFSwitch", 1, {transformOrigin: "42% 50%", rotation: 90}, "on")
        .to("#RadioDetected", 1, {fill: "green"}, "on")
        .to("#Needle", 0.02, {delay: 0.5, transformOrigin: "50% 80%", rotation: 35, yoyo: true, repeat: -1}, "on")
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
		this.radiotl.play(0, false).delay(1);
    }

    turnOn() {
{(this.state.toggle === false) ? 
    (this.radiotl.kill(), this.toggletl.play(0, false), this.setState({toggle: true})) : 
        (this.setState({toggle: false}), this.toggletl.reverse(1), this.radiotl.play(0, true))}
        }

    render() {
        return (
<div className="c-preventFlow">
<div className="c-radio">
<div className="c-radio_info">
<span className="redacted">Radiological - Radiation</span>
<p> Radioactive materials exposed to men, pregnant women and children to purposely promote disability and development of a 'knockout pill'. </p>
</div>
<Waypoint onEnter={this.onEnter}>
<svg id="Radiological" height="800px" width="720px" viewBox="0 0 720 800">
	<g id="Artboard" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
		<rect height="800" width="720" fill="#C93030" x="0" y="0"/>
		<g id="Body-Details" fillRule="nonzero" transform="translate(148.000000, 95.000000)">
			<rect height="505" id="Rectangle-4" width="88" fill="#D8D8D8" x="336" y="69"/>
			<rect height="18" id="Case" width="83" fill="#D8D8D8" rx="9" x="171" y="2"/>
			<rect height="18" id="Case" width="83" fill="#D8D8D8" rx="9" x="171" y="644"/>
			<rect height="239" id="Panel" width="48" fill="#D8D8D8" x="0" y="69"/>
			<rect height="239" id="Panel" width="48" fill="#D8D8D8" x="0" y="335"/>
			<rect height="639" id="Body" width="390" fill="#676767" rx="10" x="17" y="11"/>
			<rect height="379" id="Handle" width="26" fill="#595959" rx="4" x="198" y="296"/>
			<circle id="Oval-3" cx="66" cy="63" fill="#3A3A3A" r="34"/>
			<polygon id="Path-2" fill="#3A3A3A" points="32 63.3866401 32 7.21051151 100 7.21051151 100 63.3866401"/>
			<rect height="13" id="Rectangle-5" width="71" fill="#3A3A3A" rx="6.5" x="32" y="0"/>
			<polygon id="Path-4" fill="#3A3A3A" points="234.225886 646.407754 234.225886 504.922494 245.553652 482.80845 234.225886 463.287223 234.225886 422.730976 245.553652 405.66423 234.225886 388.684439 234.225886 310.417719 331.556641 258.608004 349.495587 188.654117 342.306826 266.472731 245.553652 320.879895 245.553652 379.601673 262.387202 405.66423 245.553652 429.216972 245.553652 463.287223 256.723319 482.80845 245.553652 504.922494"/>
		</g>
		<g id="Counter" fillRule="nonzero" transform="translate(242.000000, 139.000000)">
			<circle id="Oval" cx="118.5" cy="131.5" fill="#DCDCDC" r="117.5"/>
			<path id="Path-3" d="M0.613839001,159.582304 L236.628611,159.582304 C234.388781,109.291955 226.022994,75.1547294 211.531249,57.1706273 C197.039504,39.1865252 166.069496,24.5084447 118.621225,13.1363857 C72.6553501,23.2427518 41.9165871,37.9208324 26.404936,57.1706273 C10.8932849,76.4204222 2.29625259,110.557648 0.613839001,159.582304 Z" fill="#FAFAFA"/>
			<rect height="34" id="Rectangle-8" width="3" fill="#595959" x="117" y="28"/>
			<rect height="34" id="Rectangle-8" width="3" fill="#595959" transform="translate(24.000000, 130.500000) rotate(-270.000000) translate(-24.000000, -130.500000) " x="22.5" y="113.5"/>
			<rect height="34" id="Rectangle-8" width="3" fill="#595959" transform="translate(214.000000, 130.500000) rotate(-270.000000) translate(-214.000000, -130.500000) " x="212.5" y="113.5"/>
			<rect height="34" id="Rectangle-8" width="3" fill="#595959" transform="translate(47.081475, 68.081475) rotate(-45.000000) translate(-47.081475, -68.081475) " x="45.5814755" y="51.0814755"/>
			<rect height="34" id="Rectangle-8" width="3" fill="#595959" transform="translate(189.918525, 68.081475) scale(1, -1) rotate(-45.000000) translate(-189.918525, -68.081475) " x="188.418525" y="51.0814755"/>
			<circle id="Oval-4" cx="118.5" cy="14.5" fill="#595959" r="14.5"/>
			<circle id="Oval-4" cx="23.5" cy="198.5" fill="#595959" r="14.5"/>
			<circle id="Oval-4" cx="214.5" cy="198.5" fill="#595959" r="14.5"/>
			<circle id="Oval" cx="118.5" cy="131.5" r="117.5" stroke="#595959" strokeWidth="13"/>
			<g id="Needle" transform="translate(86.000000, 89.000000)">
				<polygon id="Rectangle-7" fill="#484848" points="32 0 32.9857683 0 37 124 28 124"/>
				<circle id="Oval-6" cx="32.5" cy="130.5" fill="#595959" r="32.5"/>
			</g>
		</g>
		<g id="Bolts" fillRule="nonzero" transform="translate(172.000000, 704.000000)">
			<ellipse id="Oval-2" cx="17" cy="17.5" fill="#D8D8D8" rx="17" ry="16.5" stroke="#979797"/>
			<polygon id="Rectangle-2" fill="#979797" points="30.9521846 0 35.3739253 4.3290004 4.42174066 34.6320032 0 30.3030028"/>
		</g>
		<g id="Bolts" fillRule="nonzero" transform="translate(513.000000, 113.000000)">
			<ellipse id="Oval-2" cx="17" cy="17.5" fill="#D8D8D8" rx="17" ry="16.5" stroke="#979797"/>
			<polygon id="Rectangle-2" fill="#979797" points="30.9521846 0 35.3739253 4.3290004 4.42174066 34.6320032 0 30.3030028"/>
		</g>
		<g id="Bolts" fillRule="nonzero" transform="translate(360.000000, 500.500000) rotate(-316.000000) translate(-360.000000, -500.500000) translate(342.000000, 483.000000)">
			<ellipse id="Oval-2" cx="17" cy="17.5" fill="#D8D8D8" rx="17" ry="16.5" stroke="#979797"/>
			<polygon id="Rectangle-2" fill="#979797" points="30.9521846 0 35.3739253 4.3290004 4.42174066 34.6320032 0 30.3030028"/>
		</g>
		<g id="Bolts" fillRule="nonzero" transform="translate(360.102291, 575.102291) rotate(-316.000000) translate(-360.102291, -575.102291) translate(342.102291, 557.602291)">
			<ellipse id="Oval-2" cx="17" cy="17.5" fill="#D8D8D8" rx="17" ry="16.5" stroke="#979797"/>
			<polygon id="Rectangle-2" fill="#979797" points="30.9521846 0 35.3739253 4.3290004 4.42174066 34.6320032 0 30.3030028"/>
		</g>
		<g id="Bolts" fillRule="nonzero" transform="translate(531.000000, 721.500000) scale(-1, 1) translate(-531.000000, -721.500000) translate(513.000000, 704.000000)">
			<ellipse id="Oval-2" cx="17" cy="17.5" fill="#D8D8D8" rx="17" ry="16.5" stroke="#979797"/>
			<polygon id="Rectangle-2" fill="#979797" points="30.9521846 0 35.3739253 4.3290004 4.42174066 34.6320032 0 30.3030028"/>
		</g>
		<circle id="RadioDetected" cx="227.5" cy="409.5" fill="#C93030" fillRule="nonzero" r="19.5" stroke="#595959" strokeWidth="8"/>
		<g id="Detect" transform="translate(190.000000, 501.000000)">
			<text id="OFF" fill="#FFFFFF" fontFamily="Krungthep" fontSize="20">
				<tspan x="97" y="40">OFF</tspan>
			</text>
			<rect height="28" id="Rectangle-3" width="3" fill="#FFFFFF" fillRule="nonzero" x="35" y="69"/>
			<rect height="28" id="Rectangle-3" width="3" fill="#FFFFFF" fillRule="nonzero" transform="translate(81.000000, 32.500000) rotate(-270.000000) translate(-81.000000, -32.500000) " x="79.5" y="18.5"/>
			<text id="ON" fill="#FFFFFF" fontFamily="Krungthep" fontSize="20">
				<tspan x="22" y="115">ON</tspan>
			</text>
			<g onClick={this.turnOn} id="NFSwitch" fillRule="nonzero">
				<circle id="Oval-7" cx="36.5" cy="32.5" fill="#7D7D7D" r="32.5"/>
				<rect height="31" id="Rectangle" width="89" fill="#595959" rx="4" x="0" y="17"/>
			</g>
		</g>
	</g>
</svg>
</Waypoint>
</div>
</div>
            )
        }
    }
export default Radiological;