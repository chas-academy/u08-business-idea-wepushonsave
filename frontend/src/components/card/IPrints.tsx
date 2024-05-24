export interface IPrintsAPIResponse {
  data: IPrintsData[];
}

export interface IPrintsData {
  image_uris: IImageUris;
}

interface IImageUris {
  border_crop: string;
}
