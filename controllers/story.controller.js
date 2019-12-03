const Story = require('../models/Story');

exports.getStories = async (req, res) => {

    Story.find({}, function(err, stories){
        if(err){
            console.log(err);
        }else{
            res.render("index",{stories:stories});
        }
    });

};