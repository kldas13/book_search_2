import React, { useState } from 'react'
import './Card.css'

function Card(book) {
    const [over, setOver] = useState(false)
    // const book_details = book;
    // console.log(JSON.stringify(book_details.value.volumeInfo.imageLinks));
    const handleHover = (e) => {
        e.preventDefault();
        setOver(prev=>true);

    }
    const handleOver = (e) => {
        e.preventDefault();
        setOver(prev => false);

    }
    return (
        <div>
            <div className="card_container">
                {/* {`${book.value.volumeInfo.title}`} */}
                <div className="image_container" onMouseOver={handleHover} onMouseOut={handleOver}>
                    <a href={`${book.value.volumeInfo.infoLink}`} className='links' >
                        <img src={`${book.value.volumeInfo.imageLinks.thumbnail}`} className='selected_image'  alt="thumbnail" />
                    </a>
                    {over ?
                        <p style={{ width: "150px" }} className='details'>
                            {`${book.value.volumeInfo.title}`}
                            <br>
                            </br>
                            {`Author:- ${book.value.volumeInfo.authors[0]}`}
                            <br>
                            </br>
                        
                            {`PageCount:- ${book.value.volumeInfo.pageCount}`}
                            <br>
                            </br>
    
                            {`Rating- ${book.value.volumeInfo.averageRating}/5`}
                        </p> : null}
                </div>
                {/* {`${book.value.volumeInfo.imageLinks.thumbnail}`} */}
            </div>
        </div>


    )
}

export default Card