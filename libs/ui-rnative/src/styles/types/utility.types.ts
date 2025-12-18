type NegativeNumber<T extends number> = T & { __negative: true };

export type AddEntriesNegative<T extends Record<string, number>> = T & {
  [K in keyof T as `-${string & K}`]: NegativeNumber<T[K]>;
};
