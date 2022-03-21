import { InputProps } from "../../interfaces/InputProps.interface";

function Input(props: InputProps) {
  return (
    <div className="flex justify-between mt-4">
      <label htmlFor="input" className="mr-4">
        {props.label}:{" "}
      </label>
      {props.type !== "textarea" ? (
        <input
          type={props.type}
          name="input"
          className="h-10 w-full border border-gray-300 p-2 outline-none"
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
        />
      ) : (
        <textarea
          name="input"
          className="border border-gray-300 w-full p-2 outline-none resize-none h-36"
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
        ></textarea>
      )}
    </div>
  );
}

export default Input;
