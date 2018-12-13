import React , { Component} from 'react';
import { TimelineMax } from 'gsap';
import Waypoint from 'react-waypoint';
import './style.css';


class Redacted extends Component {
    constructor(props) {
	super(props)
	this.revealPG1 = this.revealPG1.bind(this);
	this.reversePG1 = this.reversePG1.bind(this);
	this.revealPG2 = this.revealPG2.bind(this);
	this.reversePG2 = this.reversePG2.bind(this);
	this.revealPG3 = this.revealPG3.bind(this);
	this.reversePG3 = this.reversePG3.bind(this);
    this.state = {
		animationEntered: false,
    }
    }

    componentDidMount() {
		this.documentstl = new TimelineMax({paused: true});
		this.pageOnetl = new TimelineMax({paused: true});
		this.pageTwotl = new TimelineMax({paused: true});
		this.pageThreetl = new TimelineMax({paused: true});


        const {
			documentstl,
			pageOnetl,
			pageTwotl,
			pageThreetl
        } = this;

		documentstl.to("#Hidden, #HiddenTwo, #HiddenThree", 0, { delay: 0.5, autoAlpha: 1}, "redact")
		.from("#PageTwo", 0.6, {x: 20})
        .from("#PageThree", 0.8, {x: 20})
		.from("#Hidden", 0.2, {scaleX: 0, transformOrigin: "5% 100%"})
		.from("#HiddenTwo", 0.3, {scaleX: 0, transformOrigin: "5% 100%"})
		.from("#HiddenThree", 0.4, {scaleX: 0, transformOrigin: "5% 100%"})

			documentstl.timeScale(0.8);

			pageOnetl.to("#Hidden", 0.5, {autoAlpha: 0})
			pageTwotl.to("#HiddenTwo", 0.5, {autoAlpha: 0})
			pageThreetl.to("#HiddenThree", 0.5, {autoAlpha: 0})

		}
	
	runAnimation = () => {
        console.log('Animation entered');
		this.documentstl.play(0, false);
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
	
	revealPG1() {
		this.pageOnetl.play(0, false);
	}

	reversePG1() {
		this.pageOnetl.reverse();
	}

		
	revealPG2() {
		this.pageTwotl.play(0, false);
	}

	reversePG2() {
		this.pageTwotl.reverse();
	}

		
	revealPG3() {
		this.pageThreetl.play(0, false);
	}

	reversePG3() {
		this.pageThreetl.reverse();
	}

render() {
    return(
<Waypoint onEnter={this.onEnter}>
<svg viewBox="0 0 1440 800">
	<g id="RedactedSVG" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
		<rect height="800" width="1440" fill="#201F1F" x="0" y="0"/>
		<g id="PageThree" onMouseEnter={this.revealPG3} onMouseLeave={this.reversePG3} transform="translate(935.000000, 72.000000)">
			<polygon id="PageBGThree" fill="#FFFFFF" fillRule="nonzero" points="0.568669576 38.3049145 29.6986058 193.94614 64.0264574 605.940457 299.989178 598.127021 447.249814 605.940457 383.945902 81.2033914 359.691067 0.522880459"/>
			<text id="-3-" fill="#C93030" fontFamily="Special+Elite" fontSize="13" transform="translate(241.894705, 580.904916) rotate(-3.000000) translate(-241.894705, -580.904916) ">
				<tspan x="229.976345" y="585.904916">-3-</tspan>
			</text>
			<text id="By-supporting-the-ro" fill="#201F1F" fontFamily="Special+Elite" fontSize="7" transform="translate(223.667055, 312.298353) rotate(-5.000000) translate(-223.667055, -312.298353) ">
				<tspan x="65.6670546" y="63.7983527">By supporting the room on lucite pillar at points along its periphery, all six surfaces</tspan>
				<tspan x="65.6670546" y="88.7983527">are made accessible for inspection. The room is structurally adequate to permit</tspan>
				<tspan x="65.6670546" y="113.798353">jacking up the room to remove any pillar for close inspection or replacement.</tspan>
				<tspan x="65.6670546" y="138.798353">Each pillar in turn rests on a vibration isolator having a natural and frequency</tspan>
				<tspan x="65.6670546" y="163.798353">lower than that induced by any communications equipment, which may be used in</tspan>
				<tspan x="65.6670546" y="188.798353">the room.</tspan>
				<tspan x="65.6670546" y="213.798353"/>
				<tspan x="65.6670546" y="238.798353">Keeping the number of contact points between the secure room and the floor of</tspan>
				<tspan x="65.6670546" y="263.798353">the parent room at a minimum not only facilitates inspection but also makes</tspan>
				<tspan x="65.6670546" y="288.798353">leveling the room easier when installed on an uneven floor.</tspan>
				<tspan x="65.6670546" y="313.798353"/>
				<tspan x="65.6670546" y="338.798353">Consideration was given to make the room as modular as possible within the</tspan>
				<tspan x="65.6670546" y="363.798353">limitation of its multi-wall design to reduce erection time and enable disassembly</tspan>
				<tspan x="65.6670546" y="388.798353">and reassembly at another location. The basic room structure consists of three</tspan>
				<tspan x="65.6670546" y="413.798353">seperate walls. The innermost of these walls is ‘floated’ from the other two on soft</tspan>
				<tspan x="65.6670546" y="438.798353">rubber isolation strips to obtain a better Mass Law sound transmission loss</tspan>
				<tspan x="65.6670546" y="463.798353">through the wall. Floor and ceiling construction is similar to that for the vertical</tspan>
				<tspan x="65.6670546" y="488.798353">walls except that extra structural bracing is included to permit the room to be</tspan>
				<tspan x="65.6670546" y="513.798353">supported entirely from its periphery.</tspan>
			</text>
			<polygon id="HiddenThree" fill="#201F1F" fillRule="nonzero" points="30.2275143 75.336029 37.1344565 95.4114297 270.409092 75.336029 365.482993 67.4812831 357.69721 43.9364967 124.569343 61.0022671"/>
			<polygon id="HiddenThree" fill="#201F1F" fillRule="nonzero" points="39.4558172 99.1929946 44.2146912 118.859813 230.592498 102.801968 357.79093 92.531737 357.79093 72.6844458 186.944018 86.9404028"/>
			<polygon id="HiddenThree" fill="#201F1F" fillRule="nonzero" points="44.7506538 125.077069 45.6280284 145.552235 214.31008 126.850717 358.507087 118.292191 355.317091 98.3193514 160.097833 115.560183"/>
			<polygon id="HiddenThree" fill="#201F1F" fillRule="nonzero" points="46.4798712 151.490075 52.3894976 167.275603 251.808446 151.490075 359.127757 137.982105 354.844958 122.953405 219.696292 134.125463"/>
			<polygon id="HiddenThree" fill="#201F1F" fillRule="nonzero" points="47.5213942 175.340776 47.5213942 193.421545 216.287028 179.812782 365.658054 167.219018 365.658054 145.84746"/>
			<polygon id="HiddenThree" fill="#201F1F" fillRule="nonzero" points="47.451541 200.949437 53.1458606 217.864241 112.456595 212.941903 107.901139 193.428349"/>
			<polygon id="HiddenThree" fill="#201F1F" fillRule="nonzero" points="50.7343736 249.62566 54.8331372 270.985092 256.129249 249.62566 367.982502 244.464467 362.179265 217.957217"/>
			<polygon id="HiddenThree" fill="#201F1F" fillRule="nonzero" points="55.0968339 277.368599 59.4936895 293.654735 288.216167 277.368599 364.160811 266.350663 355.481751 249.240953 87.3461739 271.447844"/>
			<polygon id="HiddenThree" fill="#201F1F" fillRule="nonzero" points="58.7522814 300.549066 64.3682564 318.43458 253.333682 300.549066 299.537926 293.740723 294.369089 280.548246 112.930485 293.740723"/>
			<polygon id="HiddenThree" fill="#201F1F" fillRule="nonzero" points="61.641371 350.275861 66.1203789 369.94262 328.525074 344.271716 377.840436 336.60168 366.597605 316.744037 308.866027 321.732067"/>
			<polygon id="HiddenThree" fill="#201F1F" fillRule="nonzero" points="65.7405405 374.811107 69.5003621 393.085768 206.969079 380.832606 389.61157 362.627357 381.322609 344.005636 234.599662 356.661231"/>
			<polygon id="HiddenThree" fill="#201F1F" fillRule="nonzero" points="67.1712008 399.22681 72.6431873 418.648698 238.912137 401.769992 383.709614 387.251296 375.256764 369.350689"/>
			<polygon id="HiddenThree" fill="#201F1F" fillRule="nonzero" points="71.2722985 423.848821 71.2722985 442.811818 211.12802 429.949372 397.493698 413.868905 391.817332 393.141683 188.667424 413.868905"/>
			<polygon id="HiddenThree" fill="#201F1F" fillRule="nonzero" points="70.9676566 449.130938 70.9676566 467.615763 258.758211 453.091283 385.622302 437.500556 375.117939 418.498997"/>
			<polygon id="HiddenThree" fill="#201F1F" fillRule="nonzero" points="72.2575646 474.905961 72.2575646 492.825849 286.712002 474.905961 394.825189 463.15218 386.630706 443.248263 215.688009 460.213735"/>
			<polygon id="HiddenThree" fill="#201F1F" fillRule="nonzero" points="73.3469488 499.599312 78.4834434 517.25312 278.878076 499.599312 388.971436 490.386785 385.0323 470.049042 243.938729 483.919892"/>
			<polygon id="HiddenThree" fill="#201F1F" fillRule="nonzero" points="76.6208857 523.880046 76.6208857 543.913147 212.832472 537.280436 242.155224 527.998497 236.931964 507.255851 200.758625 513.169375"/>
		</g>
		<g id="PageTwo" onMouseEnter={this.revealPG2} onMouseLeave={this.reversePG2} transform="translate(503.000000, 92.000000)">
			<polygon id="PageBGTwo" fill="#FFFFFF" fillRule="nonzero" points="0.837921093 26.2347316 271.077426 0.763321671 400.285864 17.5073889 456.979096 593.133065 281.032871 612.327734 71.7780751 606.754242"/>
			<text id="-2-" fill="#C93030" fontFamily="Special+Elite" fontSize="13" transform="translate(257.894705, 591.904916) rotate(-3.000000) translate(-257.894705, -591.904916) ">
				<tspan x="245.976345" y="596.904916">-2-</tspan>
			</text>
			<text id="The-object-of-the-ro" fill="#201F1F" fontFamily="Special+Elite" fontSize="7" transform="translate(241.907179, 326.773841) rotate(-5.000000) translate(-241.907179, -326.773841) ">
				<tspan x="83.9071789" y="78.2738406">The object of the room is to provide a secure area as nearly as possible like a room</tspan>
				<tspan x="83.9071789" y="103.273841">in a home or office which up to twelve adults can work in comfort for several hours</tspan>
				<tspan x="83.9071789" y="128.273841">(read, write, converse, walk about, etc). The term ‘comfort’ implies good light,</tspan>
				<tspan x="83.9071789" y="153.273841">fresh air, comfortable temperature, adequate room, pleasing appearance,</tspan>
				<tspan x="83.9071789" y="178.273841">comfortable acoustics, absence of unnecessary outside distractions, and, insofar</tspan>
				<tspan x="83.9071789" y="203.273841">as possible, the psychological comforts of familiar types of surroundings to avoid</tspan>
				<tspan x="83.9071789" y="228.273841">any ‘shut-in’ feeling.</tspan>
				<tspan x="83.9071789" y="253.273841"/>
				<tspan x="83.9071789" y="278.273841">The engineering features of the room were dictated primarily by security</tspan>
				<tspan x="83.9071789" y="303.273841">considerations to make the room as secure from tampering as practicable. Also</tspan>
				<tspan x="83.9071789" y="328.273841">considered were the anticipated conditions under which the room would be</tspan>
				<tspan x="83.9071789" y="353.273841">shipped to location and erected and, subsequently, periodically inspected. Prior to</tspan>
				<tspan x="83.9071789" y="378.273841">designing this room, experience had been gained through building of a predecessor</tspan>
				<tspan x="83.9071789" y="403.273841">room based in part on National Bureau OF standards sound transmission tests, and</tspan>
				<tspan x="83.9071789" y="428.273841">which incorporated many of the Mark II room features described below.</tspan>
				<tspan x="83.9071789" y="453.273841"/>
				<tspan x="83.9071789" y="478.273841">The room may be erected in any space where there is sufficient wall-to-wall</tspan>
				<tspan x="83.9071789" y="503.273841">clearance to permit a man to pass freely. This is not only necessary for erection but</tspan>
				<tspan x="83.9071789" y="528.273841">it is also desireable for periodic inspection of the room’s outer surface.</tspan>
			</text>
			<polygon id="HiddenTwo" fill="#201F1F" fillRule="nonzero" points="45.8040949 87.0877398 52.284085 107.927112 383.007152 82.5885126 373.562911 58.8974852"/>
			<polygon id="HiddenTwo" fill="#201F1F" fillRule="nonzero" points="54.5038263 116.186669 384.156086 85.6296098 384.156086 104.15273 65.8024472 130.003754"/>
			<polygon id="HiddenTwo" fill="#201F1F" fillRule="nonzero" points="61.4122632 139.811301 379.22108 112.263739 373.2127 131.067382 192.616155 147.217846 64.0830904 154.451826"/>
			<polygon id="HiddenTwo" fill="#201F1F" fillRule="nonzero" points="66.3950619 163.685896 66.3950619 181.34826 366.882722 155.906769 361.395957 139.187626"/>
			<polygon id="HiddenTwo" fill="#201F1F" fillRule="nonzero" points="382.432168 163.266813 382.432168 181.73035 68.462621 207.800882 68.462621 188.960049"/>
			<polygon id="HiddenTwo" fill="#201F1F" fillRule="nonzero" points="68.7548622 216.429575 73.027254 230.496409 388.318429 200.465355 388.318429 187.283968"/>
			<polygon id="HiddenTwo" fill="#201F1F" fillRule="nonzero" points="73.9375983 238.461961 73.9375983 255.302608 139.467713 251.762647 169.108117 246.882284 162.862635 233.998271 133.746879 236.929583"/>
			<polygon id="HiddenTwo" fill="#201F1F" fillRule="nonzero" points="78.3570121 287.12634 344.54253 260.685305 371.503639 260.685305 371.503639 283.43172 320.306543 287.12634 78.3570121 308.91979"/>
			<polygon id="HiddenTwo" fill="#201F1F" fillRule="nonzero" points="78.1150129 315.336713 83.0842622 332.193982 372.679063 306.074609 396.740691 300.801734 390.033858 283.314666"/>
			<polygon id="HiddenTwo" fill="#201F1F" fillRule="nonzero" points="82.0606339 339.913433 82.0606339 355.924231 378.369501 327.532422 378.369501 310.736717"/>
			<polygon id="HiddenTwo" fill="#201F1F" fillRule="nonzero" points="82.0362073 365.978204 86.9166347 381.790333 340.676057 356.751477 402.646248 351.784742 400.13194 331.841268 340.676057 337.485432"/>
			<polygon id="HiddenTwo" fill="#201F1F" fillRule="nonzero" points="83.739553 389.219404 88.0500272 403.896512 378.664248 381.176551 413.717995 375.144818 409.886281 358.533127 252.981439 372.762414"/>
			<polygon id="HiddenTwo" fill="#201F1F" fillRule="nonzero" points="88.493503 413.492616 88.493503 431.842215 311.208529 410.209343 416.205233 400.570363 412.046308 383.133823 311.208529 393.66886"/>
			<polygon id="HiddenTwo" fill="#201F1F" fillRule="nonzero" points="89.2059271 439.721163 89.2059271 457.844622 313.078855 439.721163 378.982344 429.862844 369.377369 411.659471 301.544044 418.36544"/>
			<polygon id="HiddenTwo" fill="#201F1F" fillRule="nonzero" points="93.3032596 486.886391 320.846201 466.409654 396.460867 463.433332 396.460867 482.844671 304.504138 489.641053 93.3032596 509.225788"/>
			<polygon id="HiddenTwo" fill="#201F1F" fillRule="nonzero" points="94.9890061 512.48988 98.701129 529.445518 303.690789 517.160117 423.256703 503.610254 418.230025 485.187447 258.729558 499.438041"/>
			<polygon id="HiddenTwo" fill="#201F1F" fillRule="nonzero" points="101.299108 536.014473 101.299108 559.174369 388.422116 529.36646 388.422116 512.854577 204 529.36646"/>
		</g>
		<g id="PageOne" onMouseEnter={this.revealPG1} onMouseLeave={this.reversePG1} transform="translate(83.000000, 97.000000)">
			<polygon id="PageBGOne" fill="#FFFFFF" fillRule="nonzero" points="3 3 383.67175 19.2824151 430.438859 601 41.9235667 601"/>
			<text id="Title" fill="#C93030" fontFamily="Special+Elite" fontSize="36" stroke="#000000" strokeWidth="1" transform="translate(193.517790, 65.429504) rotate(-3.000000) translate(-193.517790, -65.429504) ">
				<tspan x="60.0224775" y="78.9295043">CONFIDENTIAL</tspan>
			</text>
			<text id="TextBody" fill="#201F1F" fontFamily="Special+Elite" fontSize="7" transform="translate(224.383841, 376.845663) rotate(-3.000000) translate(-224.383841, -376.845663) ">
				<tspan x="82.2778808" y="170.68952">Absolute room security is an extremely difficult thing to achieve.</tspan>
				<tspan x="72.9481933" y="195.68952">The conventional method of ‘sweeping’ areas to make them secure</tspan>
				<tspan x="72.9481933" y="220.68952">has many disadvantages. It requires considerable time and equipment.</tspan>
				<tspan x="72.9481933" y="245.68952">If done properly, almost complete dismanteling of the area under search is</tspan>
				<tspan x="72.9481933" y="270.68952">reqired. Even if this is done and the area is declared ‘clean’, no one has</tspan>
				<tspan x="72.9481933" y="295.68952">any assurance as to how long it will remain so. Other approaches have</tspan>
				<tspan x="72.9481933" y="320.68952">been tried, such as inter-communication systems masked by white noise,</tspan>
				<tspan x="72.9481933" y="345.68952">etc. All of these systems are generally uncomfortable to wear , fatiguing, and</tspan>
				<tspan x="72.9481933" y="370.68952">so annoying that it is impossible to get people to use them.</tspan>
				<tspan x="301.304834" y="370.68952">This is the security</tspan>
				<tspan x="72.9481933" y="395.68952">system as most people know it. Areas are superficially ‘swept’ and declared</tspan>
				<tspan x="72.9481933" y="420.68952">‘clean’ as far as the sweeping equipment could tell, and these areas are used</tspan>
				<tspan x="72.9481933" y="445.68952">for daily conferences and high level conferences.</tspan>
				<tspan x="72.9481933" y="470.68952"/>
				<tspan x="72.9481933" y="495.68952">In an attempt to provide maximum countermeasure means against</tspan>
				<tspan x="72.9481933" y="520.68952">surreptitiously placed surveillance devices operating on acoustic,</tspan>
				<tspan x="72.9481933" y="545.68952">electromagnetic, visual, infa- or ultra-visual principles, a special secure room</tspan>
				<tspan x="72.9481933" y="570.68952">was designed.</tspan>
			</text>
			<text id="TitleTwo" fill="#C93030" fontFamily="Special+Elite" fontSize="10" transform="translate(213.940576, 130.646319) rotate(-3.000000) translate(-213.940576, -130.646319) ">
				<tspan x="134.440576" y="130.146319">MK II SECURE ROOM</tspan>
			</text>
			<polygon id="Ul" fill="#201F1F" fillRule="nonzero" points="135.373801 136.689494 236.95771 131 236.95771 136.689494 135.373801 142.800993"/>
			<polygon id="Border" fill="#C93030" fillRule="nonzero" points="3.00313692 3.00025956 0.694796197 2.93479331 8.76362328 200.490723 16.7872759 274.726983 25.0974876 440.155411 32.9881881 586.803512 41.9130646 601.037078"/>
			<polygon id="Hidden" fill="#201F1F" fillRule="nonzero" points="60.2531722 173.181223 83.0302529 171.542166 237.496505 163.031642 325.359528 158.79258 325.359528 178.462303 84.637056 187.569867 62.6551444 189.879237"/>
			<polygon id="Hidden" fill="#201F1F" fillRule="nonzero" points="62.2798361 200.000424 330.181553 187.719975 330.181553 204.793256 56.8038576 219.790092"/>
			<polygon id="Hidden" fill="#201F1F" fillRule="nonzero" points="59.2967001 240.63713 64.3682854 225.782226 341.416196 208.709265 341.416196 226.579848"/>
			<polygon id="Hidden" fill="#201F1F" fillRule="nonzero" points="65 251.025773 87.7770807 249.386716 242.243333 240.876192 360.68769 234.9278 360.68769 251.025773 89.3838838 265.414417 67.4019722 267.723787"/>
			<polygon id="Hidden" fill="#201F1F" fillRule="nonzero" points="67.4759785 274.917579 345.792351 261.277097 350.029981 280.395375 62 294.707247"/>
			<polygon id="Hidden" fill="#201F1F" fillRule="nonzero" points="64 340.927865 69.0715852 326.072961 358.34296 310.383637 360.888914 325.655751"/>
			<polygon id="Hidden" fill="#201F1F" fillRule="nonzero" points="70 351.097974 92.7770807 349.458916 247.243333 340.948392 374.15575 334.555728 374.15575 351.097974 94.3838838 365.486617 72.4019722 367.795988"/>
			<polygon id="Hidden" fill="#201F1F" fillRule="nonzero" points="72.4759785 375.640482 377.571632 358.802433 377.571632 375.640482 67 395.43015"/>
			<polygon id="Hidden" fill="#201F1F" fillRule="nonzero" points="64 316.564995 69.0715852 301.710091 346.119496 284.63713 346.119496 302.507713"/>
			<polygon id="Hidden" fill="#201F1F" fillRule="nonzero" points="75.0715852 566.294454 75.0715852 549.689324 377.33156 534.518955 385.18996 549.689324"/>
			<polygon id="Hidden" fill="#201F1F" fillRule="nonzero" points="74 540.927865 70.0270473 524.963932 356.119496 512.162131 356.119496 526.870583"/>
			<polygon id="Hidden" fill="#201F1F" fillRule="nonzero" points="67 440.428186 72.0715852 425.573283 366.106269 409.44037 370.470091 425.156072"/>
			<polygon id="Hidden" fill="#201F1F" fillRule="nonzero" points="73 451.426204 95.7770807 449.787146 261.704742 440.179166 268.15802 456.844633 228.217958 462.167333 97.3838838 465.814847 75.4019722 468.124218"/>
			<polygon id="Hidden" fill="#201F1F" fillRule="nonzero" points="67 416.811823 72.0715852 401.95692 367.361 382.212534 363.100198 399.512178"/>
			<polygon id="Hidden" fill="#201F1F" fillRule="nonzero" points="72.5422653 499.510787 217.012253 493.197563 346.587061 480.785797 342.61413 506.998132 217.012253 514.594144 72.5422653 519.454955"/>
			<polygon id="Hidden" fill="#201F1F" fillRule="nonzero" points="76.1460858 589.409329 142.952127 589.409329 142.952127 570.265229 76.1460858 575.489112"/>
			<polygon id="Path-2" fill="#C93030" fillRule="nonzero" points="0.742485126 2.91804149 2.92174951 0.791988152 164.481131 6.37518444 286.390661 12.6371652 383.343572 12.6371652 383.343572 19.4556281"/>
			<text id="-1-" fill="#C93030" fontFamily="Special+Elite" fontSize="13" transform="translate(229.894705, 586.904916) rotate(-3.000000) translate(-229.894705, -586.904916) ">
				<tspan x="217.976345" y="591.904916">-1-</tspan>
			</text>
		</g>
	</g>
</svg>
</Waypoint>
    )
}
}

export default Redacted;