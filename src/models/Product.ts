import { ProductInterface } from '../inerfaces/ProductInterface';
import pool from '../dbconfig/dbconnector';
import { getDateTime } from '../helpers/DateHelper'

export class Product {
    static tableName = 'product'

    readonly name: string
    readonly price: number

    constructor(product: ProductInterface) {
        this.name = product.name
        this.price = product.price
    }

    async saveOrUpdate() {
        const product = await Product.findByName(this.name)

        if (product === undefined) {
            return this.save()
        }

        if (product.price === this.price) return

        await this.update(product.number_changes, product.name)
    }

    static async getAll(limit = 0, offset = 0) {
        const { rows } = await pool.query(`SELECT * FROM ${Product.tableName} LIMIT ${ limit } OFFSET ${ offset }`)
        return rows
    }

    async save() {
        await pool.query(`INSERT INTO ${Product.tableName} (name, price, updated_at) VALUES ('${ this.name }', ${ this.price }, '${ getDateTime() }')`)
    }

    async update(numberChanges: number, name: string) {
        await pool.query(`UPDATE ${Product.tableName} SET price = ${ this.price }, updated_at = '${ getDateTime() }', number_changes = ${ numberChanges +1 } WHERE name = '${name}'`)
    }

    static async findByName(name: string) {
        const { rows } = await pool.query(`SELECT * FROM ${Product.tableName} WHERE name = '${ name }' FETCH FIRST ROW ONLY`)
        return rows[0]
    }
}