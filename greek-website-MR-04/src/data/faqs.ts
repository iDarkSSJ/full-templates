export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "Is WEBit lorem ipsum dolor sit amet?",
                answer: "Yes, lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                question: "How do I lorem ipsum dolor sit amet?",
                answer: "WEBit lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                question: "Do I need to know lorem ipsum dolor sit amet?",
                answer: "Basic familiarity with lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
            },
            {
                question: "Can I use WEBit as a starting point for lorem ipsum?",
                answer: "Absolutely! WEBit is designed to be a lorem ipsum dolor sit amet that you can build upon for client projects. Its clean architecture and minimal approach make it perfect as a starting point for customized websites."
            },
            {
                question: "How often is lorem ipsum dolor sit amet?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam."
            }
        ]
    }
};
