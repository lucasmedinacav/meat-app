import { Injectable } from '@angular/core';

import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Injectable()
export class ShoppingCartService {
    items: CartItem[] = [];

    clear() {
        this.items = [];
    }

    addItem(item: MenuItem) {
        let foundItem =
            this.items.find(mItem => mItem.menuItem.id === item.id);
        if (foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.items.push(new CartItem(item));
        }
    }

    increaseQty(item: CartItem) {
        item.quantity++;
    }

    decreaseQty(item: CartItem) {
        item.quantity--;
        if (item.quantity === 0) {
            this.removeItem(item);
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    total(): number {
        return this.items
            .map(item => item.value()) // GERA UM ARRAY DE NUMBERS COM OS VALORES DOS PRODUTOS
            .reduce((prev, value) => prev + value, 0); // SOMA O ATUAL NO PREV(ANTERIOR) OU SEJA SOMA TODOS OS VALORES DO ARRAY DE NUMBERS
    }
}
