import logo from '../../assets/logo-cdm-light.svg';

const Footer = () => {
  return (
    <footer className ="bg-brownDark border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between gap-4 items-center mx-auto max-w-screen-xl mt-10">
            <a href="/" className="flex items-center">
              <img src={logo} className=" py-2" alt="Catalonia Drought Monitor logo" />
            </a>

            <ul className="flex mt-4 font-medium lg:flex-row lg:space-x-12 lg:mt-0">
              <li>
                  <a href="/page" className="block py-2 pr-4 pl-3 text-light lg:hover:text-yellow-600 lg:p-0 uppercase lg:text-[1rem]">Interactive Map</a>
              </li>
              <li>
                  <a href="/page/2" className="block py-2 pr-4 pl-3 text-light lg:hover:text-yellow-600 lg:p-0 uppercase lg:text-[1rem]">Detailed Data</a>
              </li>
              <li>
                  <a href="/page/about" className="block py-2 pr-4 pl-3 text-light lg:hover:text-yellow-600 lg:p-0 uppercase lg:text-[1rem]">About</a>
              </li>
            </ul>   
          </div>
          <div className="mx-auto max-w-screen-xl mt-20">
            <p className='text-lightDarker py-4 flex justify-end items-center mt-5 text-sm ml-auto'>
              &copy; 2024 All rights reserved
            </p>
          </div>
    </footer>
  );
};
export default Footer
