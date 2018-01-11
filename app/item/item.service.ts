import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        // { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
        // { id: 3, name: "Piqué", role: "Defender" },
        // { id: 4, name: "I. Rakitic", role: "Midfielder" },
        // { id: 5, name: "Sergio", role: "Midfielder" },
        // { id: 6, name: "Denis Suárez", role: "Midfielder" },
        // { id: 7, name: "Arda", role: "Midfielder" },
        // { id: 8, name: "A. Iniesta", role: "Midfielder" },
        // { id: 9, name: "Suárez", role: "Forward" },
        // { id: 10, name: "Messi", role: "Forward" },
        // { id: 11, name: "Neymar", role: "Forward" },
        // { id: 12, name: "Rafinha", role: "Midfielder" },
        // { id: 13, name: "Cillessen", role: "Goalkeeper" },
        // { id: 14, name: "Mascherano", role: "Defender" },
        // { id: 17, name: "Paco Alcácer", role: "Forward" },
       
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
