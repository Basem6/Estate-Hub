import Link from "next/link";
export default function Post({postid}) {
    return (
        <>
            <Link href={`/posts/${postid}`} className="px-4 py-2 text-lg font-semibold text-gray-800 hover:text-gray-600">     
                <div className="size-20 rounded-2xl p-5 bg-red-500">
                    post {postid}
                </div>
            </Link>
        </>
    );
}