import { Hash } from '../utils/hash.js';
import { read } from '../utils/model.js';
import jwt from '../utils/jwt.js';

const userLogin = (req, res) => {
	try {
		let { username, password } = req.body;

		password = Hash(password);
		let admins = read('admins');


	
		let userUsername = admins.find(
			admin => admin.username == username
		);
		if (!userUsername) {
			throw new Error('wrong username')
		}
		let userPassword = admins.find(
			admin => admin.password == password
		);
		if (!userPassword) {
			throw new Error('wrong password')
		}
		let users = admins.find(
			admin => admin.username == username && admin.password == password
		);
		// if (!user) {
		// 	throw Error("wrong username or password")
		// }


		res.status(200).send(
			{
				status: 200,
				token: jwt.sign(users.admin_id)
			}
		);
	} catch (error) {
		res.status(404).send(
			{
				status: 404,
				message: error.message
			}

		);
	}
};

export default userLogin;
