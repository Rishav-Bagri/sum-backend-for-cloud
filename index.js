const express = require("express")
const port=3000
const app=express()
app.use(express.json())

app.get("/calculator", function(req, res) {
    res.send(`The calculator is at your service.<br>
              Do add by going to <a href="http://localhost:3000/calculator/add" target="_blank">Add</a><br>
              Do subtract by going to <a href="http://localhost:3000/calculator/subtract" target="_blank">Subtract</a><br>
              Do multiply by going to <a href="http://localhost:3000/calculator/multiply" target="_blank">Multiply</a><br>
              Do divide by going to <a href="http://localhost:3000/calculator/divide" target="_blank">Divide</a>`);
});

app.get("/calculator/add",function(req,res){
    const num1=req.query.a
    const num2=req.query.b
    const sum=parseInt(num1)+parseInt(num2)
    res.json({
        msg:"addition of "+num1+" and "+num2+" is "+sum
    })
})
  
app.get("/calculator/subtract",function(req,res){
    const num1=req.query.a
    const num2=req.query.b
    const minus=parseInt(num1)-parseInt(num2)
    res.json({
        msg:"subtraction of "+num1+" and "+num2+" is "+minus
    })
})

app.get("/calculator/multiply",function(req,res){
    const num1=req.query.a
    const num2=req.query.b
    const product=parseInt(num1)*parseInt(num2)
    res.json({
        msg:"multiplication of "+num1+" and "+num2+" is "+product
    })
})

app.get("/calculator/divide",function(req,res){
    const num1=req.query.a
    const num2=req.query.b
    const divide=parseInt(num1)/parseInt(num2)
    if (num2 === 0) {
        res.send('Error: Division by zero is not allowed');
    } else {
        const result = num1 / num2;
        res.send(`The result is ${result}`);
    }
})

app.get("*",function(req,res){
    res.status(404).send("No route found")
})

app.listen(port)