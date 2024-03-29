import React from 'react'
import Stories from './Stories'

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto'>
       {/*  section */}
       <section className='col-span-2 h-16 w-full'>
          <Stories />
          {/*  posts */}
       </section>

      {/*  section */}
      <section>
        {/* mini-profile */}
        {/* suggestions */}

      </section>
    </main>
  )
}

export default Feed