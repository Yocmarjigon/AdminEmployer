import postgres from "postgres";

const sql = postgres({
  host: "localhost",
  port: 5432,
  database: "adminemployer",
  username: "postgres",
  password: "1234",
});

const generateTable = () => {
   sql` CREATE TABLE IF NOT EXISTS admin (id uuid default gen_random_uuid() primary key , email varchar not null unique,password varchar not null);`.then(() => console.log("done"));
};

export { sql, generateTable };
