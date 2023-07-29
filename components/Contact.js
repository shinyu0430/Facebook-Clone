import React from "react";

const Contact = ({ data }) => {
  console.log(data)
  const { name, img } = data;

  return (
    <div className="mt-4">
      <div className="flex gap-3 items-center">
        <img
          className="h-[30px] w-[30px] rounded-full"
          src={img}
          alt={name}
        />
        <h1 className="font-medium">{name}</h1>
      </div>
    </div>
  );
};

export default Contact;
