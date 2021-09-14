import {getData,postData,deleteData} from './API.js'

const test = async ()=>{
	const arr=[1,2,3]
	const obj={id:2, a:1,b:2,c:3}

	const resPost= await postData(obj)


	// const resDelete= await deleteData(1)

	const resGet= await getData()


	console.log("post :=>> ",resPost)
	console.log("get :=>> ",resGet)
	// console.log("del :=>> ",resDelete)
}

export default test