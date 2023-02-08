import {Outlet} from 'react-router';
import {NavLink} from 'react-router-dom';

export const Topbar = () => {
	return (
		<>
			<h1>#todo</h1>
			<div className="menu">
				{/* React does not detect activeClassName on version 6, so this is used to add a active class to NavLink is used className={(navData) => (navData.isActive ? "active" : 'none')+ ' menu-item'}, in this case the class active is default so it is not needed*/}
				<NavLink to={``} className="menu-item">
					All
					<div className="menu-item-border"></div>
				</NavLink>

				<NavLink to={`active`} className="menu-item">
					Active
					<div className="menu-item-border"></div>
				</NavLink>

				<NavLink to={`completed`} className="menu-item">
					Completed
					<div className="menu-item-border"></div>
				</NavLink>
			</div>

			<Outlet />
		</>
	);
};
