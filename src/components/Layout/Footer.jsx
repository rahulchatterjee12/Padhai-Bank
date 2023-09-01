import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bg-orange-200 p-5'>
            <h2 className='text-center'>Copyright &copy; {new Date().getFullYear()} PadhaiBank. All rights reserved.</h2>
        </div>
    )
}

export default Footer