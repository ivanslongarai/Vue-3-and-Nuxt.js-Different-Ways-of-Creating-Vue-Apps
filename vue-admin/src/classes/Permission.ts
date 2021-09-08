import { Entity } from "@/interfaces/Entity";

export class Permission implements Entity {
    id: number;
    name: string;

    constructor(id: number = 0 , name: string = '') {
       this.id = id;
       this.name = name;
    }
}