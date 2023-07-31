import Link from "next/link"


const links = [{
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Posts',
    route: '/posts'
  },
]

export function Navigation(){
    return(
        <header className="rounded p-3 bg-indigo-300">
            <nav >
                <ul className="flex flex-row justify-center gap-8 text-white">
                    {links.map(({label ,route}) => (
                    <li key={route} className="hover:underline">
                        <Link href={route}>
                            {label}
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>
       </header>
    )
}
