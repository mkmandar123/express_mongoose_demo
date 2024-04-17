import {Schema, model, Model} from 'mongoose'

export interface IUser {
  firstName: string
  lastName: string
}

const schema: Schema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)
export const User: any = model('User', schema)
