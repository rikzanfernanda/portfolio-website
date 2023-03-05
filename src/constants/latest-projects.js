import Indoaddict from '../assets/images/web/indoaddict.png';
import Lingoni from '../assets/images/web/lingoni.png';
import Sikembang from '../assets/images/web/sikembang.png';
import Stufast from '../assets/images/web/stufast.png';

const LATEST_PROJECTS = {
    title: 'Latest Projects',
    data: [
        {
            project_name: 'Indoaddict',
            duration: 'Feb 2023 - Present',
            link: 'https://staging.indoaddict.com/',
            description: 'Indoaddict is a website that provides some destination and adventures for traveller. The website is built using Laravel and ReactJs with material UI.',
            image: Indoaddict
        },
        {
            project_name: 'Lingoni Wordpress Plugin',
            duration: 'Jan 2023 - Present',
            link: 'http://my.lingoni.com/',
            description: 'Create wordpress plugin Lingoni App. Lingoni is platform to learn German, French and English from native speakers.',
            image: Lingoni
        },
        {
            project_name: 'Sikembang Offline Dashboard',
            duration: 'Nov 2022 - Dec 2022',
            link: 'https://sikembang.com/index.php/Frontpage',
            description: "Working with service worker, local storage and cache to create offline dashboard. Users can input and read data in certain menus even if it's offline.",
            image: Sikembang
        },
        {
            project_name: 'Stufast Learning Platform',
            duration: 'Aug 2022 - Dec 2022',
            link: 'https://stufast.id/',
            description: "Stufast Learning Center is a platform for learning media that provides courses and training. The platform is built using Codeigniter 4 and Bootstrap. And also, the desain made by UI/UX team.",
            image: Stufast
        },
    ]
}

export default LATEST_PROJECTS;