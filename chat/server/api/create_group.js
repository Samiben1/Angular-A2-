module.exports = function(db,app){
    app.post('/api/create_group',function(req,res){
        if(!req.body){
            return res.sendstauts(400);
        }
        group = req.body;
        return req.body;
    })

};
