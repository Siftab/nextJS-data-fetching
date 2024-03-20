import Image from "next/image";
import React from "react";

const PostPage = async () => {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();
  return (
    <div className="">
      <h1>this is post page:{posts.length}</h1>
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
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
