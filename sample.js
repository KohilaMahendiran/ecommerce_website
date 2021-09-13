var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer(function(req,res)
{
    var weblink=url.parse(req.url,true);
    var filepath="."+weblink.pathname;
    fs.readFile(filepath,function(err,data)
    {
        if(err)
        {
            res.writeHead(404,{'content-type':'text/html'});
            return res.end("404 File not found");
            
        }
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end();
    }
    )
}).listen(8080);

//type in the browser:'http://localhost:8080/demo1.html'  or 'http://localhost:8080/demo2.html', the browser will show you the html file
//if we type the unknown html file in  the browser,the browser will shows error  - 404 file not found
