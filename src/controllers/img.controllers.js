import { read, write } from "../utils/model.js";

let GET = (req, res) => {

    try {
        let img = read('img')
        if (img == '') {
            res.json(
                {
                    img:'[]'
                }
            )
        }
        res.send(img);
    } catch (error) {
        res.status(400).json(
            {
                status: error.status,
                message: error.message
            }
        )
    }

}

export {
    GET
}