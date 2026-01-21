import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string,
  quantity: number,
}

const itemsInCart: ItemInCart[] = [
  {
    productName: 'Mesa',
    quantity: 1
  },
  {
    productName: 'Vaso',
    quantity: 1
  },
  {
    productName: 'Tenedor',
    quantity: 1
  },
  {
    productName: 'Cuchillo',
    quantity: 1
  },
  {
    productName: 'Cuchara',
    quantity: 1
  },
]

export function FirstStepsApp (){
    return (
        <>
            <h1>Carrito de compras</h1>
            {
                itemsInCart.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity}/>
                ))
            }
        </>   
    )
}