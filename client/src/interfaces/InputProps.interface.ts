export interface InputProps {
  label: string;
  type: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
