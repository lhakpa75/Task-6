import React from "react";

function Content() {
  return (
    <>
      <h1 className="font-extrabold p-5">Title</h1>
      <p className="font-mono pl-10 pt-0 pb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iure sint
        similique magni provident eum quaerat alias ea, vero blanditiis minus
        praesentium dicta quas sequi voluptates facere ad eaque magnam.
      </p>
      <a
        href="https://www.google.com"
        className="underline hover:bg-blue-800 hover:text-white"
      >
        {" "}
        Link{" "}
      </a>
    </>
  );
}

export default Content;
