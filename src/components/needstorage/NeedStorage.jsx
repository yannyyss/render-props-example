import React, {useEffect, useState} from 'react'

// eslint-disable-next-line react/prop-types
function NeedStorage({load, save, remove}) {

    const [userName, setUserName] = useState('')
    const [favoriteMovie, setFavoriteMovie] = useState('')
    const [isFetching, setIsFetching] = useState(false)

    const saveData = () => {
        setIsFetching(true)
        save('userName', 'Mike');
        save('favoriteMovie', 'Grease');
        setIsFetching(false)
    }

    const clean = () => {
        remove('favoriteMovie')
        remove('userName')
        setUserName(false)
        setFavoriteMovie(false)
    }

    const recover = () => {
        saveData()
        const movie = load('favoriteMovie')
        const name = load('userName')
        setUserName(name)
        setFavoriteMovie(movie)
    }

    useEffect(() => {
        const movie = load('favoriteMovie')
        const name = load('userName')

        if(!name || !movie && !isFetching) {
            saveData()
        }
    },[isFetching,load])

    return (
        <>
            {isFetching ?? <div>Loading ...</div> }
            {userName && favoriteMovie && !isFetching ? <p>Local Storage Saved</p> : <p>Local Storage Cleaned</p>}
            {userName && favoriteMovie && !isFetching ? <div>My username is {userName}, and I love to watch {favoriteMovie}.</div> : null }
            {userName && favoriteMovie && !isFetching ? <button onClick={clean}>remove</button> : <button onClick={recover}>recover</button>}
        </>
    )
}

export default NeedStorage