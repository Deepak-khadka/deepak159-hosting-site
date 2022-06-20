import {Link} from "react-router-dom";

export const NavMenu = () => {

  const changeTheme = () => {

    const toggle = document.querySelector('.js-change-theme');
    const body = document.querySelector('body');
    const profile = document.getElementById('profile');
    const toggleTheme = document.getElementById('nav-theme');

    if (body.classList.contains('text-gray-900')) {
      toggle.innerHTML = "☀";
      body.classList.remove('text-gray-900');
      body.classList.add('text-gray-100');
      profile.classList.remove('bg-white');
      profile.classList.add('bg-gray-900');
      toggleTheme.classList.remove('bg-white-900');
      toggleTheme.classList.add('bg-grey-900');
      ;
    } else
    {
      toggle.innerHTML = "🌙";
      body.classList.remove('text-gray-100');
      body.classList.add('text-gray-900');
      profile.classList.remove('bg-gray-900');
      profile.classList.add('bg-white');
      toggleTheme.classList.remove('bg-gray-900');
      toggleTheme.classList.add('bg-white-900');

    }
  }

    return (
        <>
          <div className="min-h-full">
            <nav className="bg-white-900" id="nav-theme">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        <Link to="/"
                              className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium text-decoration-line: none">Deepak
                          Khadka</Link>

                        <Link
                            className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-decoration-line: none"
                            to="/about-us">About us</Link>

                        <Link
                            className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-decoration-line: none"
                            to="/contact-us">Contact us</Link>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <button onClick={ changeTheme } className="js-change-theme focus:outline-none">🌙</button>
                  </div>
                </div>

              </div>
              <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <Link to="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Deepak
                    Khadka</Link>

                  <Link
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      to="/about-us">About us</Link>

                  <Link
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      to="/contact-us">Contact us</Link>


                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full"
                           src="images/deepak.jpg"
                           alt=""/>
                    </div>

                    <div className="absolute top-0 right-0 h-12 w-18 p-4">
                      <button onClick={ changeTheme } className="js-change-theme focus:outline-none">🌙</button>
                    </div>
                  </div>

                </div>
              </div>
            </nav>
          </div>
        </>

    );
};
