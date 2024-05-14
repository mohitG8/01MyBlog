import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {

return (
  <Link to={`/post/${$id}`} className='block w-64 h-76'>
    <div className='w-full h-full bg-gray-100 rounded-xl p-4 flex flex-col justify-between'>
      <div className='mb-4'>
        <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='w-full h-48 object-cover rounded-xl' />
        <h2 className='text-xl font-bold mt-2'>{title}</h2>
      </div>
    </div>
  </Link>
)
}

export default PostCard