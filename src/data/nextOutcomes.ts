export const nextOutcomes: { [key: string]: { [key: number]: FlipCard[] } } = {
    en: {
        1: [
            {
                question: "Action",
                answer: "The Thinker wants to <b>plan</b>, <b>decide</b>, <b>figure out how</b>, etc. They are blocked by an untrue limiting assumption. They need to replace it with, and embed a true liberating one in oder to achieve that outcome.",
                questionsToAsk: [
                    "GQ: 1-6",
                    "Blocking Assumption",
                ],
                iq: "If you knew that ______, how would you ______? "
            },
            {
                question: "Stop Doing, Stop Feeling, Remove Blocks",
                answer: "The Thinker can <b>stop doing or feeling things</b>, or <b>remove blocks to something</b>, by finding the untrue limiting assumption that is making them do or feel that thing, and then embed a true liberating alternative assumption through an Incisive Question.",
                questionsToAsk: [
                    "GQ: 1-6",
                    "Blocking Assumption",
                ],
                iq: "If you knew that ______, what would change for you?",
            },
            {
                question: "Feeling",
                answer: "The Thinker <b>wants to feel a certain way</b>. For those outcomes the Thinker removes the blocks by determining first what untrue assumption is blocking the feeling, and then finding and embedding a liberating alternative assumption through an Incisive Question in order to produce the desired feeling.",
                questionsToAsk: [
                    "GQ: 1-6",
                    "Blocking Assumption",
                ],
                iq: "If you knew that ______, how would you feel?",
            },
        ],
        2: [
            {
                question: "Understanding Why I",
                answer: "When the Thinker wants to <b>understand why they do or feel something</b>, all they have to do is to find the untrue assumption that is making them do or feel that, and they need to have the answer to 'why I'",
                questionsToAsk: [
                    "GQ: 1-6",
                    "Blocking Assumption -> until untrue limiting assumption is found.",
                    "You want to understand why ______, you now know that ______, du you now understand why you ______?"
                ],
                iq: "No IQ - only find the untrue limiting assumption"
            },
            {
                question: "Identifying All Assumptions",
                answer: "<b>Finding all the assumptions</b> the Thinker is making about something.",
                questionsToAsk: [
                    "GQ: 1-3",
                    "What are you assuming about _____(insert focus of assumptions)?",
                    "And what else are you assuming about _____(insert focus of assumptions)?",
                ],
                iq: "No IQ - only collect all assumptions"
            },
        ],
        3: [
            {
                question: "Start Assuming Something",
                answer: "The Thinker may want to <b>start assuming something</b>. They can do that by confirming the truth of the assumption and then embedding it through an Incisive Question.",
                questionsToAsk: [
                    "GQ: 1-3",
                    "Blocking Assumption",
                    "Confirm the truth of the assumption",
                ],
                iq: "If you knew that ______, what would change for you?"
            },
            {
                question: "Stop Assuming Something",
                answer: "The Thinker may want to <b>stop assuming something</b>. They can do that by confirming the assumption to be untrue (or finding one inside it that is untrue), and then start assuming something liberation and true by embedding it through an Incisive Question.",
                questionsToAsk: [
                    "GQ: 1-3",
                    "Blocking Assumption",
                    "Confirm assumption to be untrue",
                    "Find true liberation assumption",
                ],
                iq: "If you knew that ______, what would change for you?",
            },
            {
                question: "Feeling the Truth or Untruth of an Assumption",
                answer: "The Thinker want to <b>feel the truth or untruth of an assumption</b> that they already know ot be untrue. They can do that by finding the true liberating alternative assumption and embedding it through an Incisive Question.",
                questionsToAsk: [
                    "GQ: 1-3",
                    "Blocking Assumption",
                ],
                iq: "If you knew that ______, how would you feel?",
            },
        ],
    },
    de: {
        1: [
            {
                question: "Aktion",
                answer: "Die denkende Person möchte <b>planen</b>, <b>entscheiden</b>, <b>herausfinden</b>, wie sie etwas tun kann etc. Aber ihr Denken ist durch eine unwahre, beschränkende Annahme blockiert. Sie muss diese Annahme durch eine wahre, befreiende Annahme ersetzen und diese einbetten, um ihr Ergebnis zu erreichen.",
                questionsToAsk: [
                    "AF: 1-6",
                    "Blockierende Annahme",
                ],
                iq: "Wenn du wüsstest, dass ______ wie würdest du dann ______? ",
            },
            {
                question: "Aufhören etwas zu tun, Aufhören etwas zu fühlen, Blokaden auflösen",
                answer: "Annahmen können nicht nur blockieren oder befreien, sie können auch dazu führen, dass die denkende Person etwas tut oder fühlt. Daher kann die denkende Person dann <b>aufhören, etwas zu tun oder zu fühlen</b> oder <b>Blockaden auflösen</b>, indem sie die unwahre beschränkende Annahme findet, die sie das tun oder fühlen lässt, und dann eine wahre befreiende alternative Annahme durch eine Incisive Question verinnerlichen.",
                questionsToAsk: [
                    "AF: 1-6",
                    "Blockierende Annahme",
                ],
                iq: "Wenn du wüsstest, dass ______ was würde sich dann für dich verändern?"
            },
            {
                question: "Gefühl",
                answer: "Die denkende Person möchte sich vielleicht <b>auf eine bestimmte Art und Weise fühlen</b>. Für solche Ergebnisse löst die denkende Person die Blockaden auf, indem sie zunächst herausfindet, welche unwahre Annahme das Ergebnis blockiert, dann eine befreiende alternative Annahme findet, und dann in eine Incisive Question einbaut, um das gewünschte Gefühl hervorzurufen. ",
                questionsToAsk: [
                    "AF: 1-6",
                    "Blockierende Annahme",
                ],
                iq: "Wenn du wüsstest, dass ______, wie würdest du dich fühlen?"
            },
        ],
        2: [
            {
                question: "Verstehen warum ich ...",
                answer: "Bei genauem Hinschauen ist es nicht überraschend, dass die Antwort auf „Warum ich etwas tue oder fühle“ eine Annahme ist. Und wenn die denkende Person <b>verstehen will, warum sie etwas tut oder fühlt</b>, muss sie nur die unwahre Annahme finden, die dazu führt, dass sie eben das tut oder fühlt. Dann hat sie die Antwort auf das „Warum ich“. (Und weil sie hier bereits das Ergebnis erreicht hat, wird bei diesem Ergebnis keine Incisive Question konstruiert).",
                questionsToAsk: [
                    "AF: 1-6",
                    "Blockierende Annahme -> bis unwahre blokierebde Annahme gefunden wurde.",
                    "Du willst verstehen warum ______, du hast herausgefunden dass ______, verstehst du jetzt warum?"
                ],
                iq: "Keine IQ - finde nur die unwahre annahme."
            },
            {
                question: "Alle Annahmen herausfinden",
                answer: "Denkende Person möchte einfach nur <b>alle Annahmen identifizieren</b>, die sie über etwas hat. ",
                questionsToAsk: [
                    "AF: 1-3",
                    "Welche Annahmen hast du zu ______?",
                    "Und welche Annahmen hast du noch zu ______?",
                ],
                iq: "Keine IQ - nur alle Annahmen sammeln."
            },
        ],
        3: [
            {
                question: "Anfangen etwas anzunehmen",
                answer: "Die denkende Person möchte <b>anfangen etwas anzunehmen</b>. Das kann sie tun, indem sie bestätigt, dass die Annahme wahr ist und sie dann in eine Incisive Question einbaut.",
                questionsToAsk: [
                    "AF: 1-3",
                    "Blockierende Annahme",
                    "Bestätigen das die annahme wahr ist."
                ],
                iq: "Wenn du wüsstest, dass ______, was würde sich für dich verändern?"
            },
            {
                question: "Aufhören etwas anzunehmen",
                answer: "Die denkende Person möchte <b>aufhören, etwas anzunehmen</b>. Das kann sie tun, indem sie bestätigt, dass die Annahme unwahr ist (oder eine unwahre Annahme findet, die sich darin verbirgt) und dann beginnt, etwas Befreiendes anzunehmen, indem sie eine befreiende alternative Annahme durch eine Incisive Question verinnerlicht.",
                questionsToAsk: [
                    "AF: 1-3",
                    "Blockierende Annahme",
                    "Annahme als unwahr bestätigen",
                    "Wahre befreiende annahme finden",
                    "Verinnerlichen der Wahre befreiende annahme durch IQ"
                ],
                iq: "Wenn du wüsstest, dass ______ wie würdest du dann ______?, Wenn du wüsstest, dass ______ was würde sich dann für dich verändern?"
            },
            {
                question: "Fühlen, dass eine Annahme war oder unwahr ist",
                answer: "Die denkende Person kann auch <b>fühlen wollen, dass eine Annahme wahr ist</b>, oder <b>fühlen, dass eine Annahme unwahr ist</b>, die sie schon als unwahr erkannt hat. Das kann sie tun, indem sie eine Incisive Question stellt, die sie die befreiende Annahme verinnerlichen lässt:  ",
                questionsToAsk: [
                    "AF: 1-3",
                    "Blockierende Annahme",
                    "Annahme als unwahr erkannt",
                    "Wahre befreiende annahme finden"
                ],
                iq: "Wenn du wüsstest, dass ______, wie würdest du dich fühlen?"
            },
        ]
    }
};