import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';

const Dashboard = () => {
    const reviews = [
        {
            name: 'Bonnie Green',
            role: 'Lululemon Athletica - CEO',
            content: 'I attended the Community Health and Wellness Fair organized by Health Fairs Direct, and it was an incredible experience. The fair provided a comprehensive overview of our fitness and wellness options in the community. Kudos to the team for promoting a healthier lifestyle!',
            imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png',
        },
        {
            name: 'Roberta Casas',
            role: 'Yoga Alliance - Manager',
            content: 'I had the pleasure of visiting the Fitness and Wellness Expo organized by Health Fairs Direct, and I must say its a solid foundation for any fitness-related project. The well-designed components and resources made it easy to explore various fitness options.',
            imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png',
        },
        {
            name: 'Jese Leos',
            role: 'BeachBody - CEO',
            content: 'Mindblowing workflow. Aesthetically, the well-designed event i have ever went in my life.I am glad to see on spot.People should visit their events so that they can get an effective thing from these fairs.',
            imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
        },
        {
            name: 'Joseph McFall',
            role: 'Wanderlast - Secretary Manager',
            content: 'Efficient collaborating is essential, and Health Fairs Direct delivers just that. Their Senior Health and Fitness Expo is a prime example. It offers many examples that can be used to create a fast prototype for your team in the field of senior health.',
            imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png',
        },
    ];

    return (
        <div >
            <Navbar></Navbar>
            <div className="p-8" data-aos="zoom-out-down"  data-aos-duration="1500">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reviews.map((review, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center justify-center mb-4">
                            <img className="rounded-full w-12 h-12" src={review.imageSrc} alt="profile picture" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{review.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{review.role}</p>
                        <p className="my-4 text-gray-500 dark:text-gray-400">{review.content}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Dashboard;
