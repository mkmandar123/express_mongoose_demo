import { createUserInDB } from "../service";
import { Request, Response } from 'express';

export async function handleTestRoute (req: Request, res: Response, next: () => void) {
  try {
    console.log('>>>>>', req.params);
    console.log('>>>>>', req.body);
    await createUserInDB(req.params.firstName, req.params.lastName);
    res.send(`Wokring..!!!`);
  } catch (e) {
    next();
  }
}

export function handleAnotherRoute (req: Express.Request, res: Express.Response, next: () => void) {

}
