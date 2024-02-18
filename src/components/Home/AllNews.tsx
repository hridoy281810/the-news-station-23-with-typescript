import React from 'react';
import { NewsItem } from '../../redux/slice/AllNewsDataSlice';
import NewsCard from './NewsCard';
type AllNewsProps = {
  allData: NewsItem[]
  filterData: NewsItem[]
}
const AllNews:React.FC<AllNewsProps> = ({allData,filterData}) => {
  return (
    <div className=''>
    
      {
        filterData.length > 0 ? <>
           {
        filterData.map((data)=> <NewsCard data={data} key={data.id} />)
      }
        </>:<>
        {
        allData.map((data)=> <NewsCard data={data} key={data.id} />)
      }
        </>
      }
     
    </div>
  );
};

export default AllNews;