import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const RenderArrays = () => {
    interface lists {
        message: string,
        done: boolean
    }

  const myList = [
    { message: "This is first item", done: false },
    { message: "This is second item", done: false },
    { message: "This is third item", done: false },
  ];

  const [listItems, setListItems] = useState(myList as lists[])

  return (<div>
      <ul>
      {listItems.map((item)=> (
          <li>{item.message}</li>
      ))}
      </ul>
  </div>);
};

export default RenderArrays;
