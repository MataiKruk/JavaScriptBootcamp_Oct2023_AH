const cart = {
    items: [],

    addItem (name, price){
        this.items.push({name, price});
      },

    calculateTotal() {
        let total = 0;

        for(let i = 0; i<this.items.length; i++) {
            total += this.items[i].price;
        }
        return total;

        // for (const item of this.items) {
        //     total += item.price;
        //   }
        //   return total;
    }
}

cart.addItem("apples",5);
cart.addItem("bananas",2);
cart.addItem("cheese",6);
cart.addItem("pie",8);

cart.calculateTotal()