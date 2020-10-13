import React from 'react';

export function Login() {
	return (
		<div className="card">
			<div className="card-body">
				<form>
					<div className="form-group">
						<label>Email</label>
						<input 
							type="email" 
							name="email" 
							placeholder="yariv@nerdeez.com"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input 
							type="password" 
							name="password" 
							placeholder="yariv@nerdeez.com"
							className="form-control"
							/>
					</div>
					<div className="form-group">
						<button className="btn btn-primary" type="submit">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>		
	)
}
