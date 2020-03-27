import Link from 'next/link'

export default () => (
    <nav>
        <ul>
            <li><Link href="/"><a>🧔🏻 Max Sierra</a></Link></li>
            <li><Link href="/about"><a>About me</a></Link></li>
            <li><Link href="/articles"><a>Articles</a></Link></li>
        </ul>
    </nav>
)