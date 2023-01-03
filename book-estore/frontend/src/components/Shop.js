import React from 'react'

function Shop() {
  return (
    <div className='md:container md:mx-auto'>
      <div className='flex space-x-6 bg-green-100 mb-4 '>
        <div className='w-1/5 bg-red-100'>
          <p>None</p>
        </div>
        <div className='w-3/5 bg-yellow-100 h-96'>
          <img className='object-fill max-h-full w-full' src='https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'></img>
        </div>
        <div className='w-1/5 bg-red-100'>
          <p>Book slider</p>
        </div>
      </div>
      <div className='flex border-2 border-gray-200 mb-4'>
          <div className='flex items-center p-8 border-r-2 border-gray-200'>
            <span className='flex-shrink-0'>
             <svg className='h-10 w-10' xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M5 11v1h8v-7h-10v-1c0-.552.448-1 1-1h10c.552 0 1 .448 1 1v2h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.089-.743 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-4c0 1.656-1.344 3-3 3s-3-1.344-3-3h-1c-.552 0-1-.448-1-1v-6h-2v-2h7v2h-3zm3 5.8c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm10 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-3-2.8h-10v2h.765c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h5.53c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h1.765v-4.575l-1.711-2.929c-.179-.307-.508-.496-.863-.496h-4.426v6zm1-5v3h5l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.705zm-16-3h8v2h-8v-2z"/></svg>
            </span>
            <div className='ml-2'>
              <h2 className='font-medium capitalize'>Free Shipping</h2>
              <p className='text-sm'>No charge on deliveries around Nairobi CBD</p>
            </div>

          </div>

          <div className='flex items-center p-8 border-r-2 border-gray-200'>
            <span className='flex-shrink-0'>
             <svg className='h-10 w-10' xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z"/></svg>
            </span>
            <div className='ml-2'>
              <h2 className='font-medium capitalize'>Free Shipping</h2>
              <p className='text-sm'>No charge on deliveries around Nairobi CBD</p>
            </div>

          </div>

          <div className='flex items-center p-8 border-r-2 border-gray-200'>
            <span className='flex-shrink-0 p-2'>
             <svg xmlns="http://www.w3.org/2000/svg"className='h-10 w-10 text-sm' viewBox="0 0 24 24"><path d="M21.854 13.683l1.998.159c-.132.854-.351 1.676-.652 2.46l-1.8-.905c.2-.551.353-1.123.454-1.714zm-2.548 7.826l-1.413-1.443c-.486.356-1.006.668-1.555.933l.669 1.899c.821-.377 1.591-.844 2.299-1.389zm1.226-4.309c-.335.546-.719 1.057-1.149 1.528l1.404 1.433c.583-.627 1.099-1.316 1.539-2.058l-1.794-.903zm-20.532-5.2c0 6.627 5.375 12 12.004 12 1.081 0 2.124-.156 3.12-.424l-.665-1.894c-.787.2-1.607.318-2.455.318-5.516 0-10.003-4.486-10.003-10s4.487-10 10.003-10c2.235 0 4.293.744 5.959 1.989l-2.05 2.049 7.015 1.354-1.355-7.013-2.184 2.183c-2.036-1.598-4.595-2.562-7.385-2.562-6.629 0-12.004 5.373-12.004 12zm23.773-2.359h-2.076c.163.661.261 1.344.288 2.047l2.015.161c-.01-.755-.085-1.494-.227-2.208zm-9.005 5.359v-1.419h-2.594v-1.295l2.722-3.653h1.288v3.689h.816v1.259h-.815v1.419h-1.417zm0-2.679v-1.695l-1.263 1.695h1.263zm-7.768 2.679c0-.961.275-1.709 1.234-2.419 1.129-.836 1.99-1.165 1.99-1.939 0-.512-.308-.83-.804-.83-.69 0-.855.723-.855 1.411h-1.421c-.06-1.782.951-2.713 2.338-2.713 1.287 0 2.22.856 2.22 2.036 0 .589-.183 1.056-.576 1.469-.621.655-1.552.985-2.163 1.682h2.774v1.303h-4.737z"/></svg>
            </span>
            <div className='ml-2'>
              <h2 className='font-medium capitalize'>Free Shipping</h2>
              <p className='text-sm'>No charge on deliveries around Nairobi CBD</p>
            </div>

          </div>

          <div className='flex items-center p-8'>
            <span className='flex-shrink-0'>
              <svg className='h-10 w-10' xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z"/></svg>
            </span>
            <div className='ml-2'>
              <h2 className='font-medium capitalize'>Free Shipping</h2>
              <p className='text-sm'>No charge on deliveries around Nairobi CBD</p>
            </div>

          </div>
        </div>
     </div>
      
  )
}

export default Shop