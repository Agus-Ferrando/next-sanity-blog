import { LikeButton } from "./LikeButton"
import Link from "next/link"
import { client } from "../lib/sanity"

const fetchPosts = async() => {
    const query = `*[_type == "post"]`;

    const data = await client.fetch(query);

    return data
}

export default async function ListofPosts(){
    const posts = await fetchPosts()


    return posts.map(post => (
        <article key={post.id} className="flex flex-row items-center justify-center">
            <div className="p-3 mr-4 border w-3/4 ">
                <Link href='/posts/[slug]' as={`posts/${post.slug.current}`}>
                    <h2 className="uppercase text-indigo-400">{post.title}</h2>
                    <p> Autor: {post.author}</p>
                </Link>
            </div>
            <LikeButton id={post.id}/>
            
        </article>
    ))
}