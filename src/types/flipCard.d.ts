interface FlipCard {
    question: string;
    answer: string;
    additionalInfo?: string[] | undefined;
    questionsToAsk?: string[];
}