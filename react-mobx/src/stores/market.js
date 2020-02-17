import { observable, action, computed } from 'mobx';

export default class MarketStore{

    @observable seletedItems =[];

    @action
    put =(name, price) =>{
        const exists = this.seletedItems.find(item => item.name === name);
        if(!exists){
            this.seletedItems.push({
                name,
                price,
                count : 1
            });
            return;
        }
        exists.count++;
    }

    @action
    take = name => {
        const itemToTake = this.seletedItems.find(item => item.name === name);
        itemToTake.count--;
        if(itemToTake.count === 0){
            this.seletedItems.remove(itemToTake);
        }
    }

    @action
    get total(){
        console.log('총합');
        return this.seletedItems.reduce((previous, current) => {
            return previous + current.price * current.count;
        },0);
    }
}
