import {Router} from 'express';

const routes = Router();

routes.get('/user', (req, res) => res.json({
    message:'Hello World'

}))


export default routes;