import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

const Form = () => {
	// State
	const [data, setData] = useState({
		fullName: '',
		email: '',
		message: '',
		sent: false,
		buttonText: 'Enviar',
		err: '',
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
		console.log(data);
	};

	// Reset function
	const resetForm = (): void => {
		setData({
			fullName: '',
			email: '',
			message: '',
			sent: false,
			buttonText: 'Submit',
			err: '', // Este campo serviría para cargar otro componente (por ejemplo una modal con el texto "Vuelve a intentarlo") en base al valor de err.
		});
	};

	// Submit function
	const formSubmit = (e: any) => {
		e.preventDefault();

		setData({
			...data,
			buttonText: 'Enviando...',
		});

		axios
			.post('/api/sendmail', data)
			.then((res) => {
				if (res.data.result !== 'success') {
					setData({
						...data,
						buttonText: 'Fallo al enviar',
						sent: false,
						err: 'fail',
					});
					setTimeout(() => {
						resetForm();
					}, 3000);
				} else {
					setData({
						...data,
						sent: true,
						buttonText: 'Enviado',
						err: 'success',
					});
					setTimeout(() => {
						resetForm();
					}, 3000);
				}
			})
			.catch((err) => {
				setData({
					...data,
					buttonText: 'Ha ocurrido un error',
					err: 'fail',
				});
			});
	};

	return (
		<>
			<FormControl fullWidth={true}>
				<TextField
					required
					label="Full name"
					variant="filled"
					id="full-name"
					name="fullName"
					className="form-field"
					value={data.fullName}
					onChange={handleChange}
				/>
			</FormControl>
			<FormControl fullWidth={true}>
				<TextField
					required
					label="Email"
					id="email"
					name="email"
					variant="filled"
					className="form-field"
					value={data.email}
					onChange={handleChange}
				/>
			</FormControl>
			<FormControl fullWidth={true}>
				<TextField
					required
					label="Message"
					variant="filled"
					name="message"
					multiline={true}
					rows="10"
					value={data.message}
					onChange={handleChange}
				/>
			</FormControl>
			<FormControl>
				<div style={{ padding: 20 }}>
					<Grid container spacing={2}>
						<div className="form-submit">
							<Button variant="contained" color="primary" onClick={formSubmit}>
								{data.buttonText}
							</Button>
						</div>
					</Grid>
				</div>
			</FormControl>
		</>
	);
};

export default Form;
