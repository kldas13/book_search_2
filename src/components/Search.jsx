import React, { useState, useEffect } from 'react'
import Card from './Card';
import './Search.css'

function Search() {
    const [search, setSearch] = useState('')
    const [didSearch, setDidSearch] = useState(false);
    const [output, setOutput] = useState([]);
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(prev => e.target.value)
        // console.log(search);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDidSearch(prev => true);
        // console.log(search);
    }

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
            .then(response => response.json())
            .then(data => {
                setOutput(data.items);
                // console.log(data.items)
            });


        //   return () => {

        //   }
    }, [search, didSearch])


    return (
        <div>
            <div className="search_field">
                <input type="search" name="search_bar" id="search_bar"
                    onChange={handleSearch}
                    placeholder='Search for a Book' />
                <button onClick={handleSubmit}>
                    <img src="search-icon.png"
                        alt="search icon"
                        id='icon'
                        style={{ width: '10px' }} />
                </button>
                {didSearch && search.length!==0 ? <div className="display" >

                    {
                        output.map((book) => <Card key={book.id} value={book} />)
                    }
                </div> : null
                }
            </div>
        </div>
    )
}

export default Search