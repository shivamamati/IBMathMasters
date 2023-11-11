import logo from './media/homepage/logo.png';
import iblogo from './media/homepage/iblogo.png'
import bgimage from './media/homepage/bgimage.jpg'
import symbols from './media/homepage/Math.png'
import Typweriter from "typewriter-effect";
import Marquee from "react-fast-marquee";
import chalkboard from './media/homepage/board.png'
import './App.css';


export default function App() {
  return (
    <body>
  <header>
    <nav class= "border-gray-200 px-4 lg:px-6 py-8 bg-black">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" class="flex items-center">
                <img src={logo} class="mr-3 h-10 sm:h-14" alt="Flowbite Logo" />
            </a>
            <div class="flex items-center lg:order-2">
              <img src={iblogo} class="mr-3 h-10 sm:h-14" alt="Flowbite Logo" />
                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class=  " lg:-ml-44 hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul class="flex flex-col font-medium lg:flex-row lg:space-x-8">
                <li>
                    <a href="#" class="block py-2 pr-4 pl-32 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Videos</a>
                </li>
                <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Questions</a>
                </li>
                <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</header>
<section id="Home" style={{ backgroundImage: `url(${bgimage})`}} class=" sm:h-full w-full aspect-auto bg-cover bg-no-repeat pt-9 pb-60">
  <h1 class="text-white text-4xl sm:text-6xl  text-center  font-bold mt-16 sm:mt-40 ml-0  "> Welcome to IBMathMasters! </h1>
  <p class="text-white mt-8 ml-0 text-2xl text-center sm:text-3xl"> Are you struggling with SL Math Calculus?</p>
  <p class="text-white mt-4 ml-0 text-2xl text-center sm:text-3xl">Our page provides in-depth tutorials and challenging questions to help you achieve your goals.</p>
</section>
<section id="About-me" class="h-max max-w-full bg-cover bg-no-repeat aspect-auto bg-black">
            <div class="w-max-full mx-2 lg:mx-10 bg-w">
                <div class=" h-full">
                    <div class="w-full px-6">
                        <h1 class="underline text-4xl font-body text-white font-bold text-center pt-20">About IBMathMasters</h1>
                        <p class=" pt-8 pb-16 lg:px-8 text-sm lg:text-xl font-body leading-10 text-center text-white "> Welcome to IBMathMasters, your go-to destination for mastering the intricacies of calculus in the International Baccalaureate (IB) program! Founded by IB students for IB students, our mission is to provide a dynamic platform where learners can navigate the challenging world of calculus with confidence and clarity.

At IBMathMasters, we understand the unique needs and pressures faced by IB students tackling the complexities of calculus. That's why we've created a supportive community that fosters collaborative learning and knowledge exchange. Whether you're diving into the basics of limits, exploring the nuances of derivatives, or delving into the depths of integrals, we've got you covered.

What sets IBMathMasters apart is our commitment to student-driven education. Our content is crafted by fellow IB students who have successfully navigated the IB calculus curriculum. We offer comprehensive resources, from concept explanations and problem-solving strategies to practice exams and study guides, all tailored to the specific requirements of IB calculus.

Join our community of IBMathMasters to:

Access Comprehensive Resources: Dive into well-structured content designed to demystify calculus concepts and guide you through the curriculum.

Collaborate with Peers: Connect with fellow IB students worldwide, sharing insights, tips, and support in our collaborative community forum.

Ace Your Exams: Prepare confidently with our curated collection of practice exams, revision materials, and real-world applications of calculus concepts.

Stay Updated: Stay informed about the latest IB curriculum changes, exam trends, and study strategies to stay ahead of the curve.

Whether you're a seasoned calculus enthusiast or just starting your IB journey, IBMathMasters is your trusted companion. Empower yourself with the knowledge and skills you need to excel in IB calculus. Let's master math together!</p>
                    </div>
                    <div class="flex justify-center align-middle m-auto border pt-8 lg:pt-0 mb-8 lg:mb-0">
                        
                    </div>
                </div>
            </div>
        </section>

</body>
  )}

