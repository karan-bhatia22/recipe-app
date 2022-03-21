function Button(props: { value: string }) {
  return (
    <button className="h-10 w-fit p-2 border hover:border-[#bf1404] hover:bg-[#bf1404] text-white rounded bg-[#fa3725] border-[#fa3725]">
      {props.value}
    </button>
  );
}

export default Button;
