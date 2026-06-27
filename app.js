const express = require("express");
const cron = require("node-cron");

const app = express();

app.get("/", (req,res)=>{
    res.send("Hello World!");
})

app.get("/wake", (req,res)=>{
    res.send("wake...!");
})


const job = cron.schedule("* 1 * * * *",async function() {
    console.log("running a task every 1 minute");

    try {
        const res1 = await fetch("https://supamart-v-backend.onrender.com/")
        const res2 = await fetch("https://r-r-ornaments-backend.onrender.com")
        const res3 = await fetch("https://ai-project-backend-1vla.onrender.com/wake")
        console.log("All APIs are running successfully");
    } catch (error) {
        console.log("error ",{error});
    }
    
});

job.start();

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})
