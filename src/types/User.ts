export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

export type User = {
  id: number;
  name: string;
  birthdate: string;
  email: string;
  gender: string;
  address: string;
  phone: string;
  website: string;
};
