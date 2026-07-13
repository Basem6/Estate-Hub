import Post from "@/src/components/post";
export default function posts(){
    return (
        <div className="min-w-full min-h-screen bg-blue-400 flex items-center justify-center flex-col">
            <h1>Posts Page</h1>
            <div className="min-w-full mt-50 flex gap-7 min-h-100 bg-amber-300">
                <Post postid="1"></Post>
                <Post postid="2"></Post>
                <Post postid="3"></Post>
            </div>
        </div>
    );
}