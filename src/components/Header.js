import Nav from "./header/Nav";
import TopNav from "./header/TopNav";

const Header = () => {
	return (
		<div className="header sticky top-0 bg-white z-10 w-full left-0">
			<TopNav />
			<Nav />
		</div>
	)
};

export default Header;
