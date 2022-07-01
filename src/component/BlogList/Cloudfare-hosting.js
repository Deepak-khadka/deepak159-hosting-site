import pageImage from "../../images/cloudfare-hosting/goto-pages.png";
import CreateProjectImage from "../../images/cloudfare-hosting/create-a-project.png";
import ConnectToGit from "../../images/cloudfare-hosting/conntect-to-git.png";
import ChooseRepository from "../../images/cloudfare-hosting/choose-your-repository.png";
import SelectBranch from "../../images/cloudfare-hosting/select-branch-&-framework.png";
import ChooseDomain from "../../images/cloudfare-hosting/choose-domain.png";

import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const CloudfareHosting = () => {
    return (
        <section className="bg-white dark:bg-gray-900 container-fluid">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                    How to Deploy your portfolio with Github pages and Host on Cloudflare
                </h1>
                <div className="mt-8 xl:mt-5 lg:flex lg:items-center">
                    <div className="w-full grid grid-cols-3 columns-3 gap-8">

                        <div className="space-y-3">

                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                <a href="https://github.com">
                                    <b>Github Account</b>
                                </a>
                            </h1>

                            <hr/>
                            <p className="text-gray-500 dark:text-gray-300">
                                Step 1: Create your github account.
                            </p>
                            <p className="text-gray-500 dark:text-gray-300">
                                Step 2: Create repository.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                <a href="https://dash.cloudflare.com/"> Cloudflare</a>
                            </h1>

                            <hr/>
                            <p className="text-gray-500 dark:text-gray-300">
                                Step 1: Create your cloudflare account.
                            </p>
                            <p className="text-gray-500 dark:text-gray-300">
                                Step 2: Create Page.
                                <Zoom>
                                    <img src={pageImage} alt="Cloud Fare page"/>
                                </Zoom>
                            </p>
                            <p className="text-gray-500 dark:text-gray-300">
                                Step 3: Create a project.
                                <Zoom>
                                    <img src={CreateProjectImage} alt="Create a project"/>
                                </Zoom>
                            </p>
                            <p className="text-gray-500 dark:text-gray-300">
                                Step 4: Connect to github.
                                <Zoom>
                                    <img src={ConnectToGit} alt="Connect to github"/>
                                </Zoom>
                            </p>
                            <p className="text-gray-500 dark:text-gray-300">
                                Step 5: Choose a repository.
                                <Zoom>
                                    <img src={ChooseRepository} alt="Choose repository"/>
                                </Zoom>
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                               Continue...
                            </h1>
                            <hr/>
                            <p className="text-gray-500 dark:text-gray-300">
                                Step 6: Select a branch which you want to auto deploy.
                                <Zoom>
                                    <img src={SelectBranch} alt="Select a Branch"/>
                                </Zoom>
                            </p>
                            <p className="text-gray-500 dark:text-gray-300">
                                Step 7: Select a branch which you want to auto deploy.
                                <Zoom>
                                    <img src={SelectBranch} alt="Select a Branch"/>
                                </Zoom>
                            </p>
                            <p className="text-gray-500 dark:text-gray-300">
                                Step 8: Register your Domain name in the custom Domain panel.
                                <Zoom>
                                    <img src={ChooseDomain} alt="Choose Domain "/>
                                </Zoom>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CloudfareHosting;