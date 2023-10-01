//import { Collapse } from 'flowbite';
//import { Dropdown } from 'flowbite';
import Link from "next/link";
import { logoutAuth } from "../models/close/logout";

function Navigation({ /* user, */ sesion, roles }: any) {
    // set the dropdown menu element
    /*     const $targetEl = document.getElementById('user-dropdown');
    
        // set the element that trigger the dropdown menu on click
        const $triggerEl = document.getElementById('user-menu-button');
     */
    // options with default values
    const options = {
        placement: 'bottom',
        triggerType: 'click',
        offsetSkidding: 0,
        offsetDistance: 10,
        delay: 300,
        onHide: () => {
            console.log('dropdown has been hidden');
        },
        onShow: () => {
            console.log('dropdown has been shown');
        },
        onToggle: () => {
            console.log('dropdown has been toggled');
        }
    };
    //const dropdown = new Dropdown($targetEl, $triggerEl, options);
    return (<>

        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900" >
            {sesion ?
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="http://localhost:3000/main" className="flex items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauzsPwOXL1qy2aUuujR3mrvf0Ow2cK1oTpA&usqp=CAU" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SPACES</span>
                    </a>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="user-dropdown">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link onClick={() => logoutAuth()} href={"/"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                :
                <>
                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <a href="http://127.0.0.1:3000/" className="flex items-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauzsPwOXL1qy2aUuujR3mrvf0Ow2cK1oTpA&usqp=CAU" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SPACES</span>
                        </a>

                        <div className="flex items-center md:order-2">
                            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <a href={"/"} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">LOGIN</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </>
            }
        </nav>
    </>)
}
export default Navigation;