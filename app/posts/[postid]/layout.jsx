export const metadata = {
title: "Posts",
description: "Many posts are here",
};
export default function PostLayout({children}) {
    return (
        <div className="min-w-full min-h-screen flex-col flex gap-1.5 items-center justify-center">
            <div className="font-bold text-5xl">
                THis Post
            </div>
            {children}
        </div>
    );
}