export default function GridLayout() {
  return (
    <section className="py-16 bg-gray-100">

      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-10">
          My Projects
        </h2>


        {/* Grid Layout */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-col-4
          gap-8
        ">


          {/* Card 1 */}
          <div className="
            bg-white 
            rounded-2xl 
            shadow-lg 
            p-6 
            hover:scale-105 
            transition
          ">
            <h3 className="text-xl font-bold">
              E-Commerce App
            </h3>

            <p className="text-gray-600 mt-3">
              Next.js, React, Node.js and MongoDB
            </p>

            <button className="
              mt-5 
              bg-blue-600 
              text-white 
              px-5 
              py-2 
              rounded-lg
            ">
              View Project
            </button>
          </div>
<div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
    <h3 className="text-3xl" > app</h3>
    <p> paragarp</p>
    <button className="bg-blue-400 text-white p-4 rounded-3xl" >
        clik
    </button>

</div>



          {/* Card 2 */}
          <div className="
            bg-white 
            rounded-2xl 
            shadow-lg 
            p-6 
            hover:scale-105 
            transition
          ">
            <h3 className="text-xl font-bold">
              POS System
            </h3>

            <p className="text-gray-600 mt-3">
              Next.js, MySQL, Express
            </p>

            <button className="
              mt-5 
              bg-blue-600 
              text-white 
              px-5 
              py-2 
              rounded-lg
            ">
              View Project
            </button>
          </div>



          {/* Card 3 */}
          <div className="
            bg-white 
            rounded-2xl 
            shadow-lg 
            p-6 
            hover:scale-105 
            transition
          ">
            <h3 className="text-xl font-bold">
              Admin Dashboard
            </h3>

            <p className="text-gray-600 mt-3">
              React, Tailwind CSS, API
            </p>

            <button className="
              mt-5 
              bg-blue-600 
              text-white 
              px-5 
              py-2 
              rounded-lg
            ">
              View Project
            </button>
          </div>


        </div>

      </div>

    </section>
  );
}