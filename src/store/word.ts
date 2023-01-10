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
        const availableWords = [...WORDS];

        set((state) => {
            const index = availableWords.indexOf(state.word);
            if (index > -1) {
                availableWords.splice(index, 1);
            }
    
            const randomIndex = Math.floor(Math.random() * availableWords.length);
            const word = availableWords[randomIndex];
        
            return {
                word,
                customWord: true,
            }
        });
    },
}));