export const assumptions: { [key: string]: { [key: string]: Assumptions[] } } = {
    en: {
        assumption: [
            {
                type: "Check assumption",
                question: "Determining the Truth of an Assumption",
                descriptions: [
                    "Do you think it is true that _____? ",
                    "What are your reasons for thinking so? ",
                ]
            },
        ],
        types: [
            {
                thinker: "Thinker: true",
                criteria: "Criteria: untrue",
                // type: "Makes you think it question",
                type: "The Makes It Seem Question",
                "question": "What are you assuming that makes that seem true to you?",
                // question: "What are you assuming that makes you think it is true that .....?"
            },
            {
                thinker: "Thinker: true (ongoing)",
                criteria: "Criteria: untrue",
                type: "Invitation Question",
                question: "You want to ....., you think it is true that ....., what could you credibly assume instead in order to .....?"
            },
            {
                thinker: "Thinker: untrue",
                criteria: "Criteria: untrue",
                type: "Question for the true liberating assumption",
                question: "As it is not true that ....., what do you think is true and liberating instead?"
            },
            {
                thinker: "Thinker: true or possible",
                criteria: "Criteria: true or possible",
                type: "Transition/Causes Question (So what?)",
                question: "It is possible that ....., what are you assuming that causes that to stop/make you .....?",
            },
            {
                // type: "Makes you want to think it question",
                type: "The Seem Question (assumption true/untrue) / The Need To Be Question (assumption untrue)",
                descriptions: [
                    "Start thinking something is untrue that is actually true",
                    "Stop thinking that something is true that is actually true"
                ],
                // question: "What are you assuming that makes you want to think it is untrue that .....?     What are you assuming that makes you want to stop thinking it is true that .....?",
                question: "You think it is true/untrue that (insert true/untrue assumption). What are you assuming that makes that seem true/untrue to you? / Although you think it is untrue (or unknowable) that (insert untrue/unknowable assumption), you want to think it is true. What are you assuming that makes that need to be true for you?",
            },
        ],
    },
    de: {
        assumption: [
            {
                type: "Check Annahmen",
                question: "Den Wahrheitsgehalt einer Annahme bestimmen",
                descriptions: [
                    "Denkst du, dass es wahr ist, dass _____?",
                    "Was sind deine Gründe das zu denken? "
                ]
            },
        ],
        types: [
            {
                thinker: "Denker: wahr",
                criteria: "Kriterien: unwahr",
                type: "Lässt dich dass denken Frage",
                question: "Welche Annahme lässt dich denken, es sei wahr, dass .....?",
            },
            {
                thinker: "Denker: wahr (weiterhin)",
                criteria: "Kriterien: unwahr",
                type: "Einladungsfrage",
                question: "Du möchtest ....., du denkst, dass es wahr ist, dass ...... Was könntest du stattdessen glaubhaft annehmen um .....?",
            },
            {
                thinker: "Denker: unwahr",
                criteria: "Kriterien: unwahr",
                type: "Frage nach der befreiende Annahme",
                question: "Wenn es nicht wahr ist, dass ....., was denkst du, ist stattdessen wahr und befriend?",
            },
            {
                thinker: "Denker: wahr oder möglich",
                criteria: "Kriterien: wahr oder möglich",
                type: "Übergangsfrage (So what?)",
                question: "Es ist möglich, dass ...... Welche Annahme verursacht, dass DAS dich daran hindert/dazu führt?",
            },
            {
                descriptions: [
                    "Aufhören zu denken das et was wahr ist was wahr ist",
                    "Anfagen etwas für unwahr zu halten was wahr ist",
                ],
                type: "Möchtest du das denken Frage",
                question: "Welche Annahme führt dazu, dass du denken möchtest es sei unwahr, dass .....? Welche Annahme führt dazu dass du aufhören möchtest zu denken es sei wahr, dass .....?",
            },
        ]
    }
};

export const incisiveQuestion: { [key: string]: IncisiveQuestion } = {
    en: {
        name: "True liberating assumption found",
        questions: [
            "If you knew that ....., how would you ......?",
            "If you knew that ....., how else would you ......?",
        ],
        type: "Incisive Question",
    },
    de: {
        name: "Wahre befriende Annahme gefunden",
        questions: [
            "Wenn du wüsstes dass.... wie würdest du .....?",
            "Wenn du wüsstes dass.... wie würdest du nochs .....?",
        ],
        type: "Incisive Question",
    }
}
