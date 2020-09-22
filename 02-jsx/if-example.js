// if
// condition in our jsx


function someCondition() {
	return true;
}

const h1 = (
	<h1>
		{
			someCondition() ? (
				<span>
					<u>
						this is true
					</u>
				</span>
			) : null	
		}
	</h1>
)

const h1 = (
	<h1>
		{
			someCondition() && (
				<span>
					<u>
						this is true
					</u>
				</span>
			)
		}
	</h1>
)

