const ProjectList = () => {
      return (
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-extrabold text-body">Project </h2>

              <div className="mt-6 grid grid-cols-1 gap-y-10 flex-column gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                  <div className="group relative">
                      <div
                          className="w-full min-h-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-40 lg:aspect-none">
                          <img
                              src="https://shilpnepal.com/storage/images/setting/setting-164972572777018.png"
                              alt=""
                              className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
                      </div>
                  </div>

                  <div className="group relative">
                      <div
                          className="w-full min-h-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-50 lg:aspect-none">
                          <img
                              src="https://neputer.com/image/clients/16519871766789_kunyo1.png"
                              alt="Front of men&#039;s Basic Tee in black."
                              className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
                      </div>

                  </div>

                  <div className="group relative">
                      <div
                          className="w-full min-h-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-50 lg:aspect-none">
                          <img
                              src="https://neputer.com/image/clients/16519871544678_broadway1.png"
                              alt=""
                              className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
                      </div>
                  </div>

              </div>

          </div>
      )
}

export default ProjectList;