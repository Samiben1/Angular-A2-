// module.exports = function(db,app,ObjectID){
//     var dbo = db.db(dbname);
    
//     dbo.collection('users').find({}).toArray(function(err, result){
//         if (err) {
//             console.log("no users in the collection");
//             return;
//         }else if(result.length == 0){
//             console.log("no such user");
//             return;
//         }else{
//             console.log(result);
//         }
        
        
//         db.close();
//     });
// }
module.exports = function(db,app,ObjectID){
    console.log("fetching users");
    app.post('api/get_user',function(req,res){
        if (!req.body){
            return res.sendstatus(400);
        }

        userid = req.body.userid;
        var objectID = new ObjectID(userid);
        const collection = db.collection('users');
        collection.find({_id:objectID}).limit(1).toArray((err,docs)=>{
            console.log(docs);
            res.send(docs);
        })
    })
}