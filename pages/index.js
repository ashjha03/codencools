
import Item from "../components/Item";
import mongoose from "mongoose";
import Link from "next/link";
import Product from "../model/Product";

export default function Home({ products }) {

  return (
    <>
      <section className="">
        <div className="carousel w-full h-[100vh]">
          <div id="slide1" className="carousel-item relative w-full">

            <img
              src="https://img.freepik.com/premium-vector/online-shopping-store-website-mobile-phone-design-smart-business-marketing-concept-horizontal-view-vector-illustration_62391-460.jpg?w=2000"
              className="w-full"
            />

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">

            <img
              src="https://img.freepik.com/premium-vector/online-shopping-illustration-with-smartphone-shopping-store_115083-316.jpg?w=2000"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>

            </div>
          </div>
        </div>
      </section>

      <div className="products pb-20 text-center bg-[#f4f4f4] py-12">
        <div className="prod-head">
          <h1 className="text-5xl font-bold mb-6">Our Latest Products</h1>
          <p className="text-lg text-gray-500">
            There are many variations of passages of Lorem Ipsum available{" "}
            <br /> but the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="shops-box grid grid-cols-4 gap-4 p-6 mt-12">
          {products
            .map((product) => {
              return (
                <Link
                  href={"product/" + product._id}
                  className="shop-box bg-white max-w-sm border py-2 h-[55vh] rounded-xl"
                  key={product}
                >
                  <div className="shop-img h-[50%] w-full flex justify-center">
                    <img
                      src={product.img}
                      className="h-full"
                      alt="Reload please ..."
                    />
                  </div>{" "}
                  <hr />
                  <div className="shop-data h-[50%] pt-4 px-4">
                    <h1 className="shop-name text-4xl text-center pb-1">
                      {product.name}
                    </h1>
                    <p className="shop-category text-sm text-center pb-4">
                      Category: {product.category}
                    </p>
                    <p className="shop-about text-md pb-3">
                      {product.description.slice(0, 25)}
                    </p>
                    <p className="shop-time text-center font-bold pb-3">
                      Price - $300
                    </p>
                    <button className="bg-gray-800 text-white py-2 px-8 rounded-xl">
                      Buy Now
                    </button>
                  </div>
                </Link>
              );
            })
            .slice(0, 4)}
        </div>
      </div>

      <section className="text-gray-700 body-font pt-24">
        <div className="head text-center">
          <div className="text-blue-700 text-xl">Testimonials</div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">What our Clients says</h1>
          <p className="text-lg text-gray-500">
            There are many variations of passages of Lorem Ipsum available{" "}
            <br /> but the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-gray-700 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-gray-700 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  ALPER KAMU
                </h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-gray-700 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  HENRY LETHAM
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  let products = await Product.find({}).lean();
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}
