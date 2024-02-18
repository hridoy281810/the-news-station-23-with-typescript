import React, { useEffect, useState } from 'react';
import { NewsItem, fetchAllNewsData } from '../../redux/slice/AllNewsDataSlice';
import NewsByCategory from '../../components/Home/NewsByCategory';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Home/Header';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import AllNews from '../../components/Home/AllNews';

const Home: React.FC = () => {
    const button = [
        "National News",
        "Breaking News",
        "Regular News",
        "International News",
        "Sports",
        "Entertainment",
        "Culture",
        "Arts"
    ];

    const [filterData, setFilterData] = useState<NewsItem[]>([]);
    const allData = useAppSelector((state) => state.newsData.newsData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllNewsData());
    }, [dispatch]);

    const handleFilter = (category: string) => {
        const filter = allData.filter((data) => data.category === category);
        setFilterData(filter);
    };

    return (
        <div className='my-container px-4'>
            <Header />
            <Navbar />
            <div className='grid grid-cols-6 gap-4'>
                <div className='fixed'>
                    <NewsByCategory
                        button={button}
                        handleFilter={handleFilter}
                    />
                </div>
                <div className='col-start-2 col-span-4'>
                <AllNews filterData={filterData} allData={allData}/>
     
                </div>
                <div>sdfasdfa</div>
            </div>
        </div>
    );
};

export default Home;
