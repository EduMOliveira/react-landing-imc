import "../styles/buttonStore.scss";

type ButtonProps = {
  img: string;
  text: string;
  onClick: () => void;
};

export function ButtonStore({ img, text, onClick }: ButtonProps) {
  return (
    <div className="buttonStore" onClick={onClick}>
      <img src={`${img}`} alt="" />
      <p>{text}</p>
    </div>
  );
}
