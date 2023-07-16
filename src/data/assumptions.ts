export const assumptions: { [key: string]: {[key: string]: Assumptions[] }} = {
    en: { 
        assumption: [
            {
                type: "Check assumption",
            },
        ],
        types: [ 
                {
                    thinker: "Thinker: true", 
                    criteria: "Criteria: untrue", 
                    type: "Makes you think it question",
                    question: "What are you assuming that makes you think it is true that .....?"
                },
                {
                    thinker: "Thinker: true (ongoing)", 
                    criteria: "Criteria: untrue", 
                    type: "Invitation Question",
                    question: "You want to ....., you this it is true that ....., what could you credibly assume instead in order to .....?"
                },
                {
                    thinker: "Thinker: untrue", 
                    criteria: "Criteria: untrue", 
                    type: "Question for the true liberation assumption",
                    question: "As it is not true that ....., what do you think is true an liberation instead?"
                },
                {
                    thinker: "Thinker: true or possible", 
                    criteria: "Criteria: true or possible", 
                    type: "Transition Question",
                    question: "It is possible that ....., what are you assuming that causes to stop/make you ..... ?",
                },
                {
                    descriptions: [
                        "Stop thinking that something is true that is true",
                        "Start thinking something is untrue that is true"
                    ],
                    type: "Makes you want to think it question",
                    question: "What are you assuming that makes you want to think it is untrue (or stop thinking it is true) that?",
                },
            ],
        },
    de: {
        assumption: [
            {
                type: "Check assumption",
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
                type: "Übergangsfrage",
                question: "Es ist möglich, dass ...... Welche Annahme verursacht, dass DAS dich daran hindert/dazu führt?",
            },
            {
                descriptions: [
                    "Aufhören zu denken das et was wahr ist was wahr ist",
                    "Anfagen etwas für unwaht zu halten was wahr ist",
                ],
                type: "Möchtest du das denken Frage",
                question: "Welche Annahme führt dazu, dass du denken möchtest es sei unwahr, dass .....? oder das du aufhören möchtest du denken es sei wahr, dass .....?",
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
