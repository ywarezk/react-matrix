function Header() {
	return (
		<header>
			<h1>
				Hello im in the header
			</h1>
		</header>
	)
}

function Login() {
	return (
		<form>
			<div className="form-group">
				<label htmlFor="email" >Email</label>
				<input
					id="email" 
					name="email"
					type="email"
					className="form-control"
					placeholder="Enter your mail" />
			</div>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					className="form-control"
					placeholder="Enter your password" />
			</div>
			<div className="form-group">
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</div>
		</form>
	)
}

function Footer() {
	return (
		<footer>
			<h1>im in the footer</h1>
		</footer>
	)
}

function App() {
	return (
		<div>
			<Header />
			<Login />
			<Footer />
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);