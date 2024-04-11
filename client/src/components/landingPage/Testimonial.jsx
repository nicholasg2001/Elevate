const Testimonial = ({ testimonial }) => {
    return (
        <div>
            <p className="flex items-center text-center text-gray-500 lg:mx-8">{testimonial.content}</p>
            <div className="flex flex-col items-center justify-center mt-8">
                <img className="object-cover rounded-full w-14 h-14" src={testimonial.imageSrc} alt="" />
                <div className="mt-4 text-center">
                    <h1 className="font-semibold text-gray-800">{testimonial.name}</h1>
                    <span className="text-sm text-gray-500 ">{testimonial.occupation}</span>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;