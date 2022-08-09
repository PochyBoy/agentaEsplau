import { v4 as uuid } from "uuid";

export default class Controller {

    static getAll = () => {
        const json = localStorage.getItem('infoContactes');
        if (!json) return [];
        try {
            return JSON.parse(json);
        } catch {n
            return [];
        }
    }

    static saveAll = (data) => {
        const json = JSON.stringify(data);
        localStorage.setItem('infoContactes', json);
    }

    static getById = (itemId) => Controller.getAll().find(el => el.id===itemId);
    
    static addItem = (item) => {
        item.id = uuid();
        const data = Controller.getAll();
        data.push(item);
        Controller.saveAll(data);
    }

    static replaceItem = (item) => {
        let data = Controller.getAll();
        data = data.map(el => {
            if (el.id === item.id){
                return item;
            }
            return el;
        });
        Controller.saveAll(data);
    }

    static deleteById = (itemId) => {
        let data = Controller.getAll();
        data = data.filter(el => el.id!==itemId);
        Controller.saveAll(data);
    }



}

