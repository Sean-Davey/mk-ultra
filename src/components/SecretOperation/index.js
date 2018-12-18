import React , { Component } from 'react';
import { TimelineMax } from 'gsap';
import Waypoint from 'react-waypoint';
import './style.css';

class SecretOperation extends Component {
    constructor(props) {
        super(props);
        this.exitUnderground = this.exitUnderground.bind(this);
        this.state = {
			animationEntered: false,
        }
    }

    componentDidMount() {
		this.coverttl = new TimelineMax({paused: true});

        const {
			coverttl,
        } = this;

		coverttl.to("#SecretElevator", 1, {autoAlpha: 1})
		.to("#SecretElevator", 1.5, {y:500}, "levelOne")
		.to("#G", 1.2, {autoAlpha: 0}, "levelOne")
		.to("#LevelOne", 1, {autoAlpha: 1}, "levelOne")
		.to("#Underground", 1.8, {scaleY:2.031, transformOrigin: "0% 100%"}, "levelTwo")
		.to("#AboveGround", 1.5, {y: -325, autoAlpha: 0}, "levelTwo")
		.to("#SecretElevator", 2.2, {y:675}, "levelTwo")
		.to("#LevelOne", 1.2, {autoAlpha: 0}, "levelTwo")
		.to("#LevelTwo", 1, {autoAlpha: 1}, "levelTwo")
		.to("#SecretBuilding", 1, {autoAlpha: 1})
		
    }

    runAnimation = () => {
        console.log('Animation entered');
		this.coverttl.play(0, false).delay(1);
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

    exitUnderground() {
		this.coverttl.reverse();
		console.log("clicked")
    }

    render() {
        return (
<div>
<Waypoint onEnter={this.onEnter}>
<svg id="Operation" viewBox="0 0 1440 800">
	<g id="Artboard" fill="none" stroke="none" strokeWidth="1">
		<rect height="800" width="1440" fill="#C93030" x="0" y="0"/>
		<g id="AboveGround" transform="translate(103.000000, 27.000000)">
			<g id="LeftBuildings">
				<g id="B1" transform="translate(0.000000, 75.000000)">
					<rect height="266" id="Rectangle-2" width="184" fill="#867F7F" x="0" y="53"/>
					<rect height="266" id="Rectangle-3" width="14" fill="#575757" x="0" y="53"/>
					<rect height="266" id="Rectangle-3" width="14" fill="#575757" x="170" y="53"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="74"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="97"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="120"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="143"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="143"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="166"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="189"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="212"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="235"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="258"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="281"/>
					<rect height="233" id="Rectangle-5" width="17" fill="#867F7F" x="84" y="65"/>
					<rect height="44" id="Rectangle-7" width="3" fill="#ADADAD" x="54" y="0"/>
					<rect height="19" id="Rectangle-6" width="88" fill="#201F1F" x="47" y="34"/>
				</g>
				<g id="B2" transform="translate(146.000000, 0.000000)">
					<rect height="371" id="Rectangle-3" width="14" fill="#575757" x="0" y="23"/>
					<rect height="371" id="Rectangle-3" width="14" fill="#575757" x="220" y="23"/>
					<rect height="371" id="Rectangle-8" width="206" fill="#867F7F" x="14" y="23"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="41"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="64"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="87"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="110"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="133"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="156"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="180"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="203"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="226"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="249"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="272"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="295"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="318"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="341"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="364"/>
					<rect height="349" id="Rectangle-5" width="17" fill="#867F7F" x="168" y="34"/>
					<polygon id="Rectangle-9" fill="#201F1F" points="74 0 210 16.5143415 210 23 74 23"/>
				</g>
				<g id="B3" transform="translate(341.000000, 62.000000)">
					<polygon id="Rectangle-10" fill="#867F7F" points="0 57 14.9947883 50.6859973 14.9947883 42.6739395 32.8638089 42.6739395 32.8638089 57 127 57 127 332 0 332"/>
					<polygon id="Rectangle-11" fill="#575757" points="0 57 15.0200352 50.6445743 14 332 0 332"/>
					<polygon id="Rectangle-11" fill="#575757" points="113 57.0015869 127 57.0015869 127 332 113 332"/>
					<rect height="10" id="Rectangle-12" width="25" fill="#D8D8D8" x="20" y="71"/>
					<rect height="10" id="Rectangle-12" width="25" fill="#D8D8D8" x="84" y="93"/>
					<rect height="10" id="Rectangle-12" width="10" fill="#D8D8D8" x="20" y="137"/>
					<rect height="10" id="Rectangle-12" width="10" fill="#D8D8D8" x="35" y="137"/>
					<rect height="10" id="Rectangle-12" width="59" fill="#D8D8D8" x="50" y="137"/>
					<rect height="10" id="Rectangle-12" width="10" fill="#D8D8D8" x="20" y="291"/>
					<rect height="10" id="Rectangle-12" width="10" fill="#D8D8D8" x="35" y="291"/>
					<rect height="10" id="Rectangle-12" width="59" fill="#D8D8D8" x="50" y="291"/>
					<rect height="10" id="Rectangle-12" width="10" fill="#D8D8D8" x="83" y="203"/>
					<rect height="10" id="Rectangle-12" width="10" fill="#D8D8D8" x="98" y="203"/>
					<rect height="10" id="Rectangle-12" width="59" fill="#D8D8D8" x="19" y="203"/>
					<rect height="10" id="Rectangle-12" width="58" fill="#D8D8D8" x="51" y="71"/>
					<rect height="10" id="Rectangle-12" width="25" fill="#D8D8D8" x="20" y="269"/>
					<rect height="10" id="Rectangle-12" width="58" fill="#D8D8D8" x="51" y="269"/>
					<rect height="10" id="Rectangle-12" width="25" fill="#D8D8D8" x="19" y="181"/>
					<rect height="10" id="Rectangle-12" width="58" fill="#D8D8D8" x="50" y="181"/>
					<rect height="10" id="Rectangle-12" width="58" fill="#D8D8D8" x="20" y="93"/>
					<rect height="10" id="Rectangle-12" width="25" fill="#D8D8D8" x="84" y="225"/>
					<rect height="10" id="Rectangle-12" width="58" fill="#D8D8D8" x="20" y="225"/>
					<rect height="10" id="Rectangle-12" width="89" fill="#D8D8D8" x="20" y="115"/>
					<rect height="10" id="Rectangle-12" width="89" fill="#D8D8D8" x="19" y="159"/>
					<rect height="10" id="Rectangle-12" width="89" fill="#D8D8D8" x="19" y="247"/>
					<rect height="44" id="Rectangle-7" width="3" fill="#ADADAD" x="110" y="0"/>
					<polygon id="Rectangle-9" fill="#201F1F" points="49 40 116 40 116 57 49 57"/>
				</g>
			</g>
			<g id="RightBuildings" transform="translate(1001.000000, 197.000000) scale(-1, 1) translate(-1001.000000, -197.000000) translate(767.000000, 0.000000)">
				<g id="B1" transform="translate(0.000000, 75.000000)">
					<rect height="266" id="Rectangle-2" width="184" fill="#867F7F" x="0" y="53"/>
					<rect height="266" id="Rectangle-3" width="14" fill="#575757" x="0" y="53"/>
					<rect height="266" id="Rectangle-3" width="14" fill="#575757" x="170" y="53"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="74"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="97"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="120"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="143"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="143"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="166"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="189"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="212"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="235"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="258"/>
					<rect height="10" id="Rectangle-4" width="140" fill="#686868" x="23" y="281"/>
					<rect height="233" id="Rectangle-5" width="17" fill="#867F7F" x="84" y="65"/>
					<rect height="44" id="Rectangle-7" width="3" fill="#ADADAD" x="54" y="0"/>
					<rect height="19" id="Rectangle-6" width="88" fill="#201F1F" x="47" y="34"/>
				</g>
				<g id="B2" transform="translate(146.000000, 0.000000)">
					<rect height="371" id="Rectangle-3" width="14" fill="#575757" x="0" y="23"/>
					<rect height="371" id="Rectangle-3" width="14" fill="#575757" x="220" y="23"/>
					<rect height="371" id="Rectangle-8" width="206" fill="#867F7F" x="14" y="23"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="41"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="64"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="87"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="110"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="133"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="156"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="180"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="203"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="226"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="249"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="272"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="295"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="318"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="341"/>
					<rect height="10" id="Rectangle-4" width="184" fill="#ADADAD" x="26" y="364"/>
					<rect height="349" id="Rectangle-5" width="17" fill="#867F7F" x="168" y="34"/>
					<polygon id="Rectangle-9" fill="#201F1F" points="74 0 210 16.5143415 210 23 74 23"/>
				</g>
				<g id="B3" transform="translate(341.000000, 62.000000)">
					<polygon id="Rectangle-10" fill="#867F7F" points="0 57 14.9947883 50.6859973 14.9947883 42.6739395 32.8638089 42.6739395 32.8638089 57 127 57 127 332 0 332"/>
					<polygon id="Rectangle-11" fill="#575757" points="0 57 15.0200352 50.6445743 14 332 0 332"/>
					<polygon id="Rectangle-11" fill="#575757" points="113 57.0015869 127 57.0015869 127 332 113 332"/>
					<rect height="10" id="Rectangle-12" width="25" fill="#D8D8D8" x="20" y="71"/>
					<rect height="10" id="Rectangle-12" width="25" fill="#D8D8D8" x="84" y="93"/>
					<rect height="10" id="Rectangle-12" width="10" fill="#D8D8D8" x="20" y="137"/>
					<rect height="10" id="Rectangle-12" width="10" fill="#D8D8D8" x="35" y="137"/>
					<rect height="10" id="Rectangle-12" width="59" fill="#D8D8D8" x="50" y="137"/>
					<rect height="10" id="Rectangle-12" width="10" fill="#D8D8D8" x="20" y="291"/>
					<rect height="10" id="Rectangle-12" width="10" fill="#D8D8D8" x="35" y="291"/>
					<rect height="10" id="Rectangle-12" width="59" fill="#D8D8D8" x="50" y="291"/>
					<rect height="10" id="Rectangle-12" width="10" fill="#D8D8D8" x="83" y="203"/>
					<rect height="10" id="Rectangle-12" width="10" fill="#D8D8D8" x="98" y="203"/>
					<rect height="10" id="Rectangle-12" width="59" fill="#D8D8D8" x="19" y="203"/>
					<rect height="10" id="Rectangle-12" width="58" fill="#D8D8D8" x="51" y="71"/>
					<rect height="10" id="Rectangle-12" width="25" fill="#D8D8D8" x="20" y="269"/>
					<rect height="10" id="Rectangle-12" width="58" fill="#D8D8D8" x="51" y="269"/>
					<rect height="10" id="Rectangle-12" width="25" fill="#D8D8D8" x="19" y="181"/>
					<rect height="10" id="Rectangle-12" width="58" fill="#D8D8D8" x="50" y="181"/>
					<rect height="10" id="Rectangle-12" width="58" fill="#D8D8D8" x="20" y="93"/>
					<rect height="10" id="Rectangle-12" width="25" fill="#D8D8D8" x="84" y="225"/>
					<rect height="10" id="Rectangle-12" width="58" fill="#D8D8D8" x="20" y="225"/>
					<rect height="10" id="Rectangle-12" width="89" fill="#D8D8D8" x="20" y="115"/>
					<rect height="10" id="Rectangle-12" width="89" fill="#D8D8D8" x="19" y="159"/>
					<rect height="10" id="Rectangle-12" width="89" fill="#D8D8D8" x="19" y="247"/>
					<rect height="44" id="Rectangle-7" width="3" fill="#ADADAD" x="110" y="0"/>
					<polygon id="Rectangle-9" fill="#201F1F" points="49 40 116 40 116 57 49 57"/>
				</g>
			</g>
			<g id="CenterBuildings" transform="translate(445.000000, 0.000000)">
				<g id="B4">
					<rect height="356" id="Rectangle-13" width="89" fill="#ACACAC" x="8" y="38"/>
					<rect height="16.477532" id="Rectangle-14" width="64.10929" fill="#D8D8D8" x="19" y="55.7612339"/>
					<rect height="16.477532" id="Rectangle-14" width="64.10929" fill="#D8D8D8" x="19" y="118.761234"/>
					<rect height="16.477532" id="Rectangle-14" width="64.10929" fill="#D8D8D8" x="19" y="181.761234"/>
					<rect height="16.477532" id="Rectangle-14" width="64.10929" fill="#D8D8D8" x="19" y="244.761234"/>
					<rect height="16.238766" id="Rectangle-14" width="63.1803209" fill="#D8D8D8" x="19.4644847" y="307.761234"/>
					<rect height="9" id="Rectangle-15" width="291" fill="#ACACAC" transform="translate(63.500000, 197.500000) rotate(-90.000000) translate(-63.500000, -197.500000) " x="-82" y="193"/>
					<rect height="356" id="Rectangle-16" width="8" fill="#D8D8D8" x="0" y="38"/>
					<rect height="356" id="Rectangle-16" width="8" fill="#D8D8D8" x="93" y="38"/>
					<rect height="27" id="Rectangle-24" width="3" fill="#ADADAD" x="28" y="0"/>
					<rect height="8" id="Rectangle-17" width="5" fill="#D8D8D8" x="19" y="30"/>
					<rect height="13" id="Rectangle-17" width="22" fill="#D8D8D8" x="24" y="25"/>
					<rect height="7" id="Rectangle-25" width="64" fill="#D8D8D8" x="19" y="216"/>
					<rect height="7" id="Rectangle-25" width="64" fill="#D8D8D8" x="19" y="155"/>
					<rect height="7" id="Rectangle-25" width="64" fill="#D8D8D8" x="19" y="281"/>
					<rect height="7" id="Rectangle-25" width="64" fill="#D8D8D8" x="19" y="92"/>
				</g>
				<g id="B5" transform="translate(101.000000, 161.000000)">
					<rect height="186" id="Rectangle-18" width="142" fill="#4C4A4A" x="0" y="47"/>
					<rect height="17" id="Rectangle-20" width="123" fill="#F0F0F0" x="9" y="63"/>
					<rect height="17" id="Rectangle-20" width="123" fill="#F0F0F0" x="9" y="101"/>
					<rect height="17" id="Rectangle-20" width="123" fill="#F0F0F0" x="9" y="140"/>
					<rect height="17" id="Rectangle-20" width="123" fill="#F0F0F0" x="9" y="178"/>
					<rect height="158" id="Rectangle-21" width="9" fill="#4C4A4A" x="25" y="59"/>
					<rect height="158" id="Rectangle-21" width="9" fill="#4C4A4A" x="107" y="59"/>
					<rect height="13" id="Rectangle-22" width="108" fill="#201F1F" x="16" y="34"/>
					<rect height="12" id="Rectangle-23" width="24" fill="#201F1F" x="58" y="22"/>
					<rect height="22" id="Rectangle-19" width="2" fill="#D8D8D8" x="69" y="0"/>
				</g>
				<g id="B4" transform="translate(293.500000, 197.000000) scale(-1, 1) translate(-293.500000, -197.000000) translate(243.000000, 0.000000)">
					<rect height="356" id="Rectangle-13" width="89" fill="#ACACAC" x="8" y="38"/>
					<rect height="16.477532" id="Rectangle-14" width="64.10929" fill="#D8D8D8" x="19" y="55.7612339"/>
					<rect height="16.477532" id="Rectangle-14" width="64.10929" fill="#D8D8D8" x="19" y="118.761234"/>
					<rect height="16.477532" id="Rectangle-14" width="64.10929" fill="#D8D8D8" x="19" y="181.761234"/>
					<rect height="16.477532" id="Rectangle-14" width="64.10929" fill="#D8D8D8" x="19" y="244.761234"/>
					<rect height="16.238766" id="Rectangle-14" width="63.1803209" fill="#D8D8D8" x="19.4644847" y="307.761234"/>
					<rect height="9" id="Rectangle-15" width="291" fill="#ACACAC" transform="translate(63.500000, 197.500000) rotate(-90.000000) translate(-63.500000, -197.500000) " x="-82" y="193"/>
					<rect height="356" id="Rectangle-16" width="8" fill="#D8D8D8" x="0" y="38"/>
					<rect height="356" id="Rectangle-16" width="8" fill="#D8D8D8" x="93" y="38"/>
					<rect height="27" id="Rectangle-24" width="3" fill="#ADADAD" x="28" y="0"/>
					<rect height="8" id="Rectangle-17" width="5" fill="#D8D8D8" x="19" y="30"/>
					<rect height="13" id="Rectangle-17" width="22" fill="#D8D8D8" x="24" y="25"/>
					<rect height="7" id="Rectangle-25" width="64" fill="#D8D8D8" x="19" y="216"/>
					<rect height="7" id="Rectangle-25" width="64" fill="#D8D8D8" x="19" y="155"/>
					<rect height="7" id="Rectangle-25" width="64" fill="#D8D8D8" x="19" y="281"/>
					<rect height="7" id="Rectangle-25" width="64" fill="#D8D8D8" x="19" y="92"/>
				</g>
			</g>
		</g>
		<rect height="394" id="Underground" width="1440" fill="#201F1F" x="0" y="406"/>
		<g id="SecretBuilding" transform="translate(548.000000, 406.000000)">
			<g id="B4">
				<rect height="356" id="Rectangle-13" width="89" fill="#ACACAC" x="8" y="38"/>
				<rect height="16.477532" id="Rectangle-14" width="64.10929" fill="#D8D8D8" x="19" y="55.7612339"/>
				<rect height="16.477532" id="Rectangle-14" width="64.10929" fill="#D8D8D8" x="19" y="118.761234"/>
				<rect height="16.477532" id="Rectangle-14" width="64.10929" fill="#D8D8D8" x="19" y="181.761234"/>
				<rect height="16.477532" id="Rectangle-14" width="64.10929" fill="#D8D8D8" x="19" y="244.761234"/>
				<rect height="16.238766" id="Rectangle-14" width="63.1803209" fill="#D8D8D8" x="19.4644847" y="307.761234"/>
				<rect height="9" id="Rectangle-15" width="291" fill="#ACACAC" transform="translate(63.500000, 197.500000) rotate(-90.000000) translate(-63.500000, -197.500000) " x="-82" y="193"/>
				<rect height="356" id="Rectangle-16" width="8" fill="#D8D8D8" x="0" y="38"/>
				<rect height="356" id="Rectangle-16" width="8" fill="#D8D8D8" x="93" y="38"/>
				<rect height="27" id="Rectangle-24" width="3" fill="#ADADAD" x="28" y="0"/>
				<rect height="8" id="Rectangle-17" width="5" fill="#D8D8D8" x="19" y="30"/>
				<rect height="13" id="Rectangle-17" width="22" fill="#D8D8D8" x="24" y="25"/>
				<rect height="7" id="Rectangle-25" width="64" fill="#D8D8D8" x="19" y="216"/>
				<rect height="7" id="Rectangle-25" width="64" fill="#D8D8D8" x="19" y="155"/>
				<rect height="7" id="Rectangle-25" width="64" fill="#D8D8D8" x="19" y="281"/>
				<rect height="7" id="Rectangle-25" width="64" fill="#D8D8D8" x="19" y="92"/>
			</g>
			<g id="B4" transform="translate(293.500000, 197.000000) scale(-1, 1) translate(-293.500000, -197.000000) translate(243.000000, 0.000000)">
				<rect height="356" id="Rectangle-13" width="89" fill="#ACACAC" x="8" y="38"/>
				<rect height="16.477532" id="Rectangle-14" width="64.10929" fill="#D8D8D8" x="19" y="55.7612339"/>
				<rect height="16.477532" id="Rectangle-14" width="64.10929" fill="#D8D8D8" x="19" y="118.761234"/>
				<rect height="16.477532" id="Rectangle-14" width="64.10929" fill="#D8D8D8" x="19" y="181.761234"/>
				<rect height="16.477532" id="Rectangle-14" width="64.10929" fill="#D8D8D8" x="19" y="244.761234"/>
				<rect height="16.238766" id="Rectangle-14" width="63.1803209" fill="#D8D8D8" x="19.4644847" y="307.761234"/>
				<rect height="9" id="Rectangle-15" width="291" fill="#ACACAC" transform="translate(63.500000, 197.500000) rotate(-90.000000) translate(-63.500000, -197.500000) " x="-82" y="193"/>
				<rect height="356" id="Rectangle-16" width="8" fill="#D8D8D8" x="0" y="38"/>
				<rect height="356" id="Rectangle-16" width="8" fill="#D8D8D8" x="93" y="38"/>
				<rect height="27" id="Rectangle-24" width="3" fill="#ADADAD" x="28" y="0"/>
				<rect height="8" id="Rectangle-17" width="5" fill="#D8D8D8" x="19" y="30"/>
				<rect height="13" id="Rectangle-17" width="22" fill="#D8D8D8" x="24" y="25"/>
				<rect height="7" id="Rectangle-25" width="64" fill="#D8D8D8" x="19" y="216"/>
				<rect height="7" id="Rectangle-25" width="64" fill="#D8D8D8" x="19" y="155"/>
				<rect height="7" id="Rectangle-25" width="64" fill="#D8D8D8" x="19" y="281"/>
				<rect height="7" id="Rectangle-25" width="64" fill="#D8D8D8" x="19" y="92"/>
			</g>
		</g>
		<rect height="26" id="Ground" width="1285" fill="#201F1F" x="78" y="397"/>
		<g id="SecretElevator" onClick={this.exitUnderground} transform="translate(649.000000, 397.000000)">
			<rect height="125" id="Rectangle-26" width="142" fill="#B0AFAF" x="0" y="0"/>
			<rect height="116" id="Rectangle-26" width="123" fill="#D8D8D8" x="10" y="9"/>
			<rect height="83" id="Rectangle-27" width="47" fill="#F3F1F1" x="31" y="42"/>
			<rect height="83" id="Rectangle-27" width="42" fill="#E3E1E1" x="71" y="42"/>
			<rect height="21" id="Rectangle-28" width="51" fill="#000000" x="46" y="13"/>
			<text id="G" fill="#F40000" fontFamily="Krungthep" fontSize="25">
				<tspan x="65" y="33">G</tspan>
			</text>
			<text id="LevelOne" fill="#F40000" fontFamily="Krungthep" fontSize="25">
				<tspan x="58" y="33">-1</tspan>
			</text>
			<text id="LevelTwo" fill="#F40000" fontFamily="Krungthep" fontSize="25">
				<tspan x="58" y="33">-2</tspan>
			</text>
		</g>
	</g>
</svg>
</Waypoint>
</div>
        )
    }
}

export default SecretOperation;