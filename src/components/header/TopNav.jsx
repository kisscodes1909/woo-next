import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'

export default function TopNav() {
    return (
      <div className="bg-pink-700">
        <div className="py-1 px-4 max-w-screen-xxl mx-auto">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-1 rounded-lg bg-pink-700">
                <SpeakerphoneIcon className="h-4 w-4 text-white" aria-hidden="true" />
              </span>
              <p className="ml-3 text-xs text-white truncate">
                <span className="md:hidden">FREE 3-5 DAY DELIVERY ON ORDERS OVER £20!</span>
                <span className="hidden md:inline">Big news! We're excited to announce a brand new product.</span>
              </p>
            </div>
            {/* <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    )
  }