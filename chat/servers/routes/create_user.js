module.exports = function(dbo,app){
    console.log("Creating user");
    app.post('/api/add_users',function(req,res){
        if(!req.body){
            return res
            .sendstatus(400);
        }
        user = req.body;
        const collection = dbo.collection('users');
        console.log(collection);
        collection.find({'name':user.name}).count((err,count)=>{
            if (count == 0){
                collection.insertOne(user,(err,dbres)=>{
                    if (err) throw err;
                    let num = dbres.insertedCount;
                    collection.insertOne(
                        {name: dbress.name, password:dbres.password, role:dbres.role}
                    )
                    // res.send({'num':num, err:null});
                })
            }else{
                res.send({'num':0, 'err':"duplicate user"});
            }
        });
 
    });
    console.log("insteted user in the db");
}

