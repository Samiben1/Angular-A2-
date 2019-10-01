module.exports = function(dbo,app){
    console.log("Creating group");
    app.post('/api/add_group',function(req,res){
        if(!req.body){
            return res
            .sendstatus(400);
        }
        group = req.body;
        const collection = dbo.collection('groups');
        console.log(collection);
        collection.find({'name':group.name}).count((err,count)=>{
            if (count == 0){
                collection.insertOne(group,(err,dbres)=>{
                    if (err) throw err;
                    let num = dbres.insertedCount;
                    res.send({'num':num, err:null});
                })
            }else{
                res.send({'num':0, 'err':"duplicate user"});
                return;
            }
        });
        // collection.insertOne(
        //     {name: "admin", password:'admin', role:'admin'}
        // )
    });
    console.log("insteted group in the db");
}

