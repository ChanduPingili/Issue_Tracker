import axios from "axios";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const IssueBody = ({ issue, status }) => {
	// const [issueStatus, setIssueStatus] = useState();

	// const newStatus = status.filter((st) => st.statusId === issue.statusId);
	// setIssueStatus(newStatus);
	const descRef = useRef();
	const handleAccept = async () => {
		const newStatus = {
			// issueId: status.issueId,
			// statusId: status.statusId,
			status: "open",
			// statusDescription: status.statusDescription,
			statusDescription: "",
		};
		console.log(newStatus);
		await axios
			.put(`http://localhost:2000/api/status/${issue.issueId}`, newStatus)
			.then(() => {
				alert("Updated successfully");
			})
			.catch((e) => {
				{
					alert(e);
				}
			});
	};

	const handleResponse = async () => {
		const newStatus = {
			// issueId: status.issueId,
			// statusId: status.statusId,
			status: "open",
			statusDescription: descRef.current.value,
		};
		console.log(newStatus);
		await axios
			.put(`http://localhost:2000/api/status/${issue.issueId}`, newStatus)
			.then(() => {
				alert("Updated successfully");
			})
			.catch((e) => {
				{
					alert(e);
				}
			});
	};

	const handleSolved = async () => {
		const newStatus = {
			// issueId: status.issueId,
			// statusId: status.statusId,
			status: "closed",
			// statusDescription: status.statusDescription,
			statusDescription: "",
		};
		console.log(newStatus);
		await axios
			.put(`http://localhost:2000/api/status/${issue.issueId}`, newStatus)
			.then(() => {
				alert("Updated successfully");
			})
			.catch((e) => {
				{
					alert(e);
				}
			});
	};

	return (
		<Card className="text-center">
			<Card.Header>
				Issue Id : {issue.issueId} | Status Id : {issue.issueStatusId} |
				Employee Id : {issue.connectedTo}
			</Card.Header>
			<Card.Body>
				{/* <Card.Title>Special title treatment</Card.Title> */}
				<Card.Text>{issue.issueDesc}</Card.Text>
				<Button
					variant="primary"
					style={{ margin: "10px" }}
					onClick={handleAccept}
				>
					Accept
				</Button>
				<Button
					variant="secondary"
					style={{ margin: "10px" }}
					onClick={handleResponse}
				>
					Add Response
				</Button>
				<Button
					variant="success"
					style={{ margin: "10px" }}
					onClick={handleSolved}
				>
					Solved
				</Button>
			</Card.Body>
			<Card.Footer className="text-muted">
				<input
					type="text"
					placeholder="Enter your response here"
					style={{
						width: "50%",
						textAlign: "center",
						height: "40px",
					}}
					ref={descRef}
				></input>
				<hr />
				Status Description :
				{status ? status.statusDescription : ""} | Status : {status ? status.status: ""}

			</Card.Footer>
		</Card>
	);
};

export default IssueBody;

// import axios from "axios";
// import { useEffect, useRef, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// const IssueBody = ({ issue, status }) => {
// 	// const [issueStatus, setIssueStatus] = useState({});
// 	const descRef = useRef();
// 	// console.log("Status is " + status);
// 	// useEffect(() => {
// 	// 	const newStatus = status.find((st) => st.statusId === issue.status);
// 	// 	setIssueStatus(newStatus || {});
// 	// }, [status, issue.status]);

// 	const handleAccept = async () => {
// 		const newStatus = {
// 			issueId: issue.issueId,
// 			statusId: issue.status,
// 			status: "open",
// 			statusDescription: status.statusDescription,
// 		};
// 		console.log(newStatus);
// 		// try {
// 		// 	await axios.put(
// 		// 		`http://localhost:2000/api/status/${issueStatus.statusId}`,
// 		// 		{
// 		// 			status: newStatus,
// 		// 		}
// 		// 	);
// 		// } catch (error) {
// 		// 	console.error(error);
// 		// }
// 	};

// 	const handleResponse = async () => {
// 		const newStatus = {
// 			issueId: issue.issueId,
// 			statusId: issue.status,
// 			status: "open",
// 			statusDescription: descRef.current.value,
// 		};
// 		console.log(newStatus);
// 		// try {
// 		// 	await axios.put(
// 		// 		`http://localhost:2000/api/status/${issueStatus.statusId}`,
// 		// 		{
// 		// 			status: newStatus,
// 		// 		}
// 		// 	);
// 		// } catch (error) {
// 		// 	console.error(error);
// 		// }
// 	};

// 	const handleSolved = async () => {
// 		const newStatus = {
// 			issueId: issue.issueId,
// 			statusId: issue.status,
// 			status: "closed",
// 			statusDescription: status.statusDescription,
// 		};
// 		console.log(newStatus);
// 		try {
// 			await axios.put(
// 				`http://localhost:2000/api/status/${status.statusId}`,
// 				{
// 					status: newStatus,
// 				}
// 			);
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	};

// 	return (
// 		<Card className="text-center">
// 			<Card.Header>Issue Id : {issue.issueId}</Card.Header>
// 			<Card.Body>
// 				<Card.Text>{issue.issueDesc}</Card.Text>
// 				<Button
// 					variant="primary"
// 					style={{ margin: "10px" }}
// 					onClick={handleAccept}
// 				>
// 					Accept
// 				</Button>
// 				<Button
// 					variant="secondary"
// 					style={{ margin: "10px" }}
// 					onClick={handleResponse}
// 				>
// 					Add Response
// 				</Button>
// 				<Button
// 					variant="success"
// 					style={{ margin: "10px" }}
// 					onClick={handleSolved}
// 				>
// 					Solved
// 				</Button>
// 			</Card.Body>
// 			<Card.Footer className="text-muted">
// 				<input
// 					type="text"
// 					placeholder="Enter your response here"
// 					style={{
// 						width: "50%",
// 						textAlign: "center",
// 						height: "40px",
// 					}}
// 					ref={descRef}
// 				/>
// 				<hr />
// 				Status : {issueStatus.status} | Status Id : {issue.status} | Employee Id
// 				: {issue.connectedTo}
// 			</Card.Footer>
// 		</Card>
// 	);
// };

// export default IssueBody;
