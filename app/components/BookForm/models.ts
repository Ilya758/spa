export interface IBookTime {
  id: number;
  text: string;
}

export interface IBookFormSchema {
  firstName: string;
  lastName?: string;
  email: string;
  time: string;
  date: string;
  phone: string;
  message: string;
}
