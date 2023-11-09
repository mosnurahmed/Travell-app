import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar />

      <div className="relative bg-gray-800">
        <img
          className="w-full h-64 object-cover opacity-70"
          src="https://media.nomadicmatt.com/2022/vietnamcheap1.jpeg"
          alt="Banner"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">About Us</h1>
            <p className="mt-3 text-xl text-white sm:mt-4">We are dedicated to serving you.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit deleniti fuga, repellendus, ratione, maxime
            quia cum inventore exercitationem atque praesentium consequatur velit ut perspiciatis. Nesciunt dolore
            impedit non veritatis consequatur sapiente, sunt explicabo omnis maiores et iste quam illo? Qui veniam nam
            hic cupiditate! Tenetur voluptates pariatur nesciunt nemo quibusdam deserunt autem sunt, minima adipisci
            mollitia voluptatum eum dolorem distinctio dolor hic totam cumque neque corporis temporibus. Possimus beatae
            fugiat, similique sapiente eveniet quis delectus est totam adipisci sequi expedita laborum sunt recusandae
            molestias aut quidem officia repellendus dicta hic natus illum velit obcaecati qui sit. Eius adipisci vero
            optio?
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-12">Our Vision</h2>
          <p className="mt-4 text-lg text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt suscipit sapiente, eaque voluptas,
            repudiandae hic aliquam enim facilis dicta ea deleniti officia quibusdam, sit quasi. Perferendis amet
            voluptate veritatis ipsa a? Voluptatem illum assumenda, velit esse possimus, sed dolor labore cumque sit
            ratione ipsum? Provident sapiente veritatis obcaecati commodi eius quas rem modi neque ullam atque
            voluptatibus dolore natus tenetur aut voluptatem fugiat cupiditate optio consequatur odio sed libero, veniam
            quos. Accusamus cum maiores ut modi qui tempora iste ipsam vero quo consequuntur? Dicta voluptate ipsum quo
            beatae nihil consequatur ab cum incidunt reprehenderit doloremque. Adipisci officiis ex dolorum labore
            repellat, possimus laborum sequi odit provident deserunt soluta placeat deleniti unde dicta porro error
            facilis inventore mollitia necessitatibus dolore. Reprehenderit, facilis modi! Aliquam laudantium optio est
            fugit, dolore mollitia quas facilis possimus eius iusto id nobis tenetur praesentium iste culpa quod
            explicabo molestias officiis hic nisi officia? Labore, natus cum.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
