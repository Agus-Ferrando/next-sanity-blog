import Link from "next/link"
import { client } from "../../lib/sanity"
import Image from "next/image"



async function fetchSinglePost(slug) {
    const query = `*[_type == "post" && slug.current == "${slug}" ]`;
    
    const data = await client.fetch(query);

    return data
}


export default async function Post({children, params}){
    const {slug} = params
    const post = await fetchSinglePost(slug)
    console.log(slug)
    console.log(post)

    return post.map(el => (
        <article className="flex flex-col items-center" key={el.id}>
            
            <h1 className="uppercase text-indigo-400 text-xl">{el.title}</h1>
            <p className="w-3/5 text-justify p-6">{el.content}</p>
            <Image 
                    src={el.image}  
                    alt={el.title}
                    width={350}
                    height={350}
            />
            <Link href={`/posts/${el.slug.current}/comments`}>
                <button className="m-6 border rounded-xl p-2 text-center hover:bg-indigo-400 hover:text-white">
                    Ver comentarios
                </button>
            </Link>
            {children}
        </article>
    ))
        
    
}