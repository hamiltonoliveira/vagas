import fastify from "fastify"
import { knex }from "./databases"

const app = fastify()

app.get('/hello',()=>{
      const tables = knex('sqlite_schema').select('*')
      return tables
})


app.listen({
    port:3333
}).then(()=>{
    console.log('running server now')
})
