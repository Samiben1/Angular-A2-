module.exports = function(db,app){
    console.log('creating group');
    app.post('/api/add_chnnel',function(req,res){
        if(!req.body){
            return res.sendstatus(400);
        }
        channel = req.body;
        const collection = db.collection('group');
        collection.find({'name':channel.name}).count((err,count)=>{
            if (count == 0){
                if (err) throw err;
                let num = dbres.insertCount;
                res.send({'num':num, err:null});
            }
            else{
                res.send({'num':0, 'err':"duplicate group"});
            }
        });
        collection.insertOne(
            {name: channel.name, password: channel.password, users:channel.groupid}
        )
        console.log("sucessfully inserted channel");
    });
    console.log("inserting channel in the database");
}