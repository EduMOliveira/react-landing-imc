import "../styles/hamburger.scss";

type HamProps = {
  className: string;
  onPress: () => void;
};

export function Hamburger({ className, onPress }: HamProps) {
  return (
    <div className={className} onClick={onPress} id="ham">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
