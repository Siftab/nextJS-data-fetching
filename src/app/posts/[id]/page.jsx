import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  const post = await res.json();
  console.log(post);

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto ">
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
            <button className="btn btn-primary">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
