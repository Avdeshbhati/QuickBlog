import React, { useEffect } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'

const Dashboard = () => {
    const [dashboardData, setDashboardData] = React.useState({
        blogs: 10,
        comments: 5,
        drafts: 0,
        recentBlogs: []
    })
    const fetchDashBoardData = async () => {
        setDashboardData(dashboard_data)
    }
    useEffect(() => {
        fetchDashBoardData()
    }, [])
    return (
        <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
            <div className='flex flex-wrap gap-4'>
                <div className='flex items-center gap-4 bg-white p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                    <img src={assets.dashboard_icon_1} alt="" />
                    <div>
                        <p className='text-xl font-semibold text-gray-600'>{dashboardData.blogs}</p>
                        <p className='text-gray-400 font-light'>Blogs</p>
                    </div>
                </div>

                <div className='flex items-center gap-4 bg-white p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                    <img src={assets.dashboard_icon_2} alt="" />
                    <div>
                        <p className='text-xl font-semibold text-gray-600'>{dashboardData.comments}</p>
                        <p className='text-gray-400 font-light'>Comments</p>
                    </div>
                </div>

                <div className='flex items-center gap-4 bg-white p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                    <img src={assets.dashboard_icon_3} alt="" />
                    <div>
                        <p className='text-xl font-semibold text-gray-600'>{dashboardData.drafts}</p>
                        <p className='text-gray-400 font-light'>Drafts</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-2 p-2 m-2 mt-6 text-gray-600'>
                    <img src={assets.dashboard_icon_4} alt="" className="w-5 h-5" />
                    <p className='text-base font-medium'>Latest Blogs</p>
                </div>

                <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
                    <table className='w-full text-sm text-left text-gray-500'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                            <tr>
                                <th scope='col' className='px-2 py-2 text-center'>#</th>
                                <th scope='col' className='px-2 py-2'>Title</th>
                                <th scope='col' className='px-2 py-2 max-sm:hidden'>Date</th>
                                <th scope='col' className='px-2 py-2 max-sm:hidden'>Status</th>
                                <th scope='col' className='px-2 py-2 text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                              {dashboardData.recentBlogs.map((blog,index)=>{
                                 return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashBoardData} index={index+1}/>
                              }) }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
