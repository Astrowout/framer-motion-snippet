import create from "zustand";

const WORDS = [
    "Plopkoeken",
    "Dinokoeken",
    "Smurfkoeken",
    "Moederkoeken",
    "Koffiekoeken",
    "Vitabiskoeken",
];

type WordState = {
    word: string;
    customWord: boolean;
    setRandomWord: () => void;
};

export default create<WordState>((set) => ({
    word: "Plopkoeken",
    customWord: false,
    setRandomWord: () => {
        const randomIndex = Math.floor(Math.random() * WORDS.length);
        const word = WORDS[randomIndex];

        set({
            word,
            customWord: true,
        });
    },
}));