import ExperienceItem from './elements/ExperienceItem';

function Experience() {
    return  (
        <div id="experience">
            <h1 className="heading" data-aos="fade-up">Experience</h1>
            <ExperienceItem
                title="Frontend tech lead - CommIT Smart"
                location="Hungary, Remote"
                date="September 2023 - Present"
                description={[
                    'Leading 2 frontend engineers and delivering enterprise apps 20% ahead of schedule through agile planning and prioritization.',
                    'Optimizing performance, cutting load times and maintaining Lighthouse scores in the 90+ range.',
                    'Directing 100+ code reviews and enforcing coding standards, reducing post-release defects.'
                ]}
                techUsed={['Angular', 'React', 'Jira', 'Git', 'Figma', 'Jenkins']} />

            <ExperienceItem
                title="Frontend software developer - CommIT Smart"
                location="Hungary, Remote"
                date="September 2022 - August 2023"
                description={[
                    'Built reusable UI components that reduced new feature dev time by 25%.',
                    'Partnered with PMs and designers to deliver accessible, responsive interfaces, improving task completion rates by 15%.',
                    'Managed Jira workflows across time zones, ensuring 100% on-time feature delivery.',
                ]}
                techUsed={['Angular', 'React', 'Jira', 'Git', 'Figma', 'Jenkins']} />

            <ExperienceItem
                title="Freelance software developer"
                location="Nairobi, Kenya"
                date="January 2022 - August 2022"
                description={[
                    'Delivered React and Next.js applications and maintained reliable production operation with no major post-release incidents.',
                    'Improved SEO performance for client projects, resulting in +20% organic traffic on average.',
                    'Implemented secure user authentication and optimized API performance for high-availability apps.'
                    ]}
                techUsed={['React.js', 'Next.js', 'Redux', 'Node.js', 'Tailwind',  'Git']} />

            <ExperienceItem
                title="Software Developer and Digital Marketing - Amazon Cellular Outfitters"
                location="Nairobi, Kenya"
                date="June 2020 - December 2021"
                description={[
                    'Designed and launched an e-commerce platform that increased online sales by 40% in the first quarter.',
                    'Integrated Google Analytics & Facebook Pixel, enabling targeted marketing campaigns that boosted conversion rates by 18%.',
                    'Built CMS + POS systems, reducing manual operational workload by 50%.'
                    ]}
                techUsed={['Node.js', 'Bootstrap', 'Sass', 'MongoDB', 'Git']} />

            <ExperienceItem
                title="Software Tester - Techno Brain"
                location="Nairobi, Kenya"
                date="February 2020 - May 2020"
                description={[
                    'Executed functional and performance testing for Microsoft enterprise apps in Azure and Windows Server environments.',
                    'Identified and documented 30+ critical bugs pre-release, improving product stability and reducing support tickets by 25%.'
                    ]}
                techUsed={['Azure']} />
        </div>
    )
}

export default Experience;
