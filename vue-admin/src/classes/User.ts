import { Entity } from "@/interfaces/Entity";
import { Role } from "./Role";

export class User implements Entity {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: Role;
  permissions: string[];

  constructor(
    id: number = 0,
    first_name: string = "",
    last_name: string = "",
    email: string = "",
    role: Role = new Role(),
    permissions: string[] = []
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.role = role;
    this.permissions = permissions;
  }

  get name() {
    return this.first_name + " " + this.last_name;
  }
}
