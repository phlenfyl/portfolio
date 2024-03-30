"use client"
import Typewriter from "typewriter-effect";
import Link from "next/link";

export default function Banner() {
    return (
        <div className="bg-black h-full pb-24">
            <div className="flex flex-col md:flex-row justify-center pt-8 md:pt-10 xl:pt-24 px-10 md:px-20 w-full z-[20]" >
                <div className="h-full w-full flex flex-col gap-3 justify-center mt-16 m-auto text-start md:mb-0 ">
                    <div
                        className="max-w-fit pr-10 py-1 pl-2 rounded-xl shadow-lg text-gray-100 font-semibold bg-[#7042f88b] opacity-[0.9]"
                    >
                        <h1 className="text-[14px] tracking-wide">
                        Software Developer
                        </h1>
                    </div>
            
                    <div className="flex capitalize flex-col text-gray-100 gap-6 mt-3 md:mt-6 text-[35px] lg:text-[40px] xl:text-[50px] font-bold max-w-[800px] md:w-full w-96 h-auto leading-[50px] lg:leading-[55px] xl:leading-[65px]">
                        <span>
                        Provides
                        <span className="text-purple-500">
                            {" "}
                            <Typewriter
                                options={{
                                strings: [
                                    "scalable applications", 
                                    "AI/ML Integration", 
                                    "Web Applications"
                                ],
                                autoStart: true,
                                loop: true,
                                cursor: ""
                                }}
                            />
                            {" "}
                        </span>
                        {/* project exprience */}
                        </span>
                    </div>

                    <Link href={'/damicv.pdf'} target="_blank"  rel="noopener noreferrer" locale={false} download
                        className="hidden md:flex mt-24 py-2 button-primary border border-gray-200 shadow-xl text-white cursor-pointer rounded-lg max-w-[200px] flex items-center justify-evenly" >
                        Download CV!
                        <svg className="w-8 h-7 text-white -mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
                        </svg>
                    </Link>
                </div> 
                <div className="flex flex-col w-full">
                    <p className="text-base tracking-wide text-gray-300 mt-10 max-w-[600px]" >
                        👋 I&lsquo;m a Full Stack Software Developer with a knack for building creative solutions. 
                        I thrive in both collaborative environments and on independent projects.  
                        Looking for a fulltime onsite developer or a freelancer ?
                        Let's Get Started !!
                    </p>
                    <div className="p-5">
                        <div className="flex gap-5 pt-2 md:-ml-5">
                            <Link href="https://www.linkedin.com/in/damilola-peter-meshe-4b2b26231/" target="_blank" className="rounded-full border-gray-600 border">
                                <svg className="w-[25px] h-[25px] text-gray-200 py-1 px-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                </svg>
                            </Link>
                            <Link href="https://github.com/MESHEmugles?tab=repositories" target="_blank" className="rounded-full border-gray-600 border">
                                <svg className="w-[25px] h-[25px] text-gray-200 py-1 px-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                                </svg>
                            </Link>
                            <Link href="/" target="_blank" className="rounded-full border-gray-600 border">
                                <svg className="w-[25px] h-[25px] text-gray-200 py-1 px-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                                </svg>
                            </Link>
                            <Link href="/" target="_blank" className="rounded-full border-gray-600 border">
                                <svg className="w-[25px] h-[25px] text-gray-200 py-1 px-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clipRule="evenodd"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

{/* <div className=" max-w-2xl w-full xl:-mt-16 bg-transparent lg:ml-0 md:-ml-5 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
    <div className="w-full">
        <Image src="/meshes.png" alt="meshe w-screen" width={100} height={100} objectFit="cover" unoptimized={true} className="w-full rounded-lg p-2" />
    </div>
    <div className="p-5">
        <h2 className="text-center mb-2 text-nowrap text-2xl font-bold tracking-tight text-gray-200 dark:text-white capitalize">
            meshe damilola peter
        </h2>
        <p className="mb-3 font-normal text-gray-200 text-center text-2xl">works mostly remote</p>
        <div className="flex gap-10 justify-center items-center pt-5">
            <a href="" className="rounded-full border-gray-600 border">
                <svg className="w-[30px] h-[30px] text-gray-200 py-1 px-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                </svg>
            </a>
            <a href="" className="rounded-full border-gray-600 border">
                <svg className="w-[30px] h-[30px] text-gray-200 py-1 px-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                </svg>
            </a>
            <a href="" className="rounded-full border-gray-600 border">
                <svg className="w-[30px] h-[30px] text-gray-200 py-1 px-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                </svg>
            </a>
            <a href="" className="rounded-full border-gray-600 border">
                <svg className="w-[30px] h-[30px] text-gray-200 py-1 px-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clipRule="evenodd"/>
                </svg>
            </a>
        </div>
    </div>
</div>     */}