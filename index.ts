import * as express from 'express';
import { response } from 'express';
import { request } from 'express';
import * as mysql from 'mysql';

const app = express()
app.use(express.json())
const PORT: Number= 4000;

const con = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    port:"3306",
    database:"typescriptcrud"
})

con.connect((err:string) =>{
    if(err){
        console.log("Database not connected...");
    } else {
        console.log("Database in connected....");
    }
})

app.post('/typeScriptpost', (req:request, res:response)=>{
    const data = req.body;
    const sql = `INSERT into crudtypescript set ?`
    con.query(sql, data, (err, result)=>{
        if(err){
            console.log("Data is not posted...");
            res.json(err);
        } else {
            console.log("Data is posted...");
            res.json(result);
        }
    })
})


app.get('/typeScriptget/:id', (req:request, res:response)=>{
    const id = req.params.id;
    const sql = `SELECT * from crudtypescript where id = ?`
    con.query(sql, id,(err, result)=>{
        if(err){
            console.log("Data is not getting...");
            res.json(err);
        } else {
            console.log("Data is getting...");
            res.json(result);
        }
    })
})

app.put('/typeScriptupdate/:id',(req:request, res:response)=>{
    const data = req.body;
    const id = req.params.id;
    const sql = `UPDATE  crudtypescript SET ? WHERE id =?`
    con.query(sql, [data,id],(err, result)=>{
        if(err){
            console.log("Data is not updated...");
            res.json(err);
        } else {
            console.log("Data is updated...");
            res.json(result)
        }
    })
})

app.delete('/typeScriptdelete/:id', (req:request, res:response)=>{
    const id = req.params.id;
    const sql = `delete from crudtypescript where id = ?`
    con.query(sql, id, (err, result)=>{
        if(err){
            console.log("Data is not deleted...");
            res.json(err);
        } else {
            console.log("Data is deleted...");
            res.json(result);
        }
    })
})


app.listen(PORT, ()=>{
    console.log(`Port is running on ${PORT}...`);
})


