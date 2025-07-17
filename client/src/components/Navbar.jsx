import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

function Navbar () {
    
    const navigate = useNavigate(); // <-- get navigate from useNavigate
    const { token } = useAppContext(); // <-- only get token from context


    return (
        <div className='flex items-center justify-between gap-4 py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer'>
            <img onClick={() => navigate('/')} src={assets.logo} alt="logo" className='w-32 sm:w-44' />
            <button onClick={() => navigate('/admin')} className='flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg cursor-pointer '>
                {token ? 'DashBoard' : 'Login'}
                <img src={assets.arrow} className='w-3' alt="arrow" />
            </button>
        </div>
    )
}

export default Navbar