import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Post } from './types/Post'

const FeedPage = () => {
	const [posts, setPosts] = useState<Post[]>([])
	const getPosts = async () => {
		const postUrl = 'http://localhost:3001/posts'

		const data = await axios.get(postUrl).then((res) => {
			console.log(res)
			setPosts(res.data)
		})
	}
	useEffect(() => {
		getPosts()
	}, [])
	return <div>FeedPage</div>
}

export default FeedPage
