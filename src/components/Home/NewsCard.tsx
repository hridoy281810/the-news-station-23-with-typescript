import React from 'react';
import { NewsItem } from '../../redux/slice/AllNewsDataSlice';
import { GoShareAndroid } from 'react-icons/go';
import { CiBookmark } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { MdRemoveRedEye } from 'react-icons/md';
type NewsCardProps = {
  data: NewsItem
}
const NewsCard: React.FC<NewsCardProps> = ({data}) => {
  const {id,
    title,
    category,
    author,
    author_url,
    date,
    description,
    content,
    image_url,
    rating,
    total_views,} = data
  return (
    <div className='my-4 shadow rounded-lg'>
    {/* author info */}
<div className='bg-gray-200 p-3 rounded-t-lg'>
    <div className='flex justify-between'>
    <div className='flex items-center gap-3'>
<div className="avatar">
<div className="w-10 rounded-full">
<img src={author_url} />
</div>
</div>
<div>
<p className='text-gray-800  font-semibold'>{author}</p>
<p className='text-[12px] text-gray-500'>{date}</p>
</div>
</div>
<div>
<GoShareAndroid className='mb-2' size={24}/>
<CiBookmark size={24}/>
</div>
</div>
</div>
<div className='px-6 py-4'>
  <h2 className='text-xl font-bold text-gray-800'>{title}</h2>
  <img className='rounded-lg w-full h-[350px] my-6' src={image_url} alt="news image" />
  <p className='tex'>
  {content}
  </p>
  <p>Read More</p>
  <div className='divider'></div>
  <div className='flex justify-between'>
    <div className='flex gap-1 items-center'>
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <p className='tex'>{rating}</p>
    </div>
   <div className='flex  items-center gap-2'>
   <MdRemoveRedEye size={20} className='tex' />
    <p className='tex'>{total_views}</p>
   </div>
  </div>
</div>

</div>
  );
};

export default NewsCard;