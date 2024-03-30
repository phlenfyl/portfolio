import Image from "next/image";
import Link from "next/link";


const project = [
    {
      id: 1,
      image: "/djangoecom.jpg",
      title: "No - Auth Ecom",
      brand: "Shop",
      link: "https://djangoecom.pythonanywhere.com/",
    },
    {
      id: 2,
      image: "/medicale.jpg",
      title: "Medical Bot",
      brand: "AI/ML",
      link: "https://medicalasst.pythonanywhere.com/",
    },
    {
      id: 3,
      image: "/dashboard.jpg",
      title: "Search/Status Functionality",
      brand: "Dashboard",
      link: "https://dashmain.pythonanywhere.com/",
    },
];


export default function Project() {
    return (
        <div className="pt-20 px-12 relative">
            {/* <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">Select tab</label>
                    <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Statistics</option>
                        <option>Services</option>
                        <option>FAQ</option>
                    </select>
                </div>
                <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                    <li className="w-full">
                        <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" className="inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Statistics</button>
                    </li>
                    <li className="w-full">
                        <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" className="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Services</button>
                    </li>
                    <li className="w-full">
                        <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false" className="inline-block w-full p-4 rounded-se-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">FAQ</button>
                    </li>
                </ul>
                <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                    <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                        <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                                <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                                <dd className="text-gray-500 dark:text-gray-400">Public repositories</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                                <dd className="text-gray-500 dark:text-gray-400">Open source projects</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
                                <dd className="text-gray-500 dark:text-gray-400">Contributors</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">90+</dt>
                                <dd className="text-gray-500 dark:text-gray-400">Top Forbes companies</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
                                <dd className="text-gray-500 dark:text-gray-400">Organizations</dd>
                            </div>
                        </dl>
                    </div>
                    <div className=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                        <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the world’s potential</h2>
                        <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                            <li className="flex space-x-2 rtl:space-x-reverse items-center">
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="leading-tight">Dynamic reports and dashboards</span>
                            </li>
                            <li className="flex space-x-2 rtl:space-x-reverse items-center">
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="leading-tight">Templates for everyone</span>
                            </li>
                            <li className="flex space-x-2 rtl:space-x-reverse items-center">
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="leading-tight">Development workflow</span>
                            </li>
                            <li className="flex space-x-2 rtl:space-x-reverse items-center">
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                <span className="leading-tight">Limitless business automation</span>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden p-4 bg-white rounded-lg dark:bg-gray-800" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                        <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                            <h2 id="accordion-flush-heading-1">
                                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                                <span>What is Flowbite?</span>
                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                </div>
                            </div>
                            <h2 id="accordion-flush-heading-2">
                                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                                <span>Is there a Figma file available?</span>
                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                                </div>
                            </div>
                            <h2 id="accordion-flush-heading-3">
                                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                                <span>What are the differences between Flowbite and Tailwind UI?</span>
                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                                </button>
                            </h2>
                            <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                    <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                    <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>              */}


            <div className="relative flex flex-col md:flex-row items-center justify-center mx-3 gap-y-20 xl:gap-10 gap-8 opacity-25">
                {project.map((item) => (
                    <div key={item.id} className="w-full h-full max-w-sm bg-transparent rounded-xl shadow-lg border-b">
                        <div className="p-2">
                            <Image className="p-8 rounded-lg brightness-50" src={item.image} alt="product image" width={650} height={850} />
                        </div>
                        <div className="px-2 xl:px-5 pb-5 flex flex-row justify-between items-center">
                            <div className="flex flex-col justify-center gap-5">
                                <span className="border border-gray-600 rounded-2xl bg-transparent py-1 px-3 text-gray-100 text-xs xl:text-sm w-fit"> {item.brand} </span>
                                <h3 className="xl:text-xl text-gray-100 font-bold mb-5 flex gap-2">
                                    {item.title}
                                    <button data-popover-target="popover-description" data-popover-placement="bottom-end" type="button" className="z-[99]">
                                        <svg className="w-4 h-4 ms-2 text-gray-400 hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Show information</span>
                                    </button>
                                </h3>
                            </div>

                            <div className="text-xs xl:text-sm text-gray-100 font-semibold cursor-pointer">
                                <Link href={`${item.link}`}>
                                    <svg className="w-[30px] h-[30px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}


                    <div data-popover id="popover-description" role="tooltip" className="absolute z-50 inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm w-72">
                        thus us
                        <div data-popper-arrow></div>
                    </div>


            </div>
            

        </div>
    );
}
  