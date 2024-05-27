import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await axios.get(
            'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=1fd3f0fa8363490ea9cae2fbcd43f3ce'
          );
          setArticles(response.data.articles);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchNews();
    }, []);
  
    if (loading) return <div className="text-center mt-5">Loading...</div>;
    if (error) return <div className="text-center mt-5">Error fetching news: {error.message}</div>;

    return (
        <div className="container pt-5">
        <h1 className="mb-4">Health News</h1>
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img src={article.urlToImage} className="card-img-top" alt={article.title} />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Articles;