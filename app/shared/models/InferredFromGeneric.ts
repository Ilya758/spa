export type InferredFromGeneric<T> = Record<keyof T, T[keyof T]>;
