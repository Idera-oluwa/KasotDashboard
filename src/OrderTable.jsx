import React from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import {
  Tooltip,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const orderArr = [
  {
    id: "#3065",
    product: "shoe print",
    status: "Answered",
    Date: "7/1/19",
  },
  {
    id: "#3066",
    product: "shoe print",
    status: "Answered",
    Date: "7/1/19",
  },
  {
    id: "#3067",
    product: "shoe print",
    status: "Pending",
    Date: "7/1/19",
  },
  {
    id: "#3068",
    product: "shoe print",
    status: "Pending",
    Date: "7/1/19",
  },
];

function orderStatus(status) {
  if (status === "Answered") {
    return (
      <div className="flex items-center gap-1 h-6 justify-center bg-green-100 text-green-800  text-ellipsis text-[14px] font-medium rounded-md leading-normal font-DarkerGrotesque p-2 w-fit">
        <span>Answered</span>
        <span className="w-1 h-1 rounded-[50%] bg-greentext-green-800"></span>
      </div>
    );
  } else if (status === "Pending") {
    return (
      <div className="flex items-center gap-1 h-6 justify-center bg-orange-100 text-orange-800  text-ellipsis text-[14px] font-medium  rounded-md leading-normal font-DarkerGrotesque p-2 w-fit">
        <span>Pending</span>
        <span className="w-1 h-1 rounded-[50%] bg-Accent/Warning/Warning-800"></span>
      </div>
    );
  } else if (status === "Inactive") {
    return (
      <div className="flex items-center gap-1 h-6 justify-center rounded-md bg-red-100 text-red-800  text-ellipsis text-[14px] font-medium  leading-normal font-DarkerGrotesque p-2 w-fit">
        <span>Live</span>
        <span className="w-1 h-1 rounded-[50%] bg-Accent/Danger/Danger-800"></span>
      </div>
    );
  }
}

const OrderTable = () => {
  const [active, setActive] = useState(1);

  const next = () => {
    if (active === orderArr.length - 1) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };
  return (
    <div>
      <section className="mt-10 w-full">
        <h3 className="font-bold text-xl">All Orders</h3>
        <div className="mt-10 w-full bg-white rounded-lg overflow-x-auto custom-overflow">
          <table className="w-full bg-white whitespace-no-wrap rounded-t-lg overflow-hidden">
            <>
              {" "}
              <thead className="bg-Gray/50 text-black">
                <tr className="text-left border-b border-gray-200 ">
                  <th className="py-3 px-6  capitalize text-[14px] font-bold  leading-normal font-DarkerGrotesque">
                    <span>Order ID</span>
                  </th>
                  <th className="py-3 px-6  capitalize text-[14px] font-bold  leading-normal font-DarkerGrotesque">
                    product
                  </th>
                  <th className="py-3 px-6  capitalize text-[14px] font-bold  leading-normal font-DarkerGrotesque">
                    Status
                  </th>
                  <th className="py-3 px-6  capitalize text-[14px] font-bold  leading-normal font-DarkerGrotesque ">
                    Date
                  </th>
                  <th className="py-3 px-6 capitalize text-[14px] font-bold  leading-normal font-DarkerGrotesque ">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {orderArr.map((elem, index) => {
                  console.log(elem.product);
                  const { id, product, status, Date } = elem;
                  return (
                    <tr
                      key={index}
                      className="tableRow text-black border-b border-gray-200"
                    >
                      <td className="py-4 px-6 text-[16px] font-semibold text-Gray/900   leading-normal font-DarkerGrotesque">
                        {id}
                      </td>
                      <td className="py-4 px-6 text-[16px] font-medium   leading-normal font-DarkerGrotesque">
                        {product}
                      </td>
                      <td className="py-4 px-6">{orderStatus(status)}</td>
                      <td className="py-4 px-6 text-[16px] font-medium   leading-normal font-DarkerGrotesque">
                        {Date}
                      </td>
                      <td className="py-4 px-6 w-[224px]">
                        <div className="flex items-center gap-5 ">
                          <Tooltip
                            content="View Details"
                            className="text-gray-500 mt-[5px]"
                          >
                            <Button className="cursor-pointer w-5 h-5 p-0">
                              <AiOutlineEye className="text-black w-5 h-5" />
                            </Button>
                          </Tooltip>
                          <Tooltip
                            content="Delete"
                            className="text-gray-500 mt-[5px]"
                          >
                            <Button className="cursor-pointer w-5 h-5 p-0">
                              <AiOutlineDelete className="text-black w-5 h-5" />
                            </Button>
                          </Tooltip>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </>
          </table>
          <div className="flex items-center gap-8 h-[72px] justify-center">
            <IconButton
              size="sm"
              variant="outlined"
              onClick={prev}
              disabled={active === 1}
              className="flex justify-center items-center"
            >
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            <Typography color="gray" className="font-normal">
              Page <strong className="text-gray-900">{active}</strong> of{" "}
              <strong className="text-gray-900">{orderArr.length - 1}</strong>
            </Typography>
            <IconButton
              size="sm"
              variant="outlined"
              onClick={next}
              disabled={active === 10}
              className="flex justify-center items-center"
            >
              <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderTable;