import { useGetproductsQuery } from "../../../api/apiSlice";
import { Rating } from "@mui/material";
import Header from "../../reuseableComponents/header/header.component";
import Loader from "../../loader/loader.component";
import useLoading from "../../../hooks/useLoadingHook";
import { Button } from "../../ui/button";
import { useState } from "react";

interface productsItems {
  category: string;
  name: string;
  price: number;
  rating: number;
  description: string;
  id: number;
  supply: number;
  yearlysalestotal: number;
  yearlytotalsoldunits: number;
}

const Products: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
  const [expandedDivs, setExpandedDivs] = useState<number[]>([]);

  const handleSeeMoreClick = (index: number) => {
    setExpandedDivs((prevExpandedDivs) =>
      prevExpandedDivs.includes(index)
        ? prevExpandedDivs.filter((i) => i !== index)
        : [...prevExpandedDivs, index]
    );
  };
  const heading = "Products";
  const subHeading = "See your list of Products";
  const { data, isLoading } = useGetproductsQuery();
  const [internalLoading] = useLoading(isLoading, 2000);
  

  return (
    <div className="scrollbarToHide flex flex-col gap-5 h-[78vh] w-[90vw] p-[25px] bg-white rounded-3xl overflow-y-auto">
      <div>
        <Header heading={heading} subHeading={subHeading} />
      </div>
      <div className=" flex justify-center  h-[60vh]">
        {internalLoading ? (
          <div className=" flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-3 ">
            {data.map(
              (
                {
                  category,
                  name,
                  price,
                  rating,
                  description,
                  id,
                  supply,
                  yearlysalestotal,
                  yearlytotalsoldunits,
                }: productsItems,
                index: number
              ) => (
                <div
                  key={index}
                  className={`flex flex-col justify-between md:w-[25vw] xl:w-[20vw] bg-[#1d3557] rounded-xl p-[15px] text-[#fff] hover:scale-105 transition duration-500 ${
                    expandedDivs.includes(index) ? "h-auto" : "h-[14rem]"
                  }`}
                >
                  <div>
                    <p className=" text-[#e5e5e5]">{category}</p>
                    <h3 className=" pt-2">{name}</h3>
                    <p className=" text-[12px]">{`$ ${price}`}</p>
                    <Rating className=" pt-3" value={Number(rating)} />
                    <p className=" text-[12px]">{description}</p>
                    <div className=" flex "></div>
                  </div>
                  <div>
                    <Button
                      onClick={() => handleSeeMoreClick(index)}
                      className=" mt-1"
                    >
                      See more!
                    </Button>
                  </div>
                  <div>
                    {expandedDivs.includes(index) && (
                      <div className=" mt-1">
                        <p className=" text-[11px] text-[#e5e5e5]">{`id: ${id}`}</p>
                        <p className=" text-[11px] text-[#e5e5e5]">{`Supply Left: ${supply}`}</p>
                        <p className=" text-[11px] text-[#e5e5e5]">{`Yearly sales this year: ${yearlysalestotal}`}</p>
                        <p className=" text-[11px] text-[#e5e5e5]">{`Yearly units this year: ${yearlytotalsoldunits}`}</p>
                      </div>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
