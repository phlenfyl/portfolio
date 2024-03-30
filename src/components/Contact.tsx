
export default function Contact () {
    return (
        <div className="bg-black h-full pt-10 pb-10">
            <div className="flex flex-col md:flex-row md:items-start items-center md:justify-between px-12 xl:px-20 w-full z-[20]" >
                <div className="max-w-54 lg:max-w-2xl text-wrap md:pt-10 xl:ml-10 text-start basis-1/4">
                    <span className="text-[14px] font-medium text-gray-100 md:text-gray-400">GET IN TOUCH</span>
                    <h2 className="font-bold text-gray-200 text-[35px] lg:text-[40px] xl:text-[45px] mt-2 w-[10em]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">I&&apos;m Always </span>
                        At 
                        Your Service
                    </h2>
                    <small className="text-gray-100 md:text-gray-400">
                        If you would love us to work on any of your project ideas, then i&apos;m just a chat away. 
                        Won't mind Volunteering if it requires learning new things
                    </small>

                    <div className="flex justif-center items-center gap-10 mt-20">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <small className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500">
                                Twitter
                            </small>
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <small className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500">
                                WhatSapp
                            </small>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <small className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500">
                                Instagram
                            </small>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <small className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500">
                                Linkdeln
                            </small>
                        </a>
                    </div>
                </div> 
                <div className="basis-1/2 w-screen md:pt-0 pt-20">
                    <div className="w-full max-w-3xl p-4 bg-transparent rounded-lg shadow sm:p-6 md:p-8">
                        <form className="space-y-6" action="">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <input type="text" name="name" id="name" className="bg-transparent text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 text-white py-4 px-5" placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email" name="email" id="email" className="bg-transparent text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 text-white py-4 px-5" placeholder="Email" />
                                </div>
                            </div>
                            <div>
                            <input type="text" name="subject" id="subject" className="bg-transparent text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 text-white py-4 px-5" placeholder="Subject" />
                            </div>
                            <div>
                                <textarea id="message" cols={70} rows={10} className="block p-2.5 w-full text-sm text-white bg-transparent rounded-lg placeholder-gray-400" placeholder="Write your thoughts here..."></textarea>
                            </div>
                            <button type="submit" className="w-full text-white bg-transparent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center border border-gray-600 py-5">Send Message</button>
                        </form>
                    </div>
                </div>    
            </div>
        </div>
    );
  }
  