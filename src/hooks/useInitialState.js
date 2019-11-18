import { useState, useEffect } from 'react'

export default function useInitialState(API){
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] })

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(API)
                const data = await response.json()
                setVideos(data)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()

    }, [])
    return videos
}