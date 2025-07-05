import React from "react";
import { Button } from "../button";

interface ItemCardType {
  image: string;
  title: string;
  price: string | number;
}

export const ItemCard = ({ image, price, title }: ItemCardType) => {
  const [isAdd, setIsAdd] = React.useState<boolean>(false);
  const [quantity, setQuantity] = React.useState<number>(0);
  function handleDecrease(){
    if(quantity > 0){
      setQuantity(quantity-1);
    }
  }
  function handleIncrease(){
    if(quantity < 99){
      setQuantity(quantity+1);
    }
  }
  return (
    <div className="border px-1 pb-3 pt-1 max-w-[12rem] shadow-2xl border-gray-400 rounded-lg flex flex-col gap-y-1 items-center">
      <img src={image} alt="bg" className="rounded-t-lg" />
      <h1 className="text-xl">{title}</h1>
      <h3 className="text-lg">{price}</h3>
      {isAdd ? (
        <div className="flex items-center gap-x-3 border-2 px-2 py-1 rounded-lg">
          <Button className="cursor-pointer" onClick={handleDecrease}>
            <img src="minus.png" alt="minus" height="20" width="20" />
          </Button>
          <p>{quantity}</p>
          <Button className="cursor-pointer" onClick={handleIncrease}>
            <img width="20" height="20" src="/plus.png" alt="plus" />
          </Button>
        </div>
      ) : (
        <Button
          className="bg-green-500 px-3 py-1 rounded-lg cursor-pointer text-lg text-white font-semibold"
          onClick={() => setIsAdd(true)}
        >
          Add
        </Button>
      )}
    </div>
  );
};
