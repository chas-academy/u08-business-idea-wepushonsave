/**
 * Type Definition
 *
 * @ObjectData = Object
 *  key: string
 *  value: string
 */
type ObjectData = {
  [key: string]: string;
};

/**
 * @ObjectDataProps
 */
type ObjectDataProps = {
  objectData: ObjectData;
};

export const objectConverter = (objectData: any) => {
  const arrayData = Object.entries(objectData);

  return arrayData;
};
