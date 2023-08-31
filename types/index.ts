/**
 * @description Person type
 */
export type Person = {
  name: string;
  age: number;
  address: Address;
};

/**
 * @description Address type
 * @memberof Person
 */
export type Address = {
  street: string;
  city: string;
  country: string;
};
