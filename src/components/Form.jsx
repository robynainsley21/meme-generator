import React from 'react'
import memesData from '../memesData'

const Form = () => {
    //state variables always look like this
    const [meme, setMeme] = React.useState(
        {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg'
        }
    )

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    /**
     * Function for form inputs
     */
    const handleChange = (event) => {
        const {name, value} = event.target 

        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    /**
     * Function for button to generate new meme
     * Uses the same state but only the url is changed
     */
    const memeHandler = () => {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.round((Math.random() * memesArray.length) + 1)
        const url = memesArray[randomNumber].url
        setMeme(prevState => ({
                ...prevState,
                randomImage: url
            })
        )
    }

    return (
        <div className="meme-section">
            <form className="form">
                <input 
                    type="text" 
                    placeholder="Top text"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />

                <input 
                    type="text" 
                    placeholder="Bottom text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />                
            </form>
            <button onClick={memeHandler}>Get a new meme image 🖼</button>    
            <div className='meme'>
                <img src={meme.randomImage} className='meme-img'/> 
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div> 
                      
        </div>   
    )
}

export default Form