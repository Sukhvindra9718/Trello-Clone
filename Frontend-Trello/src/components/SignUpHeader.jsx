import React from 'react'
import DashboardLogo2 from "../images/dashboard-logo2.gif"
function SignUpHeader() {
    return (
        <header className='bg-blue-600 w-full' style={{ height: "10%" }}>
            <div className='flex items-center h-full pl-20'>
                <img src={DashboardLogo2} alt="Dashboard Logo" className='w-32' />
            </div>
        </header>
    )
}

export default SignUpHeader