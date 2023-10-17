export interface IUser {
  picture: {
    large: string;
  };
  email: string;
  name: {
    first: string;
    last: string;
    title: string
  };
  phone: string;
  location: {
    city: string;
  };
}
