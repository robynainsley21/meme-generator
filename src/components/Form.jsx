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
                <input type="text" placeholder={meme.topText}/>
                <input type="text" placeholder={meme.bottomText}/>                
            </form>
            <button onClick={memeHandler}>Get a new meme image 🖼</button>     
            <img src={meme.randomImage} className='meme-img'/>       
        </div>   
    )
}

export default Form