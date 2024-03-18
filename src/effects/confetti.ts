import confetti, { Options } from "canvas-confetti";

export const fireConfetti = (): void => {
    const options: Options = {
        particleCount: 100,
        spread: 160,
        colors: ["#ffc600", "#abe2de", "#ee2fbe", "#65ae3c"],
        angle: 90,
    };

    confetti(options);
};
