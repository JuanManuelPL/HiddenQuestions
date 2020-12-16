var app = new Vue({
    el: '#app',
    data: {

        "questions":[
            {
                "questionId": "Q001",
                "question": "Hi, How old are you ?",
                "options":[
                    {
                        "optionText": "Hi, i'm 21 years old"
                    },
                    {
                        "optionText": "I'm kim, nice to meet you!"
                    }
                ],
                "correctAnswer": "Hi, i'm 21 years old"
            },
            {
                "questionId": "Q002",
                "question": "What's your name ?",
                "options":[
                    {
                        "optionText": "I'm juan manuel"
                    },
                    {
                        "optionText": "Cheese and macaroni"
                    }
                ],
                "correctAnswer": "I'm juan manuel"
            }
        ]
    }
})