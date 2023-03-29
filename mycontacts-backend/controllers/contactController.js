//@desc get all contact
//router get all contacts
//@access public

const getContacts = (req, res) => {
        res.status(200).json({message: "See your all contact"});
};

//@desc post all contact
//router post all contacts
//@access public
const createContact = (req, res) => {
        console.log("This request is :", req.body);
        res.status(200).json({message: "Create contact"});
}

//@desc get all contact
//router get all contacts
//@access public

const getContact = (req, res) => {
        res.status(200).json({message: `get contact for ${req.params.id}`});
}


//@desc update all contact
//router post all contacts
//@access public
const updateContact = (req, res) => {
        res.status(200).json({message: `Update contact for ${req.params.id}`});
}

//@desc delete all contact
//router post all contacts
//@access public
const deleteContact = (req, res) => {
        res.status(201).json({message: `Delete contact for ${req.params.id}`});
}





module.exports = {
        getContacts, 
        createContact, 
        getContact, 
        updateContact, 
        deleteContact
};