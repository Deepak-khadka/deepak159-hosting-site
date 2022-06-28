import pageImage from "../../images/cloudfare-hosting/goto-pages.png";
import CreateProjectImage from "../../images/cloudfare-hosting/create-a-project.png";
import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const CloudfareHosting = () => {
    return (
          <section class="bg-white dark:bg-gray-900 container-fluid">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                How to Deploy your portfolio with Github pages and Host on Cloudfare
                    </h1>
                <div class="mt-8 xl:mt-5 lg:flex lg:items-center">
                    <div class="w-full lg:w-1/2 grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2">
                        <div class="space-y-3">
                        
                            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                <a href="https://github.com">Github Account</a>
                            </h1>

                            <p class="text-gray-500 dark:text-gray-300">
                              Step 1:  Create your github account.
                            </p>
                            <p class="text-gray-500 dark:text-gray-300">
                              Step 2:  Create repository.
                            </p>
                        </div>

                        <div class="space-y-3">
                           
                            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                               Cloudfare
                                </h1>

                                <p class="text-gray-500 dark:text-gray-300">
                              Step 1:  Create your cloudfare account.
                            </p>
                            <p class="text-gray-500 dark:text-gray-300">
                              Step 2:  Create Page.
                              <Zoom>
                                 <img src={pageImage}></img>
                              </Zoom>
                            </p>

                            <p class="text-gray-500 dark:text-gray-300">
                              Step 3:  Create a project.
                              <Zoom>
                                 <img src={CreateProjectImage}></img>
                              </Zoom>
                            </p>
                        </div>

                        <div class="space-y-3">
                            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                </svg>
                            </span>

                            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Easy to customiztions</h1>

                            <p class="text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>

                        <div class="space-y-3">
                            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </span>

                            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Simple & clean designs</h1>

                            <p class="text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>
                        </div>
                    </div>

                    <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
                        <img class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CloudfareHosting;