const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => { 
    res.render("home");
};

indexCtrl.renderDetail = (req, res) => { 
    res.render("detail");
};

indexCtrl.renderAbout = (req, res) => { 
    res.render("about");
};

// indexCtrl.renderAdd = (req, res) => { 
//     res.render("add");
// };

indexCtrl.renderDelete = (req, res) => { 
    res.render("delete");
};

module.exports = indexCtrl;