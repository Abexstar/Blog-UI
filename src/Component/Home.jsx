import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import mainIMG from '../assets/mainIMG.png';
import NewsApi from './NewsApi';

const Home = () => {

  const [newsData, setNewsData] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchNewsData = async () => {
    try {
      setLoading(true)

      const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-11-17&sortBy=publishedAt&apiKey=API_KEY")
    } catch (error) {
      console.log(error);

    }
  }
  const fetchDataBackend = async () => {
    try {
      setLoading(true)

      const response = await fetch("http://localhost:5000/api/post/blog")
      const data = await response.json()
      setNewsData(data)

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    fetchDataBackend()
  }, [])

  const randomNumber = () => {
    const random = Math.round(Math.random() * 10) + 1
    return random
  }


  return (
    <div className='bg-[#181A2A]'>
      <Navbar />

      <div className='static'>
        <img className='ml-[130px] w-[1000px] h-[500]' src={mainIMG} alt="img" />
      </div>

      <div className='w-[450px] h-[250px] bg-[#242535] absolute bottom-0 left-0 ml-[180px] mt-[30px] rounded-lg shadow-2xl'>
        {loading && <h1 className='text-white'>Loading...</h1>}
        {newsData && newsData.blogs.map((article, id) => {
          const ran = randomNumber()
          const getId = id + 1
          if (getId === 1) {
            return (
              <div className='absolute bottom-0 left-0 ml-[180px] mt-[30px] rounded-lg' key={article.url}>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
                <p>{article.like}</p>
                <img src={article.image} target='_blank' />
              </div>
            )
          } else {
            return (
              <div className='text-white font-bold'>random value is == {ran} and id is === {getId}</div>
            )
          }
        })}
      </div>

      <div
        className='flex flex-col items-center mt-[150px] ml-[250px] w-[700px] h-[100px] bg-[#242535] text-[#696A75]'>
        <p className='mt-3'>Advertisement</p>
        <h1>You Can Place Ads</h1>
        <p>750x100</p>
      </div>

      <h1
        className='text-[24px] text-white font-bold font-sans ml-[120px] mt-[100px]'>
        Latest Post
      </h1>


      {/* <NewsApi /> */}

      <div className='grid grid-cols-3'>
        {newsData && newsData.blogs.slice(0, 9).map(article => (
          <div className=' bg-yellow-600  text-white left-0 ml-[180px] mt-[30px] rounded-lg' key={article.url}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p>{article.like}</p>
            <img src={article.image} target='_blank' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home