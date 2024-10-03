import React from 'react'

const Pagination = () => {
  return (
    <div>
        <div className="flex justify-center items-center my-12">
  <nav aria-label="Pagination">
    <ul className="inline-flex items-center space-x-1">
      <li>
        <button
          className="px-3 py-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:bg-gray-300 disabled:text-gray-400"
          disabled
        >
          Previous
        </button>
      </li>

      <li>
        <button
          className="px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
        >
          1
        </button>
      </li>
      <li>
        <button
          className="px-3 py-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          2
        </button>
      </li>
      <li>
        <button
          className="px-3 py-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          3
        </button>
      </li>
      <li>
        <span className="px-3 py-2 text-gray-600">...</span>
      </li>
      <li>
        <button
          className="px-3 py-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          10
        </button>
      </li>

      <li>
        <button
          className="px-3 py-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</div>

    </div>
  )
}

export default Pagination