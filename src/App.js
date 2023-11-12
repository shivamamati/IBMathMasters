import logo from './media/homepage/logo.png';
import iblogo from './media/homepage/iblogo.png'
import heroimage from './media/homepage/Hero-pic.png'
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
<section class="w-max-full h-screen bg-black grid grid-cols-2">
    <div>
        <div class="pl-20 pt-40">
            <h1 class="text-white font-poppins font-extrabold text-4xl">Struggling with IB Mathematics</h1>
            <div class=" mt-3 align-middle h-1 bg-white"></div>
            <p class="text-white font-poppins font-bold text-lg mt-4 leading-8 ">Welcome to your go-to destination for mastering 
                the intricacies of calculus in the International Baccalaureate (IB) 
                program! <br></br><br></br>The IBMathMasters materials feature lessons, interactive 
                activities, and enrichment challenges. The course ware is online, free to use, 
                and does not require registration. Start learning from IB Students!
            </p>
        </div>
    </div>
    <div>
    <img src={heroimage} class="w-full -mt-20" alt="Flowbite Logo" />
    </div>
</section>
<section class="h-screen w-max-full bg-black ">
    <div >
        <h1 class="text-white font-poppins pl-10 font-semibold text-4xl">Courseware: SL Math calculus</h1>
        <div class="h-1 mx-8 mt-3 bg-white"></div>
    </div>

</section>


</body>
  )}

