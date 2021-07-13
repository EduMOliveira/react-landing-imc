import { InputHTMLAttributes } from "react";
import "../styles/input.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return <input className="input" {...props} />;
}
