import { useState ,useEffect} from 'react'
import { useRouter } from 'next/router'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const addproduct = () => {


  const router = useRouter()

    const [product, setProduct] = useState({
        name: '',
        description: '',
        sellprice: '',
        baseprice: '',
        category: '',
        img: '',
        stock: '',
        sellername: '',
        selleremail: '',
        varient: '',
    })
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('sellertoken'))
        if (user) {
          const sellername = JSON.parse(localStorage.getItem('sellername'))
          const selleremail = JSON.parse(localStorage.getItem('selleremail'))
          setProduct({ ...product, sellername: sellername, selleremail: selleremail })
        }else{
          
          router.push('/sellerlogin')
        }
    }, [])
    




  const handlechange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
    // console.log(product)

  }
  const handleSubmit = (e) => {

    e.preventDefault()
    console.log(product)

    fetch('/api/addproduct',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name:product.name,
            description:product.description,
            sellprice:product.sellprice,
            baseprice:product.baseprice,
            category:product.category,
            img:product.img,
            stock:product.stock,
            sellername:product.sellername,
            selleremail:product.selleremail,
            varient:product.varient,
        })
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)

// alert('Product Added')
if(data.success){
    toast.success('Product Added')
    // router.push('/sellerdashboard')
}
        }
    ).catch(err=>console.log(err))


  }




  return (

    <div> 
      <ToastContainer />
        <h1 className="text-4xl mt-10 text-center font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
          Add a Product
        </h1>
        <div className="md:grid md:grid-cols-3 md:gap-6 md:mx-[20%] md:mt-[2%]">
            <div className="mt-5 md:col-span-3 md:mt-0">
              <form onSubmit={handleSubmit}>
                <div className="shadow-xl sm:overflow-hidden sm:rounded-md">
                  <div className="space-y-6 bg-slate-50 px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-3">
                        <div>
                            <label htmlFor="name"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                      <input  type="text"  onChange={handlechange} name="name" id="product" className="bg-white border border-black -gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zoxie" required=""/>
                        </div>
                      </div>
                   


                    
                  </div>

                

                  <label htmlFor="about" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="description"
                      rows={3} onChange={handlechange}
                      className="mt-1 p-2 block w-full rounded-md border border-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Add a brief description of your product"
                      defaultValue={''}
                    />
                  </div>
                

                <div className="grid grid-cols-4 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <div>
                      <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                      <input type="text" onChange={handlechange} name="category" id="category" className="bg-white border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zoxie" required="" />
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <div>
                      <label htmlFor="varient" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">varient</label>
                      <input type="text" onChange={handlechange} name="varient" id="varient" className="bg-white border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zoxie" required="" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-between ">
                  <span className="">
                    <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo</label>
                    <input
                      type="text"
                      name="img" onChange={handlechange}
                      className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id='photo'
                      placeholder='Provide url'
                    />
                  </span>
                  <span className="">
                    <div>
                      <label
                        htmlFor="mrp"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        MRP
                      </label>
                      <input
                        type="sellprice"
                        name="sellprice"
                        id="mrp" onChange={handlechange}
                        className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Asking price"
                        required=""
                      />
                    </div>
                  </span>
                  <span className="">
                    <div>
                      <label
                        htmlFor="base"

                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Base Price
                      </label>
                      <input
                        type="number"
                        name='baseprice'
                        id="base" onChange={handlechange}
                        className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="in RUPEES"
                        required=""
                      />
                    </div>
                  </span>
                  <span className="">
                    <div>
                      <label
                        htmlFor="quantity"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Quantity (for sale)
                      </label>
                      <input
                        type="number"
                        id="quantity"
                        name='stock' onChange={handlechange}
                        className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Number"
                        required=""
                      />
                    </div>

                  </span>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add Product
                </button>

            </div>  
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default addproduct