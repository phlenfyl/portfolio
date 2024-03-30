import Image from "next/image";

export default function Navbar() {
    return (
        <nav
        className="block w-full md:px-6 py-2 md:py-3 mx-auto text-white bg-black border-b border-gray-900">
            <div className="flex md:flex-row flex-col items-left md:items-center justify-between text-gray-900 mx-0 lg:mx-10">
                <a href="#"
                    className="tracking-wide mr-4 block cursor-pointer pl-4 py-1.5 font-sans text-xl font-semibold leading-relaxed tracking-normal text-white">
                    <Image src="/meshez.png" width={25} height={25} alt="logo" />
                </a>
                <div className="md:bg-transparent bg-[#050708] md:shadow-none shadow-inner md:py-0 py-2">
                    <ul className="flex gap-12 md:gap-2 lg:mb-0 lg:mt-0 flex-row lg:items-center lg:gap-6 pl-4">
                        <li className="block p-1 font-sans text-xs md:text-base font-semimedium leading-normal text-white">
                            <a href="#" className="flex items-center transition-colors hover:text-blue-500">
                                SERVICES
                            </a>
                            </li>
                            <li className="block p-1 font-sans text-xs md:text-base font-semimedium leading-normal text-white">
                            <a href="#" className="flex items-center transition-colors hover:text-blue-500">
                                EXPERIENCE
                            </a>
                            </li>
                            <li className="block p-1 font-sans text-xs md:text-base font-semimedium leading-normal text-white">
                            <a href="#" className="flex items-center transition-colors hover:text-blue-500">
                                CONTACT
                            </a>
                            </li>
                            <li className="block p-1 font-sans text-xs md:text-base font-semimedium leading-normal text-white">
                            <a href="#" className="flex items-center transition-colors hover:text-blue-500">
                                BLOG
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="max-w-xl md:relative absolute right-0 md:hidden block top-[8px]">
                    <button type="button" className="capitalize text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-xl px-5 py-1.5 text-center inline-flex gap-2 items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                        Resume
                        <svg className="w-8 h-7 text-white -mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
  