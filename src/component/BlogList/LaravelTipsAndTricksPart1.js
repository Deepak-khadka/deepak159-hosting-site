import ToSql from "../../images/laravel-tips-and-trics/toSql.png";
import Zoom from "react-medium-image-zoom";

const LaravelTipsAndTricksPart1 = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 container-fluid">
        <div className="container px-6 py-10 mx-auto">

        <div className="mt-8 xl:mt-5 lg:flex lg:items-center">
                    <div className="w-full grid grid-cols-2 columns-3 gap-8">

          <p className="text-gray-500 dark:text-gray-300 bg-gray-700">
            <code>Note: The toQuery method returns an Eloquent query builder 
                instance containing a whereIn constraint on the collection model's primary keys:</code>
            <Zoom>
              <img src={ToSql} alt="Cloud Fare page"/>
            </Zoom>
          </p>

          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LaravelTipsAndTricksPart1;
