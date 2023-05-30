import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
        <>
            <Header />
            <main className="App">
               <div className='container'> 

                <Outlet />
                </div>
                
            </main>
        </>
    )
}

export default Layout