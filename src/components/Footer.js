import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="flex flex-row justify-between mt-6 bg-slate-500 p-3 text-white">
        <p>Copyright &copy; Lekkss 2022</p>
        <Link to="/about" className="rounded-sm bg-orange-300 px-6">About</Link>
      </div>
    </footer>
  );
}

export default Footer;
