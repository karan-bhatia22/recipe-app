import { store } from "../../storage/store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../button/Button";
function Navbar() {
  const handleClick = () => {
    const action = { type: "OPEN_MODAL" };
    store.dispatch(action);
  };
  return (
    <div className="h-14 p-4 w-full flex justify-between items-center bg-black text-white">
      <Link to="/">
        <header className="text-3xl">Recipe App</header>
      </Link>
      <div onClick={handleClick}>
        <Button value="Add"></Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    recipes: state.recipes,
    isModalOpen: state.isModalOpen,
  };
};

export default connect(mapStateToProps)(Navbar);
