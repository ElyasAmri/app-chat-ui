import {User} from "../types";

export default function useUser(user : string) : User{
  return {name: user, id: user[user.length - 1].toString()}
}
