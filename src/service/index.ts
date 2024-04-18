import {User} from "@/models/user.model";
import ApiError from "@/utils/ApiError";

export async function createUserInDB(firstName: string, lastName: string): Promise<boolean> {
  try {
    const user = new User({ firstName, lastName })
    await user.save();
    return true;
  } catch (e) {
    console.log('>>>>>>', e);
    return false;
  }
}
