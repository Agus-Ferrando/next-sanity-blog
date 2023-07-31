import ListofPosts from "./ListOfPosts";
import { Suspense } from "react";

export default async function Posts(){
    
    return(
        <section>
            <Suspense fallback={<p>Cargando posts..</p>}>
                <ListofPosts />
            </Suspense>
        </section>
    )
}