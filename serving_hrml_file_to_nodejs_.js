/// here in this code we are serving html file to browser using nodejs
/// this code contain h html file wwhich is present in this repositories as html_file_.html


const http = require('http')  /// this is a http module
const fs = require('fs')      /// it is an fs module

const fileContent = fs.readFileSync('html_file_.html')   /// this will read the whole file content

/// now we are creating server . in which first argument will be q request and second will be response

const server = http.createServer((req, res) => {
    res.writeHead(200,{'content-type':'text/html'})   /// here we pass 200 which is an argument known as response code , and in sec argu we give the type of file . we can m pass many thing in this 2nd argu plz go through gfs you will find more about writeHead function

    /// now we are going to serve our content
    res.end(fileContent)
})

/// now we want that our server will listion us

server.listen(80,'127.0.0.1', ()=>{  // we are doing listion at 80 porst and sec argu is a local host which is always 127.0.0.1 and then we had passed h callback
    console.log("Listioning on port 80")
})

/// hmne port 80 isiliye liya h kyuki jb hm browser me jake apna local host 127.0.01 likhenge to vo implicityly call ho jayga 
/// let suppose hmne 80 ki jageh kuch or likha hota man lo 8000 likha hota or phir hm browser pr jake local host(127.0.0.1) to hamari html file ka content browser me nahi dikhta . Conetnt ko browser pr lanke ke liye hme explicitly ye likhna hota 127.0.0.1:8000 ye likhna hota phir content show hota
