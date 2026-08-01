import React from 'react'

const CategoriesItems = ({ title, children }) => {
    return (
        <div className="w-42.5 h-36.25 border p-6.25 text-center group hover:bg-primary hover:border-none CategoriesItems">
            <div className='icon'>
                {children}
            </div>

            <h3 className="group-hover:text-white">{title}</h3>
        </div>
    )
}

export default CategoriesItems
