
const Chat = ({setisBid,isBid}) => {
  return (
    <div className={`absolute z-40 right-0 ${isBid?"":"hidden"}`}>
        <div className="flex h-screen antialiased text-gray-800 w-[400px]">
  <div className="flex flex-row h-2/3  overflow-x-hidden">
    <div className="flex flex-col flex-auto h-full p-6">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
      <div className="flex justify-end text-xl" onClick={()=>setisBid(false)}>
        x
      </div>
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          <div className="flex flex-col h-full">
            <div className="grid grid-cols-12 gap-y-2">
              <div className="col-start-1 col-end-8 p-3 rounded-lg">
                <div className="flex flex-row items-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full text-white bg-indigo-700 flex-shrink-0">
                    A
                  </div>
                  <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                    <div>Hey How are you today?</div>
                  </div>
                </div>
              </div>
            
         
            
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
          <div>
          
          </div>
          <div className="flex-grow ml-4">
            <div className="relative w-full">
              <input
                type="text"
                className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
              />
         
            </div>
          </div>
          <div className="ml-4">
            <button className="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
              <span>Send</span>
              <span className="ml-2">
                <svg
                  className="w-4 h-4 transform rotate-45 -mt-px"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Chat