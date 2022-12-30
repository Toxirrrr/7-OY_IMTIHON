import jwt from 'jsonwebtoken'
import { SECRET } from '../config.js'


function checkToken(req, res, Toxirrrr) {

	try {
		let { token } = req.headers

		if (!token) {
			throw new Error('token required')
		}

		let { userId } = jwt.verify(token, SECRET)

		req.userId = userId

		Toxirrrr()
		
	} catch (error) {

		res.status(403).json(
			{
				status: 403,
				message: error.message
			}
		)

	}
}

export { SECRET, checkToken }