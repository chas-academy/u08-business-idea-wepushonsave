import {ICardFaces} from '../components/card/CardsArray';

export const getImageFromCardFaces = (
  card_faces: ICardFaces[]
): string | undefined => {
  for (const face of card_faces) {
    if (face.image_uris && face.image_uris.border_crop) {
      return face.image_uris.border_crop;
    }
  }
  return undefined;
};
