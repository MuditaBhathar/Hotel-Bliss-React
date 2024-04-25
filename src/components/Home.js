import React, { useEffect } from 'react';
import "./Home.css";

const Home = () => {
  useEffect(() => {
    // JavaScript code for functionality
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show-menu');
        });
      }
    };
    showMenu('nav-toggle', 'nav-menu');

    const navLink = document.querySelectorAll('.nav__link');
    function linkAction() {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.remove('show-menu');
    }
    navLink.forEach((n) => n.addEventListener('click', linkAction));

    function scrollHeader() {
      const nav = document.getElementById('header');
      if (window.scrollY >= 80) nav.classList.add('scroll-header');
      else nav.classList.remove('scroll-header');
    }
    window.addEventListener('scroll', scrollHeader);

    function scrollUp() {
      const scrollUp = document.getElementById('scroll-up');
      if (window.scrollY >= 560) scrollUp.classList.add('show-scroll');
      else scrollUp.classList.remove('show-scroll');
    }
    window.addEventListener('scroll', scrollUp);
  }, []);

  return (
    <section id="home">
      {/* Navigation Bar */}
      <header className="header" id="header">
         <nav className="nav container">
            <b><a href="index.html" className="nav__logo"> The Glory Hotels </a></b>
            <div className="nav__menu" id="nav-menu">
               <ul className="nav__list">
                  <li className="nav__item">
                     <a href="index.html" className="nav__link">Home</a> 
                  </li>
                  <li className="nav__item">
                     <a href="#about" className="nav__link">About</a> 
                  </li>
                  <li className="nav__item">
                     <a href="pages/room.html" className="nav__link">Rooms</a>
                  </li>
                  
                  <li className="nav__item">
                     <a href="pages/map.html" className="nav__link">Hotels</a>
                  </li>
                  <li className="nav__item">
                     <a href="pages/Facilities.html" className="nav__link">Facilities</a>
                  </li>
                  <li className="nav__item">
                     <a href="pages/donate.html" className="nav__link">Donate</a>
                  </li>
                  <li className="nav__item">
                     <a href="pages/membership.html" className="nav__link">Membership</a>
                  </li>
                  <li className="nav__item">
                     <a href="pages/dining.html" className="nav__link">Dining</a>
                  </li>
                  <li className="nav__item">
                     <a href="pages/news.html" className="nav__link">News</a>
                  </li>
               </ul>
            </div>
            <div className="nav__toggle" id="nav-toggle">
               <i className='bx bx-grid-alt'></i>
            </div>
            <a href="pages/login.html" className="button button__header">Sign in</a>
            <a href="pages/book.html" className="button button__header">Book Now</a>
         </nav>
      </header>
      
      {/* Banner Section */}
      <section className="banner">
         <div className="content">
            <div className="title" >The Glory Hotels</div>
            <div className="top-subtitle subtitle">Best Memories Start Here</div>
         </div>
         <div className="search-box">
            <div className="input-box">
               <p>Location</p>
               <input type="text" name="" id="" placeholder="Delhi" />
            </div>
            <div className="input-box">
               <p>Check-In Date</p>
               <input type="date" name="" id="" placeholder="01/01/2021" />
            </div>
            <div className="input-box">
               <p>Guests</p>
               <input type="number" name="" id="" placeholder="100" />
            </div>
            <div className="input-box">
               <br />
               <span className="inline-flex rounded-md shadow-sm">
               <a href="pages/book.html" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
               Book now
               </a>
               </span>
            </div>
         </div>
      </section>

      {/* About Section */}
      <section className="text-gray-600 body-font" id="about">
         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" style={{ margin: 'auto', width: '70%' }}>
            <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
               <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwcmVzb3J0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
               <h1 className="sec-head">About Us</h1>
               <p className="mb-8 leading-relaxed" style={{ width: 'auto' }}>Over the last 25 years, the Glory Hotels organisation has been known for dependably providing the best Indian hospitality experience. It combines modern style and comfort with the warmth of Old World hospitality. With more than 50 hotels and resorts across the world, it is one of the world's largest hotel chains. We believe in the values of Indian hospitality, and our crew is our most valuable asset, providing passionate and memorable hospitality to everyone we meet.</p>
               <div className="flex justify-center">
                  <span className="inline-flex rounded-md shadow-sm">
                  <a href="pages/team.html" className="button button__header">Know More</a>
                  </span>
               </div>
            </div>
         </div>
      </section>

      {/* Hotels Section */}
      <section className="hotels" id="hotels">
         <h1 className="sec-head" id="hotels-head">Our Hotels</h1>
      </section>
      <div className="wrapper">
         <div className="carousel owl-carousel">
            <div className="card card-1">
            </div>
            <div className="card card-2">
            </div>
            <div className="card card-3">
            </div>
            <div className="card card-4">
            </div>
            <div className="card card-5">
            </div>
            <div className="card card-6">
            </div>
            <div className="card card-7">
            </div>
            <div className="card card-8">
            </div>
         </div>
      </div>

      {/* Vision Section */}
      <div className='vision'>
         <div className='row'>
            <div className='column'>
               <div className='vision-column'>
                  <h1 className="sec-head">Our Vision</h1>
                  <p>The Glory Hotels shall be the world's largest and best hotel and resort chain, with upscale, mid-scale, and budget properties.
                     We will be dedicated to ensuring the well-being and self-worth of our coworkers, who are vital to our success. Making a difference in our community and in India as a whole. Our fundamental reason for being is to delight our guests, whose comfort, safety, security, and well-being are our primary concerns.
                  </p>
               </div>
            </div>
         </div>
      </div>

      {/* Testimonials Section */}
      <section className="Testimonials">
      <h1 className="sec-head">Testimonials</h1>
      <div className="wrapper-rev">
         <div className="box">
            <i className='bx bxs-quote-left quote' ></i>
            <p>Beyond 5 stars! Stayed last week at this wonderful hotel. Everything exceeds ones wildest dream of a hotel. On top they have the most wonderful staff, extremely kind and helpful with every wish.</p>
            <div className="content">
               <div className="info">
                  <div className="name">Oshane Smith</div>
                  <div className="stars">
                     <i className='bx bxs-star'></i>
                     <i className='bx bxs-star'></i>
                     <i className='bx bxs-star'></i>
                     <i className='bx bxs-star'></i>
                     <i className='bx bxs-star'></i>
                  </div>
               </div>
               <div className="image">
                  <img src="https://png.pngtree.com/png-vector/20190930/ourlarge/pngtree-hooded-computer-hacker-with-laptop-icon-png-image_1762179.jpg" alt="" />
               </div>
            </div>
         </div>
         <div className="box">
            <i className='bx bxs-quote-left quote' ></i>
            <p>This is indeed a place you do not want to leave, and when you do it is with one hope to come back. Everything was great, staff was very helpful and we were extremely happy with the meeting!</p>
            <div className="content">
               <div className="info">
                  <div className="name">Rajesh Singh</div>
                  <div className="stars">
                     <i className='bx bxs-star'></i>
                     <i className='bx bxs-star'></i>
                     <i className='bx bxs-star'></i>
                     <i className='bx bxs-star'></i>
                     <i className='bx bx-star'></i>
                  </div>
               </div>
   
               <div className="image">
                  <img src="https://png.pngtree.com/png-vector/20190930/ourlarge/pngtree-hooded-computer-hacker-with-laptop-icon-png-image_1762179.jpg" alt="" />
               </div>
            </div>
         </div>
         <div className="box">
            <i className='bx bxs-quote-left quote' ></i>
            <p>The service here has just been fantastic; whatever we needed was brought to us right away. The food was so delicious; the entire experience was really great. A must stay hotel for everyone.</p>
            <div className="content">
               <div className="info">
                  <div className="name">Khushi Mittal</div>
                  <div className="stars">
                     <i className='bx bxs-star'></i>
                     <i className='bx bxs-star'></i>
                     <i className='bx bxs-star'></i>
                     <i className='bx bxs-star'></i>
                     <i className='bx bxs-star-half'></i>
                  </div>
               </div>
               <div className="image">
                  <img src="https://png.pngtree.com/png-vector/20190930/ourlarge/pngtree-hooded-computer-hacker-with-laptop-icon-png-image_1762179.jpg" alt="" />
               </div>
            </div>
         </div>
      </div>
      </section>
      
      {/* Contact Section */}
      <section className="contact">
         <div className="container">
            <h2 className="section-title">Contact</h2>
            <div className="contact-info">
               <p><i className="fas fa-map-marker-alt"></i> Address: 123 Main Street, City, Country</p>
               <p><i className="fas fa-phone"></i> Phone: +1234567890</p>
               <p><i className="fas fa-envelope"></i> Email: info@example.com</p>
            </div>
         </div>
      </section>
      
      {/* Footer Section */}
      <div className="footer-dark">
         <footer>
            <div className="bscontainer">
               <div className="bsrow">
                  <div className="bscol-md-2 item">
                     <h3>Pages</h3>
                     <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="pages/map.html">Hotels</a></li>
                        <li><a href="pages/login.html">Login</a></li>
                        <li><a href="pages/book.html">Book Hotel</a></li>
                     </ul>
                  </div>
                  <div className="bscol-md-2 item">
                     <h3>Know More</h3>
                     <ul>
                        <li><a href="pages/membership.html">Membership</a></li>
                        <li><a href="pages/team.html">Our Team</a></li>
                        <li><a href="pages/news.html">News</a></li>
                     </ul>
                  </div>
                  <div className="bscol-md-2 item">
                     <h3>Other Details</h3>
                     <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                     </ul>
                  </div>
                  <div className="bscol-md-6 item text">
                     <h3>The Glory Hotels</h3>
                     <p>Over the last 25 years, the Glory Hotels organisation has been known for dependably providing the best Indian hospitality experience with more than 50 hotels and resorts worldwide.</p>
                  </div>
               </div>
               <p className="copyright">The Glory Hotels © 2024</p>
            </div>
         </footer>
      </div>

      {/* Scroll Up Button */}
      <a href="#" className="scrollup" id="scroll-up">
        <i className='bx bx-up-arrow-alt scrollup__icon'></i>
      </a>
   </section>
  );
};

export default Home;
