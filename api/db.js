import pg from "pg";


const pool = new pg.Pool({
  user: "postgres",
  password: "480519",
  host: "localhost",
  port: 5432,
  database: "auth",
});


async function check(){
  await pool.connect()
  // const res = await Pool.query('SELECT * from blogs')
  // console.log(res.rows[0]) // Hello world!
  // await Pool.end()    
}


check();
export default pool;
