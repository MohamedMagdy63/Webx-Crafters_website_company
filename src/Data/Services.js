import Portfolio from '../Images/Services/portfolio.png'
import mobile from '../Images/Services/mobile.png'
import dynamic from '../Images/Services/dynamic.png'
import fullWeb from '../Images/Services/web-developer.png'
import webMaintenance from '../Images/Services/web-maintenance.png'



const serviceData = [
    {
        title: 'A Static Page',
        description: 'Showcase your content with a captivating static webpage',
        details: 'Immerse your audience with engaging animations and responsive design, compatible across tablets, personal computers, and mobile devices.',
        price: '900',
        image: Portfolio,
        frequency: 'EGP'
    },
    {
        title: 'Full Static Website',
        description: 'Expand your online presence with a comprehensive static website comprising 5-7 pages',
        details: 'Deliver a seamless user experience with animated elements and elegant design.',
        price: '3500',
        image: mobile,
        frequency: 'EGP'
    },
    {
        title: 'A Dynamic Page',
        description: 'Empower your website with dynamic content and database integration, complete with an admin dashboard for easy management',
        details: 'Pricing is per dynamic page',
        price: '1900',
        image: dynamic,
        frequency: 'EGP'
    },
    {
        title: 'Full Website',
        description: 'Realize your vision with a fully customized website solution tailored to your specific requirements',
        details: 'Contact us to discuss and negotiate a personalized package',
        // price: '---',
        image: fullWeb,
        // frequency: '--'
    },
    {
        title: 'Maintain and Develop Old Websites',
        description: 'Revamp and enhance the functionality of your outdated website',
        details: 'Contact us to revitalize your online presence and negotiate a personalized maintenance and development package.',
        image: webMaintenance,
        // price: '---',
        // frequency: '--'
    }
];

export default serviceData;
