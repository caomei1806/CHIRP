import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios"
import { stat } from "fs";
import { PostType } from "../../components/types/Post";

type PostState = {
	posts: PostType[],
	newImageUrl: String
}
const initialState: PostState = {
	posts: [],
	newImageUrl: ''
}

export const PostSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		uploadImage: (state, action: PayloadAction<{imageUrl: String}>) => {
			const newP = axios.get('')
			state.newImageUrl = ''
		}
	}

})
