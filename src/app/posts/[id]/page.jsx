import Image from "next/image";
import Link from "next/link";
import React from "react";
export const dynamic = "force-dynamic";
const page = async ({ params }) => {
  console.log(params.id);
  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  // const res = await fetch(`http://localhost:5000/posts/1`);
  const post = await res.json();

  return (
    <div className="card  bg-base-100 shadow-xl container mx-auto">
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
          <Link href={`/posts`}>
            <button className="btn btn-primary ">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
