export const nextOutcomes: { [key: string]: {[key: number]: FlipCard[] }} = {
    en: { 
        1: [
            {
                question: "Action",
                answer: "The Thinker want to plan, decide, figure out how, etc. They are blocked by an untrue limiting assumption. They need to replace it with and embed, a true liberation one in order to achieve that outcome.",
                iq: "If you knew that ______, how would you ______? "
            },
            {
                question: "Stop Doing, Stop Feeling, Remove Blocks",
                answer: "Finding the untrue limiting assumption and then embed a true liberation alternative assumption through an Incisive Question",
                iq: "If you knew that ______, how would you ______? ",      
            },
            {
                question: "Feeling",
                answer: "The Thinker wants to feel a certain way. Determining untrue assumptions that blocks the feeling the thinker wants to think, and then find the untrue liberating assumption.",
                iq: "If you knew that ______, how would you feel?",
            },
        ],
        2: [
            {
                question: "Understanding Why I",
                answer: "The Thinker has to find the untrue assumption and found out if this is true or not. We do not need an Incisive question here.",
                iq: "No IQ - only find the untrue assumption"
            },
            {
                question: "Identifying All Assumptions",
                answer: "Finding all the assumptions about something.",
                questionsToAsk: [
                    "What are you assuming that _____(insert focus of assumptions)?",
                    "And what else are you assuming that _____(insert focus of assumptions)?",
                ],
                iq: "No IQ - only collect all assumptions"      
            },
        ],
        3: [
            {
                question: "Start Assuming Something",
                answer: "Conforming the truth of a specific assumption and embed it with an Incisive question.",
                questionsToAsk: [
                    "Confirm the truth of the assumption",
                ],
                iq: "If you knew that ______, what would change for you."      
            },
            {
                question: "Stop Assuming Something",
                answer: "First conforming that an assumption is untrue, and then find the liberation true assumption and embed it with an Incisive Question",
                questionsToAsk: [
                    "Confirm assumption to be untrue",
                    "Find true liberation assumption",
                ],
                iq: "If you knew that ______, how would you ______? ",    
            },
            {
                question: "Feeling the Truth or Untruth of an Assumption",
                answer: "Thinker want to feel the truth or untruth of an assumption. To do so the Thinker has to find the true liberation alternative assumption and embed it with an Incisive Question",
                questionsToAsk: [
                    "Found assumption is untrue",
                    "Find the true liberation assumption",
                ],
                iq: "If you knew that ______, how would you feel?",       
            },
        ],
        },
    de: {
        1: [
            {
                question: "Aktion",
                answer: "Die denkende Person will planen, entscheiden oder herrausfinden was sie tun kann. Aber das denken ist blokiert.",
                iq: "Wenn du wüsstest, dass ______ wie würdest du dann ______? ",
            },
            {
                question: "Aufhören etwas zu tun, Aufhören etwas zu fühlen, Blokaden auflösen",
                answer: "Wenn die denkende Person aufhören will et was zu tun oder fühlen oder blokaden auflösen möchte",
                iq: "Wenn du wüsstest, dass ______ wie würdest du dann ______? ",
            },
            {
                question: "Gefühl",
                answer: "Wenn der denkende sich auf eine bestimmte art und weise fühlen will.",
                iq:"Wenn du wüsstest, dass ______, wie würdest du dich fühlen?"
            },
        ],
        2: [
            {
                question: "Verstehen warum ich ...",
                answer: "Braucht keine Incisive Question. ",
                iq: "Keine IQ - finde nur die unwahre annahme."
            },
            {
                question: "Alle Annahmen herausfinden",
                answer: "",
                questionsToAsk: [
                    "Welche Annahmen hast du zu ______?",
                    "Und welche Annahmen hast du noch zu ______?",
                ],
                iq: "Keine iq: nur alle annahmen sammeln."
            },
        ],
        3: [
            {
                question: "Anfangen etwas anzunehmen",
                answer: "",
                questionsToAsk: [
                    "Bestätigen das die annahme wahr ist."
                ],
                iq: "Wenn du wüsstest, dass ______, was würde sich für dich verändern?"
            },
            {
                question: "Aufhören etwas anzunehmen",
                answer: "",
                questionsToAsk: [
                    "Annahme als unwahr bestätigen",
                    "Wahre befreiende annahme finden",
                    "Verinnerlichen der Wahre befreiende annahme durch IQ"
                ],
                iq: "Wenn du wüsstest, dass ______ wie würdest du dann ______?"
            },
            {
                question: "Fühlen, dass eine Annahme war oder unwahr ist",
                answer: "",
                questionsToAsk: [
                    "Annahme als unwahr erkannt",
                    "Wahre befreiende annahme finden"
                ],
                iq: "Wenn du wüsstest, dass ______, wie würdest du dich fühlen?"
            },
        ]
    }
};