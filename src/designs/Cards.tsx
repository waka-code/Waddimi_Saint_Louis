import { CardStyleProps } from "../web/Types/Types";

const CardItem: React.FC<{
  imgSrc: string;
  pictureMeDiv: React.CSSProperties;
  pictureMeDivImg: React.CSSProperties;
}> = ({ pictureMeDivImg, pictureMeDiv, imgSrc }) => (
  <div style={pictureMeDiv}>
    <img src={imgSrc} alt="my" style={pictureMeDivImg}/>
    <div className="PictureMeDescription">
      <span className="PictureMeDescriptionSpan">Aquí va la descripción</span>
    </div>
  </div>
);

export function Cards({
  cardImageStyle,
  imageMetadata,
  imageContainerStyle,
  imageStyle,
}: CardStyleProps) {
  return (
    <div style={cardImageStyle}>
      {Object.keys(imageMetadata).map((key, idx) => (
        <CardItem
          key={idx}
          pictureMeDivImg={imageStyle}
          pictureMeDiv={imageContainerStyle}
          imgSrc={imageMetadata[key as keyof typeof imageMetadata]}
        />
      ))}
    </div>
  );
}
