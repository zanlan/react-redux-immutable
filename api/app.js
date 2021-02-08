
const express = require("express");
const port = 4000;
const hostname = "0.0.0.0";
const http = require("http");
const app = express();
const server = http.createServer(app);
const cors = require("cors");

app.use(cors());   // cors 解决跨域问题  jsonp 代理  
app.use(express.json());     // from-data 
app.use(express.urlencoded({ extended: false }));   // x-www-form-urlencoded  获取 POST 请求 获取 参数数据
app.use(express.static("public"));

const api = require("./api");
app.use("/api", api);

server.listen(port, hostname, () => {
    console.log(`我启动的服务是  http://localhost:${port}`)
})