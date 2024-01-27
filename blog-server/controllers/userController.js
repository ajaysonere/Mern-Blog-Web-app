

// ============== Register User ===============

// Path = /api/users/register

export const registerUser = (req , res) => {
   res.send("Register user");
}


// ============== Login User ===============

// Path = /api/users/login

export const loginUser = (req , res) => {
    res.send("Login user");
};


// ============== get User ===============

// Path = /api/users/:id

export const getUser = (req , res) => {
    res.send("Get user");
}



// ============== Change Avatar User ===============

// Path = /api/users/change-avatar

export const changeAvatar = (req , res) => {
    res.send("Change Avatar");
}




// ============== Edit User details ===============

// Path = /api/users/edit-user


export const editUser = (req , res) => {
    res.send("Edit user");
}


// ============== Get User/ Authours ===============

// Path = /api/users/authors

export const getAuthors  = (req , res) => {
    res.send("Get Authors");
}




