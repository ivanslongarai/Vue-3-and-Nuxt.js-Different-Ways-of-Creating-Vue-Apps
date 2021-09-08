import { Entity } from "@/interfaces/Entity";
import { Permission } from "./Permission";

export class Role implements Entity{
  id: number;
  name: string;
  permissions: Permission[];

  constructor(id: number = 0, name: string = "", permissions = []) {
    this.id = id;
    this.name = name;
    this.permissions = permissions;
  }
}
