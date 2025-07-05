import { ItemCard } from "../itemCard"

export const ItemsCardContainer = () => {
  return (
    <div className="grid grid-cols-3 max-w-fit max-h-[calc(100dvh-150px)] overflow-auto ">
      <ItemCard image="bg.jpg" price={100} title="card"/>
      <ItemCard image="bg.jpg" price={100} title="card"/>
      <ItemCard image="bg.jpg" price={100} title="card"/>
      <ItemCard image="bg.jpg" price={100} title="card"/>
      <ItemCard image="bg.jpg" price={100} title="card"/>
      <ItemCard image="bg.jpg" price={100} title="card"/>
      <ItemCard image="bg.jpg" price={100} title="card"/>
      <ItemCard image="bg.jpg" price={100} title="card"/>
      <ItemCard image="bg.jpg" price={100} title="card"/>
      <ItemCard image="bg.jpg" price={100} title="card"/>
      <ItemCard image="bg.jpg" price={100} title="card"/>
      <ItemCard image="bg.jpg" price={100} title="card"/>
    </div>
  )
}

