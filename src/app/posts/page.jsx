import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostPage = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    cache: "no-store",
    // next: { revalidate: 5 },
  });
  const posts = await res.json();
  return (
    <div className="">
      <h1>this is posts page:{posts.length}</h1>
      <div className="grid grid-cols-3 container mx-auto gap-10">
        {posts.map((post) => (
          <div key={post.id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <Image
                width={400}
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
                height={100}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.description}</p>
              <p>Liked by: {post.like_count}</p>
              <div className="card-actions">
                <Link href={`/posts/${post.id}`}>
                  <button className="btn btn-primary">see more</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
