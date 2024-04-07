
const AboutUs = ({id}) => {
    return (
        <div className="bg-black " id={id}>
            <section
                id="features"
                className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30"
            >

            <div className="relative mx-auto max-w-5xl text-center">
              <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                Why choose us
              </span>
              <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                Build a Website That Your Customers Love
              </h2>
              <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                Our templates allow for maximum customization. No technical skills required – our intuitive design tools let
                you get the job done easily.
              </p>
            </div>

                <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
               Hello
                </div>


                <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b border-gray-300 bg-gradient-to-r from-blue-200 to-transparent"></div>
                <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full bg-gradient-to-l from-red-200 to-transparent"></div>
            </section>
         </div>
    );
};

export default AboutUs;