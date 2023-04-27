import { createRef, useEffect, useState } from 'react'
import { PostType } from './types/Post'
import './scss/Post.scss'
import axios from 'axios'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsChatDots } from 'react-icons/bs'

interface IPost {
	post: PostType
	key: String
}

const Post = (props: IPost) => {
	const { id, imageUrl, caption, ownerId } = props.post
	const [ownerUsername, setOwnerUsername] = useState<String>()

	const postImage = createRef<HTMLImageElement>()

	const likeButton = createRef<HTMLDivElement>()
	const [isLiked, setIsLiked] = useState<Boolean>(false)

	const getUsername = async () => {
		const usersUrl = `http://localhost:3001/users?id=${ownerId}`

		const ownerEmail = await axios.get(usersUrl).then((res) => {
			return res.data[0].email
		})
		const alteredEmail = ownerEmail.split('@')[0]
		setOwnerUsername(alteredEmail)
	}

	const manageImageSize = () => {
		if (postImage.current) {
			const image = postImage.current
			const imageWidth = image.width
			const imageHeight = image.height
			image.style.height = '100%'
			if (imageWidth > imageHeight) {
				image.style.width = '100%'
			}
		}
	}
	const documentLikePost = async () => {
		const likesUrl = 'http://localhost:3001/likes'

		const like = { postId: id, personWhoLikedId: 1 }

		const likePicture = await axios
			.post(likesUrl, like)
			.then((res) => console.log(res.status))
	}
	const likePost = (e: React.SyntheticEvent) => {
		const liked = !isLiked
		let target = e.target as SVGAElement
		if (liked) {
			target.style.color = 'red'
		} else {
			target.style.color = 'white'
		}
		setIsLiked(!isLiked)
	}

	useEffect(() => {
		manageImageSize()
		getUsername()
	}, [])
	return (
		<div className='post d-flex flex-column justify-content-center'>
			<header className='d-flex align-items-center px-1 gap-2'>
				<img
					className='profile-icon'
					src='https://res.cloudinary.com/dqd3dzadw/image/upload/v1682595809/user_c1kh1q.png'
					alt='pfp'
				/>
				<span>{ownerUsername}</span>
			</header>
			<main>
				<img ref={postImage} src={imageUrl.toString()} alt='' />
			</main>
			<footer className='py-2 d-flex flex-column gap-2'>
				<div className='interaction d-flex gap-3'>
					<div ref={likeButton}>
						<AiOutlineHeart className='icon' onClick={(e) => likePost(e)} />
					</div>
					<BsChatDots className='icon' />
				</div>
				<div className='caption d-flex gap-2'>
					<span className='caption-username'>{ownerUsername}</span>
					<span className='caption-content'>{caption}</span>
				</div>
			</footer>
		</div>
	)
}

export default Post
