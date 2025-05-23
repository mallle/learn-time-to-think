interface FlipCard {
    question: string;
    answer: string;
    additionalInfo?: string[] | undefined;
    questionsToAsk?: string[] | undefined;
    iq?: string,
    example?: {
        outcome: string,
        questionForAssumptions: string
    }
}