import './styles.css'
import avatar from '../../assets/avatar.png'

export const Navbar = ({ sidebarOpen, openSidebar }) =>
{
	return (
		<nav className="navbar">
			<div className="nav-icon" onClick={() => openSidebar()}>
				<i className="fa fa-bars" aria-hidden="true" />
			</div>

			<div className="navbar-left">
				<a href="#">Produtos</a>
				<a href="#">Usuários</a>
				<a href="#" className="active-link">Admin</a>
			</div>

			<div className="navbar-rigth">
				<a href="#">
					<i className="fa fa-search"></i>
				</a>

				<a href="#">
					<i className="fa fa-clock-o"></i>
				</a>

				<a href="#">
					<img width="30" src={avatar} alt="avatar" />
				</a>
			</div>
		</nav>
	)
}