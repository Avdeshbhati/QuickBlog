import React from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { axios, setToken } = useAppContext()
  const navigate = useNavigate()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { data } = await axios.post('/api/admin/login', { email, password })

      if (data.success) {
        setToken(data.token)
        localStorage.setItem('token', data.token)
        axios.defaults.headers.common['Authorization'] = data.token
        toast.success('Login successful!')
        navigate('/admin')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      if (error.response) {
        // Server responded with error status
        toast.error(error.response.data.message || 'Login failed')
      } else if (error.request) {
        // Network error
        toast.error('Network error. Please check your connection.')
      } else {
        // Other error
        toast.error(error.message || 'An error occurred')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex items-center justify-center h-screen '>
      <div className='w-full max-w-sm p-8 border border-primary/30 shadow-xl shadow-primary/20 rounded-lg '>
        <div className='flex flex-col items-center gap-4 justify-center'>
          <div className='w-full py-6 text-center'>
            <h1 className='text-3xl font-bold'><span className='text-primary '>Admin</span> Login</h1>
            <p className='font-light'>Enter your credentials to access the admin panel</p>
          </div>
          <form onSubmit={handleSubmit} className='mt-6  w-full sm:max-w-md text-gray-600'>
            <div className='flex flex-col '>
              <label>Email</label>
              <input 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                type="email" 
                required 
                placeholder='Your Email-Id' 
                className='border-b-2 border-gray-300 p-2 outline-none mb-6'
                disabled={loading}
              />
            </div>
            <div className='flex flex-col '>
              <label>Password</label>
              <input 
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                type="password" 
                required 
                placeholder='Please enter your password' 
                className='border-b-2 border-gray-300 p-2 outline-none mb-6'
                disabled={loading}
              />
            </div>
            <button 
              type='submit' 
              className='w-full py-2 mt-2 bg-primary text-white font-semibold rounded-lg shadow cursor-pointer hover:bg-primary/90 transition disabled:opacity-50'
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login