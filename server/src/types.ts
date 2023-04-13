import {
  Model,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";


export interface UserViewModel {
  id: number
  email: string
}

export interface UserModel
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  created_by: number;
  updated_by: CreationOptional<number>;
  createdAt: Date;
  updatedAt: CreationOptional<Date>;
}

export interface Error {
  status? :number,
  message?: string
}