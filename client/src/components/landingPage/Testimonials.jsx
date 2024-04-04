import {useEffect, useRef, useState} from "react";


const Testimonials = () => {
    const testimonialsRef = useRef(null);

    // Testimonials data
    const testimonials = [
        {
            content: "Joining Elevate Fitness has been one of the best decisions I've made for my health. The trainers are incredibly knowledgeable and supportive, guiding me through every step of my fitness journey. The sense of community here is unparalleled, with fellow members cheering each other on. Thanks to Elevate Fitness, I've achieved fitness goals I never thought possible.",
            imageSrc: "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            name: "Mia Brown",
            occupation: "User"
        },
        {
            content: "Elevate Fitness has truly changed my life. From the moment started using the programs, I felt welcomed and motivated. The variety of exercises have kept me engaged and excited about my workouts. Not only have I seen physical improvements, but I've also gained confidence and a supportive network of friends. I couldn't imagine my fitness journey without Elevate Fitness!",
            imageSrc: "https://images.unsplash.com/photo-1604004215402-e0be233f39be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2lybCUyMHNtaWxpbmd8ZW58MHx8MHx8fDA%3D",
            name: "Gwen Stacy",
            occupation: "User"
        },
        {
            content: "Using the Elevate Fitness app has been a game-changer for me. The convenience of having personalized workouts and nutrition plans at my fingertips has made staying on track with my fitness goals effortless. The app's intuitive interface and tracking features keep me motivated and accountable every step of the way. Thanks to Elevate Fitness, I've been able to achieve results I never thought possible from the comfort of my own home.",
            imageSrc: "https://images.unsplash.com/photo-1614436201459-156d322d38c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Mary Jane",
            occupation: "User"
        }
    ];

    // State to keep track of current testimonial index
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    // Function to render testimonial
    const renderTestimonial = () => {
        const testimonial = testimonials[currentTestimonialIndex];
        return (
            <div>
                <p className="flex items-center text-center text-gray-500 lg:mx-8">{testimonial.content}</p>
                <div className="flex flex-col items-center justify-center mt-8">
                    <img className="object-cover rounded-full w-14 h-14" src={testimonial.imageSrc} alt="" />
                    <div className="mt-4 text-center">
                        <h1 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{testimonial.occupation}</span>
                    </div>
                </div>
            </div>
        );
    };

    // Event handler for navigating to the previous testimonial
    const handlePrevTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    // Event handler for navigating to the next testimonial
    const handleNextTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    useEffect(() => {
        // Automatically scroll to the testimonials section when component mounts
        testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <section ref={testimonialsRef} className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                    What Our Users Are Saying!
                </h1>

                <div className="flex justify-center mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                </div>

                <div className="flex items-start max-w-6xl mx-auto mt-16">
                    <button title="left arrow" onClick={handlePrevTestimonial} className="p-2 text-gray-800 transition-colors duration-300 border rounded-full dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="flex flex-col items-center justify-center mt-8">
                        {renderTestimonial()}
                    </div>

                    <button title="right arrow" onClick={handleNextTestimonial} className="p-2 text-gray-800 transition-colors duration-300 border rounded-full dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;