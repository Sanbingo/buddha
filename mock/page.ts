import { Request, Response } from 'express';

export default {
    'POST /api/page/list': (req: Request, res: Response ) => {
        const params = req.body;
        console.log('params', params)
        res.send({
            status: 0,
            data: [{
                id: '10001',
                name: 'test',
                cid: 'xid8s3st',
                updateTime: '2020-07-08 12:01:33',
                description: 'this is a demo'
            }],
            message: 'success'
        })
    }
}