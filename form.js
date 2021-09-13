var http=require('http');
var fs=require('fs');
var formidable=require('formidable');

http.createServer(function(req,res){
    if(req.url=='/')
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<form action="biodata" method="post" enctype="multipart/form-data">');
        res.write('<h1>VJ Techno wizard</h1>');
        res.write('Name <input type="text" name="username"><br>');
        res.write('DOB <input type="date" name="dob"><br>');
        res.write('Qualification <input type="text" name="qualification"><br>');
        res.write('Email <input type="email" name="mailid"><br>');
        res.write('Phone number <input type="text" name="phonenumber"><br>');
        res.write('Upload your resume <input type="file" name="uploadfile"><br>');
        res.write('<input type="submit">');
        res.end();
    }

    else if(req.url=='/biodata')
    {
        var form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            res.write('<h1>Name:' + fields.username + '</h1><br>');
            res.write('<h1>DOB:' + fields.dob + '</h1><br>');
            res.write('<h1>Qualification:' + fields.qualification + '</h1><br>');
            res.write('<h1>Email:' + fields.mailid + '</h1><br>');
            res.write('<h1>Phone number:' + fields.phonenumber + '</h1><br>');
            
            var oldpath=files.uploadfile.path;// name=uploadfile

            var newpath='C:/VJ-TECHNO-WIZARD/storedfiles/' + files.uploadfile.name;
            fs.rename(oldpath,newpath,function(err){
                {
                    if(err) throw err;
                    res.write('<h1>Your file location</h1><br>');
                    res.write('<h1>Old path: ' + oldpath + '</h1><br>');
                    res.write('<h1>New path: ' + newpath + '</h1><br>');
                    res.end('<h1>Thanks for your interest ! your form submitted successfully</h1>');
                }
            });
        })
    }
    else{
        res.end('<h1>404 PAGE NOT FOUND</h1>');
    }
}).listen(8080);

//the url will be like this
//https://localhost:8080/biodata