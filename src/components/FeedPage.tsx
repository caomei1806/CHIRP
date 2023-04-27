import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from './Post'
import { PostType } from './types/Post'

const FeedPage = () => {
	const [posts, setPosts] = useState<PostType[]>([])
	const getPosts = async () => {
		const postUrl = 'http://localhost:3001/posts'

		const data = await axios.get(postUrl).then((res) => {
			setPosts(res.data)
		})
	}
	useEffect(() => {
		getPosts()
	}, [])
	return (
		<div className='posts w-100 d-flex flex-column align-items-center'>
			{posts &&
				posts.map((post, index) => {
					return <Post post={post} key={`post-${index}`} />
				})}
		</div>
	)
}

export default FeedPage
