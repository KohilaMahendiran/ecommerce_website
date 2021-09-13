var nodemailer=require('nodemailer');

var sender=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'kohilamahendiran@gmail.com',
        pass:'Kohila30061995'
    }
});

var composemail={
    from:'kohilamahendiran@gmail.com',
    to:['rajakohila801@gmail.com','kohilamahendiran@gmail.com'],
    subject:'Send mail using node js',
    //text:"Hello kohila ",
    html:'<h1>Welcome to Techno wizard</h1>'
}

sender.sendMail(composemail,function(error,info)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log("mail sent successfully",info.response)
    }
}
)