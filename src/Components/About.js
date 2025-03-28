import aboutImg from '../assests/about.png';
import frontendImg from '../assests/frontend.jpeg';
import javascriptImg from '../assests/javascript.png'; 
import mysqlImg from '../assests/sql.png'; 
import pythonImg from '../assests/python.png'; 

function About() {
    const config = {
        about1: "I'm a passionate and driven individual with expertise in frontend development. I specialize in creating user-friendly, visually appealing interfaces that deliver seamless experiences. With a solid foundation in programming languages like Java and Python, I integrate backend functionality to bring dynamic projects to life.",
        about2: "For database management, I'm skilled in MySQL, ensuring efficient and reliable data handling. My curiosity and creativity fuel my love for designing, where I transform ideas into innovative solutions."
    };

    return (
        <section id='about' className='flex flex-col md:flex-row bg-primary px-5 py-10 font-font'>
            <div className='md:w-1/2'>
                <img
                    className='py-5 transition-transform duration-300 hover:scale-105 hover:rotate-3'
                    src={aboutImg}
                    alt="About Me"
                />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl font-bold mb-5 hover:text-gray-300 transition-colors duration-300'>About Me</h1>
                    <p className='text-xl py-2'>{config.about1}</p>
                    <p className='text-xl py-2'>{config.about2}</p>
                    <br />
                    <p className='py-2'>Here is My resume</p>
                    <a
                        href='https://drive.google.com/file/d/14Scz7Ekz_NDMnzdGCwG93p_WmWCjTlKx/view?usp=drivesdk'
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <button className='btn transition-all duration-300 hover:bg-white hover:text-black px-4 py-2 border-2 border-white'>
                            Download
                        </button>
                    </a>

                    {/* Skills Section with Images */}
                    <div className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
                        {/* Frontend Development Image */}
                        <div className='flex flex-col items-center hover:text-gray-300 transition-colors duration-300'>
                            <img
                                className='h-16 w-16 mb-2 transition-transform duration-300 hover:scale-110'
                                src={frontendImg}
                                alt="Frontend Development"
                            />
                            <span>Frontend Development</span>
                        </div>

                        {/* JavaScript Image */}
                        <div className='flex flex-col items-center hover:text-gray-300 transition-colors duration-300'>
                            <img
                                className='h-16 w-16 mb-2 transition-transform duration-300 hover:scale-110'
                                src={javascriptImg}
                                alt="JavaScript"
                            />
                            <span>JavaScript</span>
                        </div>

                        {/* MySQL Image */}
                        <div className='flex flex-col items-center hover:text-gray-300 transition-colors duration-300'>
                            <img
                                className='h-16 w-16 mb-2 transition-transform duration-300 hover:scale-110'
                                src={mysqlImg}
                                alt="MySQL"
                            />
                            <span>MySQL</span>
                        </div>

                        {/* Python Image */}
                        <div className='flex flex-col items-center hover:text-gray-300 transition-colors duration-300'>
                            <img
                                className='h-16 w-16 mb-2 transition-transform duration-300 hover:scale-110'
                                src={pythonImg}
                                alt="Python"
                            />
                            <span>Python</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
