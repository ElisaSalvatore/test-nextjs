import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1) //move forward or backward into pages history (<- ->)
            router.push("/") //after few seconds there is a redirect into specificated page
        }, 3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>
                Go back to the <Link href="/"><a>Homepage</a></Link>
            </p>
        </div>
    );
}

export default NotFoundPage;