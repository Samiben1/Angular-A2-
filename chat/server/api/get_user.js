module.exports = function(db,dbname){
    var dbo = db.db(dbname);
    dbo.collection('users').find({'name':'super'}).toArray(function(err, result){
        if (err) {
            console.log("no users in the collection");
            return;
        }else if(result.length == 0){
            console.log("no such user");
        }else{
            console.log(result);
        }
        
        
        db.close();
    });
}