/**
 * Type Definition
 *
 * @Data = Object
 *  key: string
 *  value: string
 */
export type Data = {
  [key: string]: string;
};

/**
 * From Card.tsx
 * @CardProps = single card api response
 * data: Data = Array of key: value pairs
 */
export type CardProps = {
  data: Data;
};
