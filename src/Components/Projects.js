import ecommerceImg1 from '../assests/ecommerce-websites.jpg';
import ecommerceImg2 from '../assests/library.png';
import ecommerceImg3 from '../assests/bookstore.png';
import ecommerceImg4 from '../assests/image 4.webp';

function Projects() {
  const config = {
    projects: [
      {
        image: ecommerceImg1,
        description:
          'Nostra is a responsive e-commerce clothing website designed to showcase various clothing items and accessories. It allows users to browse the catalog, search for specific products, and view product details. The primary goal of this project is to strengthen skills in front-end development.',
        g_link: 'https://github.com/Thulasirajan03/e-commerce.git',
      },
      {
        image: ecommerceImg2,
        description:
          'This project is a console-based library management system built using Java and MySQL. The application facilitates the management of books, members, and transactions in a library.It provides functionality for librarians and users to efficiently organize, track, and manage library operations.',
        g_link: 'https://github.com/Thulasirajan03/LibraryManagementSystem.git',
      },
      {
        image: ecommerceImg3,
        description:
          'Bookverse is a full-stack book-Store web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to browse, search, purchase, and sell various books. The application supports separate login and signup functionality for buyers, sellers, and administrators, providing role-based access control.',
        g_link: 'https://github.com/Thulasirajan03/Book_Store.git',
      },
      {
        image: ecommerceImg4,
        description:
          'I built a fruit and vegetable shop UI using React and Tailwind CSS. The interface is modern, clean, and designed to provide an enjoyable browsing experience. It currently focuses solely on the front-end, showcasing vibrant produce in a responsive layout.',
        g_link: 'https://github.com/Thulasirajan03/fruitshop.git',
      },
    ],
  };

  return (
    <section id="project" className="flex flex-col justify-center px-5 py-10 text-white bg-secondary font-font">
      <div className="w-full text-center mb-10">
        <h1 className="font-bold text-4xl">Projects</h1>
        <p className="py-5">Explore some of my recent projects below.</p>
      </div>

      <div className="w-full">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {config.projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white p-5 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
             
              <img className="w-full h-64 object-cover rounded-lg mb-4" src={project.image} alt={`Project ${index + 1}`} />
              <div className="project-des">
                <p className="text-center text-white mb-4">{project.description}</p>
                <div className="flex justify-center">
                  <a
                    className="bg-primary text-white px-5 py-3 font-bold rounded transition-all duration-300 hover:bg-white hover:text-black hover:border-2 hover:border-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.g_link}
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
