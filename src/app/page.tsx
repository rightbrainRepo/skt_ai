'use client';

import React, {useEffect, useRef, useState} from "react";
import styles from "@/assets/scss/pages/combined.module.scss";
// swiper
import {Swiper, SwiperClass, SwiperSlide} from "swiper/react";
import { Autoplay, Thumbs, EffectFade } from "swiper/modules";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

// lottie
import journeyAniData01 from '../../public/lottie/json/journeywithaster_01.json';
import journeyAniData02 from '../../public/lottie/json/journeywithaster_02.json';
import journeyAniData03 from '../../public/lottie/json/journeywithaster_03.json';
import journeyAniData04 from '../../public/lottie/json/journeywithaster_04.json';

// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

import JourneyLineMo from "@/app/components/journeyLineMo";
import JourneyLinePc from "@/app/components/journeyLinePc";
import JourneyLineBgMo from "@/app/components/journeyLineBgMo";
import JourneyLineBgPc from "@/app/components/journeyLineBgPc";
import JourneyDotPc from "@/app/components/journeyDotPc";
import JourneyDotMo from "@/app/components/journeyDotMo";
import JourneyObjectsPc from "@/app/components/journeyObjectsPc";
import JourneyObjectsMo from "@/app/components/journeyObjectsMo";
import JourneyEndPointPc from "@/app/components/journeyEndPointPc";
import JourneyEndPointMo from "@/app/components/journeyEndPointMo";
import RawPath = gsap.plugins.RawPath;
import Script from "next/script";
import WaitlistForm from "@/app/components/waitlist/form";

export default function Home() {
	// breakpoint check
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [heroSwiper, setHeroSwiper] = useState<SwiperClass>();
	const [indicatorSwiper, setIndicatorSwiper] = useState<SwiperClass>();

	// header sticky
	const headerRef = useRef<HTMLDivElement>(null);
	const sectionRef = useRef<HTMLDivElement>(null);

	// hero swiper
	useEffect(() => {
		// console.log('isMobile', isMobile);
		if (!indicatorSwiper || !heroSwiper) return;

		['mouseover', 'focusin'].forEach(function(eventType) {
			indicatorSwiper.slides.forEach((slide) => {
				slide.removeEventListener(eventType, changeActiveSlide);
				slide.addEventListener(eventType, changeActiveSlide);
			});
		});

		function changeActiveSlide(event:Event) {
			if (event.currentTarget) {
				const el:HTMLElement = event.currentTarget as HTMLElement;
				// console.log(el);
				// console.log('changeActiveSlide', event.type, indicatorSwiper?.slides.indexOf(event.currentTarget));
				if (indicatorSwiper?.slides.indexOf(el) !== undefined) {
					// console.log('changeActiveSlide');
					handleActiveSlide(indicatorSwiper?.slides.indexOf(el));
				}
			}
		}

		if (isMobile) {
			setTimeout(() => {
				indicatorSwiper?.slideTo(heroSwiper.realIndex);
			}, 100);
		}


		return () => {
			['mouseover', 'focusin'].forEach(function(eventType) {
				indicatorSwiper.slides.forEach((slide) => {
					slide.removeEventListener(eventType, changeActiveSlide);
				});
			})
		}
	}, [isMobile, heroSwiper, indicatorSwiper]);

	const onHeroSwiperAutoplay = (swiper:SwiperClass) => {
		// console.log('onHeroSwiperAutoplay');
		handleActiveSlide(swiper.realIndex);
	}

	const onIndicatorSlideChange = (swiper:SwiperClass) => {
		// console.log('onIndicatorSlideChange');
		handleActiveSlide(swiper.activeIndex);
	}

	const handleActiveSlide = (activeIndex:number) => {
		// console.log('handleActiveSlide', activeIndex, heroSwiper?.realIndex !== activeIndex, indicatorSwiper?.activeIndex !== activeIndex);

		indicatorSwiper?.slides.forEach((slide, index) => {
			slide.classList.remove('swiper-slide-active');
			if (index === activeIndex) {
				slide.classList.add('swiper-slide-active');
			}
		});
		if (heroSwiper?.realIndex !== activeIndex) {
			// console.log('heroSwiper slideTo', activeIndex);
			heroSwiper?.slideToLoop(activeIndex);
		}
		// console.log(indicatorSwiper?.activeIndex, activeIndex);
		if (indicatorSwiper?.activeIndex !== activeIndex && isMobile) {
			// console.log('indicatorSwiper slideTo', activeIndex);
			indicatorSwiper?.slideTo(activeIndex);
		}
	}

	// lottie
	const lottieJourney01 = useRef<HTMLDivElement | null>(null);
	const lottieJourney02 = useRef<HTMLDivElement | null>(null);
	const lottieJourney03 = useRef<HTMLDivElement | null>(null);
	const lottieJourney04 = useRef<HTMLDivElement | null>(null);

	function lottieLoadHandler() {
		loadLottie();
	}

	function loadLottie() {
		// console.log('loadLottie')
		const lottie = window?.lottie;

		if (!lottie) return;

		// journey Contents
		const lottieJourneys = [lottieJourney01, lottieJourney02, lottieJourney03, lottieJourney04];
		const journeyAniData = [journeyAniData01, journeyAniData02, journeyAniData03, journeyAniData04];

		const journeyInstances = lottieJourneys.map((journey, index) => {
			if (journey.current) {
				const animationInstance = lottie.loadAnimation({
					container: journey.current,
					renderer: 'svg',
					loop: true,
					autoplay: true,
					animationData: journeyAniData[index],
				});
				return {instance: animationInstance, played: false};
			}
			return null;
		});

		// IntersectionObserver 설정
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: [0.1, 1.0], // 100% 들어왔을 때 트리거
		};

		// const [isPlayed, setIsPlayed] = useState<number>(-1); // lottie 실행여부 확인

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					// console.log(`애니메이션 실행 시작, key index: ${targetIndex}`);
					// lottieJourneys 배열에 대한 애니메이션 실행
					const journeyIndex = lottieJourneys.findIndex(journey => journey.current === entry.target);
					if (journeyIndex !== -1) {
						if (journeyInstances[journeyIndex]?.played === false) {
							journeyInstances[journeyIndex]?.instance.goToAndPlay(30, true);
							journeyInstances[journeyIndex].played = true;
							// console.log(journeyInstances[journeyIndex]?.played)
						} else {
							console.log('already play');
						}
					}

				} else {
					// console.log(`애니메이션 실행 종료, key index: ${targetIndex}`);
					// lottieJourneys 배열에 대한 애니메이션 정지
					// const journeyIndex = lottieJourneys.findIndex(journey => journey.current === entry.target);
					// if (journeyIndex !== -1) {
					// 	journeyInstances[journeyIndex]?.stop();
					// }
				}
			});
		};

		// 옵저버 생성
		const observer = new IntersectionObserver(observerCallback, observerOptions);

		lottieJourneys.forEach(journey => {
			if (journey.current) observer.observe(journey.current);
		});

		return () => {
			observer.disconnect(); // 종료
			journeyInstances.forEach(item => {
				item?.instance.destroy();
			});
		};
	}

	// gsap
	const journeyLine = useRef<HTMLDivElement | null>(null);
	const journeyLineStroke = useRef<HTMLDivElement | null>(null);
	const journeyLineObject = useRef<HTMLDivElement | null>(null);
	const journeyDot = useRef<HTMLDivElement | null>(null);
	const journeyEndPoint = useRef<HTMLDivElement | null>(null);

	const [lastWindowWidth, setLastWindowWidth] = useState<number>(-1);
	// GSAP animation
	useEffect(() => {
		let timeoutId: undefined | number | ReturnType<typeof setTimeout> = undefined;

		const updateScreenSize = () => {
			setIsMobile(window.innerWidth < 769); // 768px 기준으로 Mobile/PC 구분

			if (window.innerWidth === lastWindowWidth) return;
			setLastWindowWidth(window.innerWidth);
			// alert(`window.innerWidth ${window.innerWidth}, lastWindowWidth ${lastWindowWidth}`);
			// console.log('setJourneyLineGSAP', window);
			// setJourneyLineGSAP();
			if (timeoutId !== null) {
				// console.log('clearTimer');
				clearTimeout(timeoutId);
				timeoutId = -1;
			}
			timeoutId = setTimeout(function () {
				setJourneyLineGSAP();
			}, 100);
			// console.log('timer', timeoutId);
		};

		const setJourneyLineGSAP = () => {
			// console.log('setJourneyLineGASP Func',window.innerWidth, lastWindowWidth);
			if (journeyLine.current === null) return;

			const mainLine = journeyLine.current.querySelector(".svg-line-main") as SVGPathElement | null;
			const pathSvg = journeyLineStroke.current as SVGElement | null;
			const dot = journeyDot.current as SVGElement | null;

			if (pathSvg === null || mainLine === null) return;

			const path = pathSvg.querySelector('path') as SVGPathElement;
			const length = path.getTotalLength().toString();
			path.style.strokeDasharray = length;
			path.style.strokeDashoffset = length;

			// ScrollTrigger.refresh();
			ScrollTrigger.killAll();

			// Draw SVG path on scroll
			gsap.fromTo(path,
				{strokeDashoffset: length},
				{
					strokeDashoffset: 0,
					scrollTrigger: {
						trigger: mainLine,
						start: "top center",
						end: () => "+=" + (mainLine.getBoundingClientRect().height - (isMobile ? 300 : 309)),
						scrub: true,
					},
					ease: pathEase(mainLine), // a custom ease that
				}
			);
			gsap.fromTo(dot, {
					motionPath: {
						path: mainLine,
						align: mainLine,
						// autoRotate: true,
						alignOrigin: [0.5, 0.5],
					},
				},
				{
					scrollTrigger: {
						trigger: mainLine,
						start: "top center",
						// end: "bottom center",
						end: () => "+=" + (mainLine.getBoundingClientRect().height - (isMobile ? 300 : 309)),
						scrub: 0.5,
						// markers: true,
						onRefresh: () => {
							// Re-apply motionPath on refresh
							gsap.set(dot, {
								ease: pathEase(mainLine), // a custom ease that
								motionPath: {
									path: mainLine,
									align: mainLine,
									// autoRotate: true,
									alignOrigin: [0.5, 0.5],
								}
							});
						}
					},
					ease: pathEase(mainLine), // a custom ease that
					motionPath: {
						path: mainLine,
						align: mainLine,
						// autoRotate: true,
						alignOrigin: [0.5, 0.5],
					},
					duration: 1,
				}
			);

			ScrollTrigger.refresh();
		}

		function pathEase(path: SVGPathElement) {
			const precision = 1;

			const rawPath:RawPath = MotionPathPlugin.cacheRawPathMeasurements(MotionPathPlugin.getRawPath(gsap.utils.toArray(path)[0] as SVGPathElement), Math.round(precision * 12));
				const useX = false;
				const start = rawPath[0][useX ? 0 : 1];
				const end = rawPath[rawPath.length - 1][rawPath[rawPath.length-1].length - (useX ? 2 : 1)];
				const range = end - start;
				const l = Math.round(precision * 200);
				const inc = 1 / l;
				const positions = [0];
				const a:number[] = [];
				let minIndex = 0;
				const smooth = [0];
				const minChange = (1 / l) * 0.5;
				const smoothRange = 0;
				const fullSmoothRange = smoothRange * 2;
				const getClosest = (p:number) => {
					while (positions[minIndex] <= p && minIndex++ < l) { }
					a.push((p - positions[minIndex-1]) / (positions[minIndex] - positions[minIndex - 1]) * inc + minIndex * inc);
					if(smoothRange && a.length > smoothRange && (a[a.length - 1] - a[a.length - 2] < minChange)) smooth.push(a.length - smoothRange);
				}
				let i = 1;

			for (; i < l; i++) {
				positions[i] = (MotionPathPlugin.getPositionOnPath(rawPath, i / l)['y'] - start) / range;
			}

			positions[l] = 1;
			for (i = 0; i < l; i++) {
				getClosest(i / l);
			}
			a.push(1); // must end at 1.
			if (smoothRange) { // smooth at the necessary indexes where a small difference was sensed. Make it a linear change over the course of the fullSmoothRange
				smooth.push(l-fullSmoothRange+1);
				smooth.forEach(i => {
					const start = a[i];
					const j = Math.min(i + fullSmoothRange, l);
					const inc = (a[j] - start) / (j - i);
					let c = 1;
					i++;
					for (; i < j; i++) {
						a[i] = start + inc * c++;
					}
				});
			}
			return (p:number) => {
				const i = p * l;
				const s = a[i | 0];
				return i ? s + (a[Math.ceil(i)] - s) * (i % 1) : 0;
			}
		}

		setIsMobile(window.innerWidth < 768); // 768px 기준으로 Mobile/PC 구분
		updateScreenSize(); // 초기화
		setJourneyLineGSAP();

		window.addEventListener("resize", updateScreenSize);
		return () => {
			window.removeEventListener("resize", updateScreenSize);
			clearTimeout(timeoutId);
		};

	}, [isMobile, lastWindowWidth]);

	// video
	const [isFirstPlayed, setIsFirstPlayed] = useState(false); // play

	const videoRef = useRef<HTMLVideoElement | null>(null);
	const videoBoxRef = useRef<HTMLDivElement | null>(null);

	// Play video
	const playVideo = () => {
		if (videoRef.current) {
			const videoEl = videoRef.current;
			videoEl.play();
			if(!isFirstPlayed) {
				setIsFirstPlayed(true);
			}

			try {
				if (typeof window.gtag === "function") {
					window.gtag("event", "video_play", {
						event_category: "Video",
						event_label: "Aster Intro Video",
					});
				} else {
					if (process.env.NODE_ENV === "development") {
						console.warn("Google Analytics is not initialized. Event not sent.");
					}
				}
			} catch (error) {
				console.error("Failed to send GA event:", error);
			}

			if (isMobile && videoEl.requestFullscreen) {
				videoEl.requestFullscreen();
			}
		}
	};
	console.log(process.env)

	// 김재성 : 최종 산출물은 제거 & 이미지 경로도 다 수정해야됨
	const assetPath = process.env.NEXT_PUBLIC_ASSET_PATH ? process.env.NEXT_PUBLIC_ASSET_PATH : '';
	return (
		<>
			<Script
				src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"
				onLoad={lottieLoadHandler}
			/>
			<div className={styles['wrapper']}>
				{/* header-wrapper */}
				<header className={`${styles['header-wrapper']}`} ref={headerRef}>
					<div className={styles['header-inner']}>
						<h1 className={styles['logo-box']}>
							<a href={`${assetPath}`} className={styles['logo-link']}>
								<img src={`${assetPath}/images/header_logo_white.svg`} alt="aster logo" className={styles['logo-white']} />
							</a>
						</h1>
					</div>
				</header>
				{/* // header-wrapper */}
				{/* container-wrapper */}
				<main className={styles['container-wrapper']}>
				<div className={styles['content-wrap']}>
					<div ref={sectionRef} className={styles['cont-full-box']}>
						<div className={styles['swiper-container']}>
							<Swiper
								className={styles['swiper-wrap']}
								modules={[Autoplay, Thumbs, EffectFade]}
								slidesPerView={1}
								watchSlidesProgress={true}
								allowTouchMove={false}
								effect={'fade'}
								onSwiper={setHeroSwiper}
								autoplay={{delay: 3000, disableOnInteraction: false}}
								onAutoplay={onHeroSwiperAutoplay}
							>
								<SwiperSlide className={styles['first-slide'] || ''}>
									<div className={styles['thumb-swiper-inner']}>
										<div className={styles['thumb-box']}>
											{!isMobile ? <img src={`${assetPath}/images/img_swiper_life.jpg`} alt="" />
												: <img src={`${assetPath}/images/img_swiper_life_mo.jpg`} alt="" />
											}
										</div>
										<div className={styles['banner-title-box']}>
											<span className={styles['text']}>Navigate</span>
											<span className={styles['text']}>your</span>
											<span className={styles['text']}>life</span>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className={styles['thumb-swiper-inner']}>
										<div className={styles['thumb-box']}>
											{!isMobile ? <img src={`${assetPath}/images/img_swiper_plan.jpg`} alt="" />
												: <img src={`${assetPath}/images/img_swiper_plan_mo.jpg`} alt="" />
											}
										</div>
										<div className={styles['banner-title-box']}>
											<span className={styles['text']}>Kickstart</span><br />
											<span className={styles['text']}>your</span>
											<span className={styles['text']}>plans</span>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className={styles['thumb-swiper-inner']}>
										<div className={styles['thumb-box']}>
											{!isMobile ? <img src={`${assetPath}/images/img_swiper_execution.jpg`} alt="" />
												: <img src={`${assetPath}/images/img_swiper_execution_mo.jpg`} alt="" />
											}
										</div>
										<div className={styles['banner-title-box']}>
											<span className={styles['text']}>Aster</span>
											<span className={styles['text']}>helps</span>
											<span className={styles['text']}>you</span>
											<span className={styles['text']}>execute</span>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className={styles['thumb-swiper-inner']}>
										<div className={styles['thumb-box']}>
											{!isMobile ? <img src={`${assetPath}/images/img_swiper_reminder.jpg`} alt="" />
												: <img src={`${assetPath}/images/img_swiper_reminder_mo.jpg`} alt="" />
											}
										</div>
										<div className={styles['banner-title-box']}>
											<span className={styles['text']}>Aster</span>
											<span className={styles['text']}>sends</span>
											<span className={styles['text']}>you</span>
											<span className={styles['text']}>reminders</span>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className={styles['thumb-swiper-inner']}>
										<div className={styles['thumb-box']}>
											{!isMobile ? <img src={`${assetPath}/images/img_swiper_advice.jpg`} alt="" />
												: <img src={`${assetPath}/images/img_swiper_advice_mo.jpg`} alt="" />
											}
										</div>
										<div className={styles['banner-title-box']}>
											<span className={styles['text']}>Aster</span>
											<span className={styles['text']}>gives</span>
											<span className={styles['text']}>you</span>
											<span className={styles['text']}>advice</span>
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
							<Swiper
								className={styles['swiper-thumb-wrap']}
								modules={[Autoplay, Thumbs]}
								speed={600}
								slidesPerView={'auto'}
								centeredSlides={true}
								// loop={true}
								// loopAdditionalSlides={10}
								breakpoints={{
									768: {
										slidesPerView: 5,
										centeredSlides: false,
										loop: false,
										allowTouchMove: false,
									}
								}}
								onSwiper={setIndicatorSwiper}
								onSlideChange={onIndicatorSlideChange}
							>
								<SwiperSlide>
									<span className={styles['swiper-title']}>Navigate<br />your life</span>
									<span className={styles['active-icon']}>
										<img src={`${assetPath}/images/hero_indicator_01.svg`} alt="" />
									</span>
								</SwiperSlide>
								<SwiperSlide>
									<span className={styles['swiper-title']}>Kickstart<br />your plans</span>
									<span className={styles['active-icon']}>
										<img src={`${assetPath}/images/hero_indicator_02.svg`} alt="" />
									</span>
								</SwiperSlide>
								<SwiperSlide>
									<span className={styles['swiper-title']}>Aster helps<br />you execute</span>
									<span className={styles['active-icon']}>
										<img src={`${assetPath}/images/hero_indicator_03.svg`} alt="" />
									</span>
								</SwiperSlide>
								<SwiperSlide>
									<span className={styles['swiper-title']}>Aster sends<br />you reminders</span>
									<span className={styles['active-icon']}>
										<img src={`${assetPath}/images/hero_indicator_04.svg`} alt="" />
									</span>
								</SwiperSlide>
								<SwiperSlide>
									<span className={styles['swiper-title']}>Aster gives<br />you advice</span>
									<span className={styles['active-icon']}>
										<img src={`${assetPath}/images/hero_indicator_05.svg`} alt="" />
									</span>
								</SwiperSlide>
							</Swiper>
						</div>
						<WaitlistForm />
					</div>
					<div className={styles['cont-box']} id="intro-aster">
						<div className={styles['cont-inner']}>
							<div className={styles['ctitle-wrap']}>
								<p className={styles['ctitle']}>Introducing Aster</p>
								<span className={styles['ico-green-aster']}></span>
								<p className={styles['stext']}>
									Aster is a Personal AI Agent designed to simplify life management.
									By engaging in conversations, it understands user intentions,
									provides personalized recommendations, and connects planning to
									execution to enhance daily productivity.
								</p>
							</div>
							<div ref={videoBoxRef} className={styles['video-box']}>
								<video ref={videoRef} controls={isFirstPlayed} poster={`${assetPath}/video/video_poster.jpg`} >
									<source src={`${assetPath}/video/video.mp4`} type="video/mp4" />
								</video>

								{/* Play button */}
								{!isFirstPlayed && isMobile && (
									<button type="button" className={styles['controls']} onClick={playVideo}>
										<span className={styles['btn-play']}>
											<span className="offscreen">Play Mobile</span>
										</span>
									</button>
								)}

								{!isFirstPlayed && !isMobile && (
									<button type="button" className={styles['controls']} onClick={playVideo}>
										<span className={styles['btn-play']}>
											<span className="offscreen">Play</span>
										</span>
									</button>
								)}
							</div>
						</div>
					</div>
					<div className={styles['cont-box']} id="aster-journey">
						<div className={styles['cont-inner']}>
							<div className={styles['journey-list-wrap']}>
								<ul className={styles['journey-list']}>
									<li className={styles['journey-item']}>
										<div className={styles['info-area']}>
											<div className={styles['info-title']}>Understand Your Intents, Simplify Your Path</div>
											<div className={styles['info-desc']}>Aster asks clarifying questions, so that your intent leads to more personalized and relevant information and recommendations.
											</div>
										</div>
										<div className={styles['img-area']}>
											<img src={`${assetPath}/images/img_journey_01.jpg`} alt="journey image" />
											<div ref={lottieJourney01} className={styles['journey-ani']}></div>
										</div>
									</li>
									<li className={styles['journey-item']}>
										<div className={styles['info-area']}>
											<div className={styles['info-title']}>Planning Made Simple, Tasks Made Actionable</div>
											<div className={styles['info-desc']}>Aster creates personalized plans based on your
												objectives, breaking them down into clear, actionable tasks for effortless execution.
											</div>
										</div>
										<div className={styles['img-area']}>
											<img src={`${assetPath}/images/img_journey_02.jpg`} alt="journey image" />
											<div ref={lottieJourney02} className={styles['journey-ani']}></div>
										</div>
									</li>
									<li className={styles['journey-item']}>
										<div className={styles['info-area']}>
											<div className={styles['info-title']}>From Planning to Action, Seamlessly</div>
											<div className={styles['info-desc']}>Connect with powerful services to expand your plans and
												turn them into tangible results, all in one place
											</div>
										</div>
										<div className={styles['img-area']}>
											<div ref={lottieJourney03} className={styles['journey-ani']}></div>
										</div>
									</li>
									<li className={styles['journey-item']}>
										<div className={styles['info-area']}>
											<div className={styles['info-title']}>Stay on Track with Timely <br />Reminders
											</div>
											<div className={styles['info-desc']}>Get notifications and alerts to ensure you never lose
												focus, keeping you aligned with your plans and goals.
											</div>
										</div>
										<div className={styles['img-area']}>
											<img src={`${assetPath}/images/img_journey_04.jpg`} alt="journey image" />
											<div ref={lottieJourney04} className={styles['journey-ani']}></div>
										</div>
									</li>
								</ul>
							</div>
							<div className={styles['journey-advice']}>
								<div className={styles['info-title']}>Personalized Advice,<br />Just for you</div>
								<div className={styles['info-desc']}>Aster offers tailored advice to help you make<br />decisions, solve challenges, and maximize your day.</div>
							</div>
							<div className={styles['journey-svg-wrap']}>
								<div ref={journeyLine} className={styles['journey-bg-box']}>
									{isMobile ? <JourneyLineMo /> : <JourneyLinePc />}
								</div>
								<div ref={journeyLineStroke} className={styles['journey-bg-stroke-box']}>
									{isMobile ? <JourneyLineBgMo /> : <JourneyLineBgPc />}
								</div>
								<div ref={journeyLineObject} className={styles['journey-bg-object-box']}>
									{isMobile ? <JourneyObjectsMo /> : <JourneyObjectsPc />}
								</div>
								<div ref={journeyDot} className={styles['journey-dot']}>
									{isMobile ? <JourneyDotMo /> : <JourneyDotPc />}
								</div>
								<div ref={journeyEndPoint} className={styles['journey-end-point']}>
									{isMobile ? <JourneyEndPointMo /> : <JourneyEndPointPc />}
								</div>
							</div>
						</div>
					</div>
				</div>
				</main>
				{/* // container-wrapper */}
				{/* footer-wrapper */}
				<footer className={styles['footer-wrapper']}>
					<div className={styles['footer-inner']}>
						<div className={styles['footer-left']}>
							<address className={styles['address-info']}>
								<span className={styles['group']}>
									<a href={`${assetPath}/termsofuse`}>Terms of Use</a>
									<a href={`${assetPath}/privacypolicy`}>Privacy Policy</a>
								</span>
								<span className={styles['group']}>
									<span>Contact us</span>
									<a href="mailto:ask@asterapp.ai" type="email">ask@asterapp.ai</a>
								</span>
							</address>
							<p className={styles['copyright-info']}>© 2025 SK TELECOM CO., LTD. ALL RIGHTS RESERVED.</p>
						</div>
						<div className={styles['footer-right']}>
							<div className={styles['logo-box']}>
								<img src={`${assetPath}/images/footer_logo_white.svg`} alt="aster logo" className={styles['logo-white']} />
							</div>
						</div>
					</div>
				</footer>
				{/* // footer-wrapper */}
			</div>
		</>
	);
}
