export default function PostsLayout({ children }) {
    return(
        <div>
            <h1 className="text-center text-black-500 text-xl p-6"> &bull; POSTS &bull; </h1>
            {children}
        </div>
    )
}