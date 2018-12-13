import React , { Component } from 'react';
import { TimelineMax } from 'gsap';
import './style.css';


class Confidential extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    componentDidMount() {
        this.confidentialtl = new TimelineMax({paused: true});

        const {
            confidentialtl
        } = this;

        confidentialtl.from("#Confidential", 0.4, { autoAlpha: 0, transformOrigin: "50% 50%", scaleX: 0, scaleY: 0}, "now")
    }

    componentDidUpdate() {
        {this.props.confAnimation === true && (this.confidentialtl.play())}
    }


    render() {

        const {
            confAnimation
        } = this.props;

        return(
	<g id="Confidential" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
		<rect height="800" width="1440" fill="none" x="0" y="0"/>
		<rect height="327" id="Border" width="1016" fillRule="nonzero" stroke="#C93030" strokeWidth="12" transform="translate(719.901829, 400.299091) rotate(-6.000000) translate(-719.901829, -400.299091) " x="211.901829" y="236.799091"/>
		<text fill="#C93030" fontFamily="Special+Elite" fontSize="132" stroke="#201F1F" strokeWidth="2" transform="translate(728.941844, 400.724458) rotate(-6.000000) translate(-728.941844, -400.724458) ">
			<tspan x="250.583641" y="448.724458">CONFIDENTIAL</tspan>
		</text>
		<g id="BorderDetails" fillRule="nonzero" transform="translate(172.000000, 178.000000)">
			<polygon id="Path-2" fill="#201F1F" points="0.689498342 110.349862 59.2933921 110.349862 84.8849436 95.6186773"/>
			<polygon id="Path-2" fill="#201F1F" points="126 95.7311842 184.603894 95.7311842 210.195445 81"/>
			<polygon id="Path-2" fill="#201F1F" points="411 65.7311842 469.603894 65.7311842 495.195445 51"/>
			<polygon id="Path-3" fill="#201F1F" points="263.576112 82.894193 271.104471 89.6644507 289.271298 82.894193 267.305941 72.6531169"/>
			<polygon id="Path-4" fill="#C93030" points="312.597572 81.0138912 309.730813 71.5532245 325.484191 71.5532245 331.116911 66.1869001 338.783603 77.197945"/>
			<polygon id="Path-5" fill="#201F1F" points="356.673283 69.9828121 384.685725 69.9828121 393.352335 74.3098038 394.66398 80.1790539 413.53659 82.4093294 397.645236 69.9828121 384.081562 65.8995057"/>
			<polygon id="Path-2" fill="#201F1F" points="509.519866 55.6585876 553.603894 58.7311842 579.195445 44"/>
			<polygon id="Path-2" fill="#201F1F" points="620 44.7311842 678.603894 44.7311842 704.195445 30"/>
			<polygon id="Path-2" fill="#201F1F" points="905 14.7311842 963.603894 14.7311842 989.195445 0"/>
			<polygon id="Path-3" fill="#201F1F" points="757 32.2410761 782.695187 32.2410761 760.729829 22"/>
			<polygon id="Path-4" fill="#C93030" points="806.86676 29.8269911 795.008325 22.4134955 810.429062 20.6255807 816.936257 16.1487067 833.052791 26.0110449"/>
			<polygon id="Path-5" fill="#201F1F" points="850 19.0833064 861.202155 19.0833064 886.679051 23.4102981 896.81685 24.9578968 906.863306 31.5098238 901.672068 19.0833064 877.408279 15"/>
			<polygon id="Path-2" fill="#C93030" points="62.6182446 423.362941 121.603894 434.731184 147.195445 420" transform="translate(104.906845, 427.365592) scale(1, -1) translate(-104.906845, -427.365592) "/>
			<polygon id="Path-2" fill="#C93030" points="210.409681 405 247.603894 419.731184 273.195445 405" transform="translate(241.802563, 412.365592) scale(1, -1) translate(-241.802563, -412.365592) "/>
			<polygon id="Path-3" fill="#201F1F" points="326 407.241076 333.528359 414.011334 351.695187 407.241076 329.729829 397" transform="translate(338.847593, 405.505667) scale(1, -1) translate(-338.847593, -405.505667) "/>
			<polygon id="Path-4" fill="#C93030" points="374.86676 405.826991 372 396.366324 387.753378 396.366324 393.386099 391 402.762779 400.316435" transform="translate(387.381390, 398.413496) scale(1, -1) translate(-387.381390, -398.413496) "/>
			<polygon id="Path-2" fill="#201F1F" points="578.665824 369.500915 623.245227 380.037009 631.260718 367.012633 604.365662 369.500915" transform="translate(604.963271, 373.524821) scale(1, -1) translate(-604.963271, -373.524821) "/>
			<polygon id="Path-2" fill="#201F1F" points="683 368.731184 741.603894 368.731184 767.195445 354" transform="translate(725.097723, 361.365592) scale(1, -1) translate(-725.097723, -361.365592) "/>
			<polygon id="Path-2" fill="#201F1F" points="981.176049 331.916848 997.03583 326.789853 1045.27663 340.115889" transform="translate(1013.226341, 333.452871) scale(1, -1) translate(-1013.226341, -333.452871) "/>
			<polygon id="Path-3" fill="#201F1F" points="820 356.241076 845.695187 356.241076 823.729829 346" transform="translate(832.847593, 351.120538) scale(1, -1) translate(-832.847593, -351.120538) "/>
			<polygon id="Path-4" fill="#C93030" points="869.858435 354.678284 858 347.264789 873.420738 345.476874 879.927932 341 896.044466 350.862338" transform="translate(877.022233, 347.839142) scale(1, -1) translate(-877.022233, -347.839142) "/>
			<polygon id="Path-5" fill="#201F1F" points="913 343.083306 924.202155 343.083306 949.679051 347.410298 959.81685 348.957897 969.863306 355.509824 964.672068 343.083306 940.408279 339" transform="translate(941.431653, 347.254912) scale(1, -1) translate(-941.431653, -347.254912) "/>
			<polygon id="Path-6" fill="#201F1F" points="155 423 157.350859 430.641109 161.942778 435.814325 175.301069 435.814325 193.448401 440.739695 178.119183 429.586039 166.409824 430.641109" transform="translate(174.224200, 431.869848) scale(1, -1) translate(-174.224200, -431.869848) "/>
			<polygon id="Path-7" fill="#C93030" points="19.6650621 111.784203 18.5289667 142.713734 24.8414769 162.089037 37.2913883 208.216543 42.1480898 272.072983 37.2913883 300.299878 34.1548758 319.479471 47.0533929 377.178048 50.2992452 358.719353 61.9955009 412.695865 28.738512 119.796764"/>
			<polygon id="Path-8" fill="#201F1F" points="40.1268082 361.043025 52.0977989 391.175612 57.4839456 418.752754 52.0977989 434.429939"/>
			<polygon id="Path-9" fill="#C93030" points="446.066239 392.244697 473.877066 382.747644 497.477196 382.747644 533.962899 382.747644 523.669938 387.496171"/>
			<polygon id="Path-10" fill="#C93030" points="1033.82172 34.4694921 1040.25252 60.3400627 1040.25252 84.9564286 1043.09997 114.431927 1033.82172 90.0054773 1031.93751 66.1258855"/>
			<polygon id="Path-11" fill="#201F1F" points="1045.10742 149.915717 1051.55148 165.106076 1055.17649 184.074434 1055.17649 196.384184 1045.10742 169.968035"/>
			<polygon id="Path-12" fill="#C93030" points="1065.74116 253.915973 1075.94031 268.339035 1075.94031 297.390632 1074.19676 313.584837 1072.84168 303.983677"/>
		</g>
	</g>
        )
    }

}

export default Confidential;