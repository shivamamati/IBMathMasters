import logo from './media/homepage/logo.png';
import iblogo from './media/homepage/iblogo.png'
import bgimage from './media/homepage/bgg.jpg'
import symbols from './media/homepage/Math.png'
import Typewriter from "typewriter-effect";
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
<section id="Home" style={{ backgroundImage: `url(${bgimage})`}} class=" h-full w-full aspect-auto bg-cover bg-no-repeat pt-9 pb-60">
  <h1 class="text-white text-4xl sm:text-6xl  text-center  font-bold mt-40 ml-0  "> Welcome to IBMathMasters! </h1>
  <p class="text-white mt-12 ml-0 text-2xl text-center sm:text-3xl"> Are you struggling with SL Math Calculus?</p>
  <p class="text-white mt-4 ml-0 text-2xl text-center sm:text-3xl">Our page provides in-depth tutorials and challenging questions to help you achieve your goals.</p>
</section>
<section class="bg-black h-full w-full aspect-auto bg-cover bg-no-repeat pb-96">
  <div style={{ backgroundImage: `url(${chalkboard})`}}>
    <h1>
      Why Students Chose Us
    </h1>
  </div>
</section>

</body>
  )}

