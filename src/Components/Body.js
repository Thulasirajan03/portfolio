import heroImg from '../assests/hero.png';
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

function Body() {
  const config = {
    bio: "I'm into frontend development and enjoy working with Java, Python, and MySQL. I love designing creative stuff and exploring the tech world as an IT enthusiast!"
  }

  return (
    <section id="body" className='flex flex-col md:flex-row px-2 py-32 justify-center bg-secondary'>
      <div className='md:w-1/2 flex flex-col'>
        <h1 className='text-white text-5xl font-font font-bold'>
          Hi,
          <br /><span className='font-thin'>I'm </span> <span className='text-slate-200'>Thulasirajan</span>
        </h1>
        <p className='text-2xl mt-5 font-poppins text-white font-light'>{config.bio}</p>
        <div className='flex py-10'>
          <a
            className='pr-5 text-rose-200 hover:text-slate-200 transform transition duration-300 hover:scale-125'
            href='https://github.com/Thulasirajan03?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineGithub size={50} />
          </a>
          <a
            className='pr-5 text-rose-200 hover:text-slate-200 transform transition duration-300 hover:scale-125'
            href='https://www.instagram.com/iz.thulazi_rajan?igsh=MTF4dWJnanl3ajVmaw=='
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineInstagram size={50} />
          </a>
          <a
            className='text-rose-200 hover:text-slate-200 transform transition duration-300 hover:scale-125'
            href='https://www.linkedin.com/in/thulasirajan73?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineLinkedin size={50} />
          </a>
        </div>
      </div>
      <img className='md:w-1/3' src={heroImg} alt="Hero" />
    </section>
  );
}

export default Body;
