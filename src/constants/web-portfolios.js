// format
// {
//     title: '',
//         description: '',
//     date: {
//     start: '',
//         end: ''
// },
//     sourceCode: '',
//         link: '',
//     tools: [
//
// ],
//     tasks: [
//
// ]
// }

const webPortfolios = [
    {
        title: 'Aruskas Rest API',
        description: 'Creating Rest API for Aruskas application using Laravel lumen 8, testable and documented.',
        date: {
            start: 'Feb 2022',
            end: 'Present'
        },
        sourceCode: 'https://gitlab.com/rikzanfernanda/aruskas-backend',
        link: 'https://rikzanfernanda.github.io/aruskas-api-docs/',
        tools: [
            "Lumen 8",
            "PHP",
            "MySQL",
            "JWT",
            "OpenAPI",
            "Swagger",
            "Unit Testing"
        ],
        tasks: [
            "Create API documentation",
            "Create API unit testing",
            "Create API integration testing",
            "Create Rest API",
            "Deploy API"
        ]
    },
    {
        title: 'Instagram Clone',
        description: 'Instagram Clone is app that implementation some features like instagram. The features include login with github account, view all posts on the home page, can do like and dislike posts, users can upload photos and captions, users can view their own profiles or other users and their posts',
        date: {
            start: 'May 2022',
            end: 'May 2022'
        },
        sourceCode: 'https://github.com/rikzanfernanda/instagram-clone',
        link: '',
        tools: [
            'React JS',
            'SCSS',
            'Axios',
            'Context',
            'React Router Dom'
        ],
        tasks: [
            'Create a button to login',
            'Show all posts in home page',
            'Create a toggle button to like and dislike',
            'Create form to upload image and caption',
            'Create profile page'
        ]
    },
    {
        title: 'MOVI',
        description: 'Movi is an application for information management related to movies and games. This is the final project of following the bootcamp in Sanbercode. Application built with react js and ant design as UI components. Application development is limited to the front end, and uses rest api to exchange data. I build the application as a whole in terms of the front end.',
        date: {
            start: 'Jan 2022',
            end: 'Jan 2022'
        },
        sourceCode: 'https://github.com/rikzanfernanda/movi',
        link: 'https://movigam.netlify.app',
        tools: [
            'React JS',
            'Ant Design',
            'Axios',
            'React Router Dom'
        ],
        tasks: [
            'Create all features'
        ]
    },
    {
        title: 'Saving',
        description: 'Personal financial management application. I am an application owner and developer. Application made with Laravel 8 and bootstrap 4. Following are the features of the application: Bank, Anggaran, Plam, History, User, and Chart',
        date: {
            start: 'Jun 2021',
            end: 'Sep 2021'
        },
        sourceCode: 'https://github.com/rikzanfernanda/saving',
        link: 'https://savingid.my.id',
        tools: [
            'Laravel',
            'Bootstrap',
            'jQuery'
        ],
        tasks: [
            'Create all features'
        ]
    },
    {
        title: 'ATAboy',
        description: 'Disaster donation management for Boyolali, Central Java. The application made with codeigniter and bootstrap and two developer.',
        date: {
            start: 'May 2021',
            end: 'Jun 2021'
        },
        sourceCode: '',
        link: 'http://ataboy.sikembang.com',
        tools: [
            "Codeigniter",
            "Bootstrap",
            "jQuery"
        ],
        tasks: [
            'I created a form for disaster submission.',
            'Create a feature to download incoming and outgoing reports.',
            'Fix bugs',
            'Make a slideshow on the home page.'
        ]
    },
    {
        title: 'E-CSMS',
        description: 'Project administration application, built using codeigniter 3 (backend) and bootstrap (frontend).',
        date: {
            start: 'Sep 2020',
            end: 'Jan 2021'
        },
        sourceCode: '',
        link: 'http://ecsms.sikembang.com',
        tools: [
            "Codeigniter",
            "Bootstrap",
            "jQuery"
        ],
        tasks: [
            'Create forms',
            'Create download feature for pdf files and excel'
        ]
    }
]

export default webPortfolios;