import Nav from './Nav'
import Sidebar from './Sidebar'
import Footer from './Footer'
//import '../../css/sb-admin-2.css'

const Layout = (props) => {
    return (                
        <div className='flex h-full'>   
            <Sidebar />
            <div className='flex flex-col flex-1'>
                <Nav />                
                {props.children}      
                <Footer />          
            </div>
        </div>
    )
}

export default Layout