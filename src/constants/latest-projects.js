import Indoaddict from '../assets/images/web/indoaddict.png'
import Lingoni from '../assets/images/web/lingoni.png'
import Sikembang from '../assets/images/web/sikembang.png'
import Stufast from '../assets/images/web/stufast.png'
import Polines from '../assets/images/web/polines.png'
import Behappy from '../assets/images/web/behappy.png'

const LATEST_PROJECTS = {
    title: 'Portfolio',
    data: [
        {
            project_name: 'Indoaddict',
            duration: 'Feb 2023 - Present',
            link: 'https://indoaddict.com/',
            description:
                'Indoaddict is a website that provides some destination and adventures for traveller. The website is built using Laravel and ReactJs with material UI.',
            image: Indoaddict,
            jobs: [
                'Rewrite code using ReactJS for frontend',
                'Create page such as home, about us, contact us, destinations, checkout, booking, etc.',
                'Update theme setting',
                'Collaborated with backend team to create API using Laravel',
                'Fix bug of product form in admin dashboard'
            ]
        },
        {
            project_name: '6 websites of Politeknik Negeri Semarang Department',
            duration: 'Apr 2023 - Apr 2023',
            link: 'https://ab.polines.ac.id/',
            description:
                'Create 6 websites of Politeknik Negeri Semarang Department. The websites are built using Wordpress and Elementor.',
            image: Polines,
            jobs: [
                'Set up wordpress and configuration (plugins and theme)',
                'Determining theme',
                'Adjusting design and copywriting',
                'Create all pages using wordpress elementor'
            ]
        },
        {
            project_name: 'Lingoni Wordpress Plugin',
            duration: 'Jan 2023 - Apr 2023',
            link: 'http://my.lingoni.com/',
            description:
                'Create wordpress plugin Lingoni App. Lingoni is platform to learn German, French and English from native speakers.',
            image: Lingoni,
            jobs: [
                'Integrate Access Restriction to milestone test based on user role',
                'Show and hide “Full Access” Widget',
                'Fix Menu Icon Background disapears',
                'Fix session issue when using browser back function',
                'Hide not enrolled languages integration in side menu'
            ]
        },
        {
            project_name: 'Sikembang Offline Dashboard',
            duration: 'Nov 2022 - Dec 2022',
            link: 'https://sikembang.com/index.php/Frontpage',
            description:
                "Working with service worker, local storage and cache to create offline dashboard. Users can input and read data in certain menus even if it's offline.",
            image: Sikembang,
            jobs: []
        },
        {
            project_name: 'Stufast Learning Platform',
            duration: 'Aug 2022 - Dec 2022',
            link: 'https://stufast.id/',
            description:
                'Stufast Learning Center is a platform for learning media that provides courses and training. The platform is built using Codeigniter 4 and Bootstrap. And also, the desain made by UI/UX team.',
            image: Stufast,
            jobs: [
                'Set up layout',
                'Create home page, courses, bundling, training, cart, etc.',
                'Create notification system',
                'Create search system',
            ]
        },
        {
            project_name: 'Belanja Happy',
            duration: 'Sep 2022 - Sep 2022Sep 2022 - Sep 2022',
            link: 'https://belanjaheppy.vercel.app/',
            description:
                'Belanja Happy is the E-Commerce site. The project is the final project of Sanbercode Next JS bootcamp. The app is built with next js and tailwind css, and also the view is responsive.',
            image: Behappy,
            jobs: [
                'Create all pages using next js',
            ]
        }
    ]
}

export default LATEST_PROJECTS
