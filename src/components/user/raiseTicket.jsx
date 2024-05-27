import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SelectOrg from "./SelectOrg";
import SelectService from "./SelectService";
import axios from "axios";
const RaiseTicket = ({ userId }) => {
	// handleIssues();
	// console.log(handleIssues);
	const [orgId, setOrgId] = useState();
	const [serviceId, setServiceId] = useState();
	// const emailRef = useRef();
	const nameRef = useRef();
	const descRef = useRef();

	const handleOrgId = (id) => {
		setOrgId(id);
	};
	const handleServiceId = (id) => {
		setServiceId(id);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newTicket = {
			// imageUrl: { type: String },
			issueName: nameRef.current.value,
			issueDesc: descRef.current.value,
			createdBy: userId,
			status: "notopened",
			orgId: orgId,
			sid: serviceId,
			//organisation id , service id , types are strings
		};
		console.log(newTicket);
		await axios
			.post("http://localhost:2000/api/user/raise-ticket", newTicket)
			.then((res) => {
				console.log(res.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};
	return (
		<Form>
			{/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="name@example.com" ref={emailRef}/>
			</Form.Group> */}
			<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
				<Form.Label>Issue Name</Form.Label>
				<Form.Control
					type="text"
					placeholder="Eg: Payment Failed"
					ref={nameRef}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
				<Form.Label>Select Organisation</Form.Label>
				<SelectOrg handleOrgId={handleOrgId} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
				<Form.Label>Select Service</Form.Label>
				<SelectService orgId={orgId} handleServiceId={handleServiceId} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
				<Form.Label>Ticket Description</Form.Label>
				<Form.Control as="textarea" rows={3} ref={descRef} />
			</Form.Group>
			<Button variant="danger" type="submit" onClick={(e) => handleSubmit(e)}>
				Submit
			</Button>
		</Form>
	);
};

export default RaiseTicket;
