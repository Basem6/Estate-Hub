export default async function post({params}) {
    const { postid } = await params;
    console.log("params", params);
    return (
        <div className="">
            <h1>Post: {postid}</h1>
        </div>
    );
}