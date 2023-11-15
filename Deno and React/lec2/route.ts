import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.get('/', ({response}) => {
    response.body = "Hello Deno Land!"
})
router.get('/deno', ({response}) => {
    response.body = "Land!"
})

export default router;