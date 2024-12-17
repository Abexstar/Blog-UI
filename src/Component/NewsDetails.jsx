import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const NewsDetails = () => {
  const [news, setNews] = useState({
    image: "",
    title: ""
  });
  const {id} = useParams()

  async function gettingNews(){
    try{
      const request = await fetch(`https://newsapi.org/news/${id}`);
      const data = await request.json();
      setNews(data);
      console.log(data);
    } catch (err){
      console.log(err);
    }
  }

  useEffect(() => {
    gettingNews()
  },[])
  
  return (
    <div>
      <div>
        <img src={news?.image} />
      </div>
      <div>
        <p className="font-bold text-3xl">{news?.title}</p>
      </div>
    </div>
  )
}

export default ProductDetails;