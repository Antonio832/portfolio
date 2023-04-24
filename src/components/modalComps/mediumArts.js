import React, { useEffect, useState } from 'react';
import '../../styles/modalStyles/modal.css'
import '../../styles/modalStyles/mediumArt.css'

function MediumArts() {

    const [arts, setArts] = useState([])

    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@antoniomedina832";
    
    useEffect(()=>{
        fetch(mediumURL).then(res=>{
            res.json().then(resJ=>{
                let newArts =  resJ.items.map(article => ({
                    title: article.title,
                    url: article.link,
                    date: new Date(article.pubDate),
                    thumbNail: article.thumbnail,
                    tags: article.categories
                }));
                
                setArts(newArts)
            })
        })
    },[])

    return(
        <>
            <div className='mediumArticles'>
                {arts.map((art)=> 
                    <a href={art.url} target="_blank" rel="noreferrer" className='url'>
                        <div className='mediumArticle' data-back={art.thumbNail}>
                            <img src={`${art.thumbNail}`} alt='thumbnail' className='thumb'/>
                            <div className='mediumInfo'>
                                <p style={{fontSize: '22px'}}>
                                    {art.title}
                                </p>
                                <div className='tags'>
                                    {art.tags.map(tag=>
                                        <span className='tag'>{tag}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </a>

                )}
            </div>
        </>
    )
}

export default MediumArts;