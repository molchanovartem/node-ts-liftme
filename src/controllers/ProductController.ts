
import * as http from 'http'
import * as fs from 'fs'
import { Product } from '../models/Product';
import { ProductInterface } from '../inerfaces/ProductInterface';

const csv = require('csv-parser')
const iconv = require('iconv-lite')

class ProductController {
    public async fetch(req: any, res: any) {
        try {
            const file = fs.createWriteStream('file.csv', { encoding: 'utf8' } );
            http.get(req.body.url, function(response) {
                response.pipe(file);

                fs.createReadStream('file.csv')
                    .pipe(iconv.decodeStream('win1251'))
                    .pipe(csv({ separator: ';' }))
                    .on('data', async (data: ProductInterface) => {
                        const product = new Product(data)
                        await product.saveOrUpdate()
                    })
            });


            res.send(true);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async list(req: any, res: any) {
        try {
            const limit = parseInt(req.query.limit)
            const offset = parseInt(req.query.offset)
      
            const products = await Product.getAll(limit, offset);
      
            return res.status(200).json({
                data: products,
                pagination: {
                    limit,
                    offset
                }
            });
          } catch(e){
            return res.status(500).json(e)
          }
    }
}

export default ProductController;