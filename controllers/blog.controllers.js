//CATEGORY SECTION
exports.getCat = (req, res) => {
    res.json ("Categories Successful");
}

exports.postCat = (req,res) => {
    categoriesId = req.params.id;
    var advert = req.body;
    myArray.push(advert);   
    res.json (myArray);
}

exports.putCat = (req, res) => {
    updateCategory = req.body;
    categoriesId = req.params.id;
    myArray.forEach(categoryy => {
        if (categoryy.id === parseInt (categoriesId)){
            categoryy.category = updateCategory.category;
        }
    });
    res.json (myArray);
}

exports.deleteCat = (req,res) => {
    res.json ({myArray:myArray.filter (categoryy => categoryy.id !== parseInt (req.params.id))});
}

//ADVERTISEMENT SECTION 
exports.getAdd = (req, res) => {
    res.json ("Advertisement Successful");
}

exports.postAdd = (req,res) => {
    advertsId = req.params.id;
    var check = req.body;
    adverts.push(check);   
    res.json (adverts);
}

exports.putAdd = (req, res) => {
    updateAdvert = req.body;
    categoriesId = req.params.id;
    adverts.forEach(categoryy => {
        if (categoryy.id === parseInt (categoriesId)){
            categoryy.category = updateAdvert.category;
        }
    });
    res.json (adverts);
}

exports.deleteAdd = (req,res) => {
    res.json ({adverts:adverts.filter (categoryy => categoryy.id !== parseInt (req.params.id))});
}

//COMMENTS SECTION
exports.getCom = (req, res) => {
    res.json ("Comments Successful");
}

exports.postCom = (req,res) => {
    advertsId = req.params.id;
    var check = req.body;
    myComment.push(check);   
    res.json (myComment);
}

exports.putCom = (req, res) => {
    updateComment = req.body;
    categoriesId = req.params.id;
    myComment.forEach(categoryy => {
        if (categoryy.id === parseInt (categoriesId)){
            categoryy.category = updateComment.category;
        }
    });
    res.json (myComment);
}

exports.deleteCom = (req,res) => {
    res.json ({myComment:myComment.filter (categoryy => categoryy.id !== parseInt (req.params.id))});
}

//POSTS SECTION
exports.getPost = (req, res) => {
    res.json ("Posts Successful");
}

exports.postPost = (req,res) => {
    advertsId = req.params.id;
    var check = req.body;
    myPosts.push(check);   
    res.json (myPosts);
}

exports.putPost = (req, res) => {
    updateComment = req.body;
    categoriesId = req.params.id;
    myPosts.forEach(categoryy => {
        if (categoryy.id === parseInt (categoriesId)){
            categoryy.category = updateComment.category;
        }
    });
    res.json (myPosts);
}

exports.deletePost = (req,res) => {
    res.json ({myPosts:myPosts.filter (categoryy => categoryy.id !== parseInt (req.params.id))});
}

//SUBSCRIPTION SECTION
exports.getSub = (req, res) => {
    res.json ("Subscriptions Successful");
}

exports.postSub = (req,res) => {
    advertsId = req.params.id;
    var check = req.body;
    mySub.push(check);   
    res.json (mySub);
}

exports.putSub = (req, res) => {
    updateComment = req.body;
    categoriesId = req.params.id;
    mySub.forEach(categoryy => {
        if (categoryy.id === parseInt (categoriesId)){
            categoryy.category = updateComment.category;
        }
    });
    res.json (mySub);
}

exports.deleteSub = (req,res) => {
    res.json ({mySub:mySub.filter (categoryy => categoryy.id !== parseInt (req.params.id))});
}

//SUBSCRIPTIONS SECTION
exports.getUse = (req, res) => {
    res.json ("User Successful");
}

exports.postUse = (req,res) => {
    advertsId = req.params.id;
    var check = req.body;
    myUse.push(check);   
    res.json (myUse);
}

exports.putUse = (req, res) => {
    updateComment = req.body;
    categoriesId = req.params.id;
    myUse.forEach(categoryy => {
        if (categoryy.id === parseInt (categoriesId)){
            categoryy.category = updateComment.category;
        }
    });
    res.json (myUse);
}

exports.deleteUse = (req,res) => {
    res.json ({myUse:myUse.filter (categoryy => categoryy.id !== parseInt (req.params.id))});
}


//LIKE_UNLIKE SECTION
exports.getLike = (req, res) => {
    res.json ("Liker Successful");
}

exports.postLike = (req,res) => {
    advertsId = req.params.id;
    var check = req.body;
    myLike.push(check);   
    res.json (myLike);
}

exports.putLike = (req, res) => {
    updateComment = req.body;
    categoriesId = req.params.id;
    myLike.forEach(categoryy => {
        if (categoryy.id === parseInt (categoriesId)){
            categoryy.category = updateComment.category;
        }
    });
    res.json (myLike);
}

exports.deleteLike = (req,res) => {
    res.json ({myLike:myLike.filter (categoryy => categoryy.id !== parseInt (req.params.id))});
}