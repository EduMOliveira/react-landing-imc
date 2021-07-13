import "../styles/feature.scss";

type FeatureProps = {
  img: string;
  title: string;
  text: string;
};

export function Feature({ img, title, text }: FeatureProps) {
  return (
    <div className="feature">
      <img src={`${img}`} alt="" />
      <strong>{title}</strong>
      <p>{text}</p>
    </div>
  );
}
