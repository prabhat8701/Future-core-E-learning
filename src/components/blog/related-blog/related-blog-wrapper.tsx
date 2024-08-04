import React from 'react'

function RelatedBlogWrapper({children}:{children: React.ReactNode}) {
    return (
        <section className='bg-[#9DCCFF]/20'>
            <div className="container mx-auto py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h4 className='text-xl font-bold text-black mb-4'>Related Blog</h4>
                    <div className='grid sm:grid-cols-2 gap-6 lg:gap-16'>
                        {children}
                    </div>
                    <div className='flex gap-6 justify-end mt-10'>
                        <button className='blog-list-nav' disabled={true}>
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.453125 7.20312C0.03125 7.67188 0.03125 8.375 0.453125 8.79688L6.82812 15.1719C7.29688 15.6406 8 15.6406 8.42188 15.1719L9.5 14.1406C9.92188 13.6719 9.92188 12.9688 9.5 12.5469L4.95312 8L9.5 3.5C9.92188 3.07812 9.92188 2.32812 9.5 1.90625L8.42188 0.828125C8 0.40625 7.29688 0.40625 6.82812 0.828125L0.453125 7.20312Z" fill="white"/>
                            </svg>
                        </button>
                        <button className='blog-list-nav'>
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 8.79688C9.92188 8.375 9.92188 7.67188 9.5 7.20312L3.125 0.828125C2.65625 0.40625 1.95312 0.40625 1.53125 0.828125L0.453125 1.90625C0.03125 2.375 0.03125 3.07812 0.453125 3.5L5 8.04688L0.453125 12.5469C0.03125 12.9688 0.03125 13.6719 0.453125 14.1406L1.53125 15.1719C1.95312 15.6406 2.65625 15.6406 3.125 15.1719L9.5 8.79688Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RelatedBlogWrapper