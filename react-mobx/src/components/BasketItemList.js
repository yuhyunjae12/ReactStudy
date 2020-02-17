import React from 'react'
import BasketItem from './BasketItem';

const BasketItemList = ({ items, total, onTake }) => {
    const itemList = items.map(item => (
        <BasketItem
            name={item.name}
            price={item.price}
            count={item.count}
            key={item.key}
            onTake={onTake}
        />
    ));
    return (
        <div>
            {/* <BasketItem name="포카칩" price={1500} count={2}/>
            <BasketItem name="생수" price={850} count={1}/>
             */}
             {itemList}
            <hr/>
            <p>
            <b>총합: </b> {total}원
            </p>
        </div>
    )
}

export default inject(({ market }) => ({
    items: market.selectedItems,
    total: market.total,
    onTake: market.take,
  }))(observer(BasketItemList));