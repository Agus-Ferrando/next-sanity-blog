import Link from "next/link"
import Image from "next/image"
import { client } from "../../../lib/sanity"


async function fetchComments(slug){
    const query = `*[_type == "post" && slug.current == "${slug}"]`;

    const data = await client.fetch(query);

    return data
}


export default async function Post({params}){
    const {slug} = params
    const post = await fetchComments(slug)
    const comments = post.find(el => el.comments)    
    console.log(comments)

    return (
        <ul className="text-sm bg-gray-200 p-5 w-3/5">
            {comments.comments.map(comment=> (
                <li key={comment.name} className="flex flex-row gap-3 mb-5 items-center">
                    <Image 
                        src={comment.Image}  
                        alt={comment.name}
                        width={30}
                        height={30}
                    />
                    <span>
                        <h4 className="font-bold underline">{comment.name}</h4>
                        <p>{comment.content}</p>
                    </span>    
                </li>
            ))}
        </ul>
    )
  
}