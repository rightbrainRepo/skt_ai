declare global {
	interface Window {
		lottie:any;
		gtag?: (...args: any[]) => void;
	}
}

export const lottie = window.lottie;
