import React from "react";

function Comments() {
  return (
    <div>
      <div>
        <h1>Joseph</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
          tempora aspernatur illum voluptatem perferendis earum ipsam,
          architecto quisquam sunt, incidunt error corrupti! Corrupti vel
          voluptas iusto autem fugiat beatae nihil?
        </p>
      </div>

      <div className="p-4">
        <form className="flex flex-col my-8">
          <textarea
            name=""
            id=""
            cols="20"
            rows="4"
            className="border"
          ></textarea>
          <button className="border-black mt-3 ">submit</button>
        </form>
      </div>
    </div>
  );
}

export default Comments;
