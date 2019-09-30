module.exports = function(db,app){
    console.log("Creating user");
    app.post('/api/add',function(req,res){
        if(!req.body){
            return res
            .sendstatus(400);
        }
        user = req.body;
        const collection = db.collection('users');

        // collection.find({'name':user.name}).count((err,count)=>{
        //     if (count == 0){
        //         collection.insertOne(user,(err,dbres)=>{
        //             if (err) throw err;
        //             let num = dbres.insertedCount;
        //             res.send({'num':num, err:null});
        //         })
        //     }else{
        //         res.send({'num':0, 'err':"duplicate user"});
        //     }
        // });
        collection.insertOne(
            {name: "admin", password:'admin', role:'admin'}
        )
    });
    console.log("insteted user in the db");
}

