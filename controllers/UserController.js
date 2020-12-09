const express = require("express");
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || 'someothersecretasdefault';
const fs = require('fs');
var ncp = require('ncp').ncp;

const Users = require('../models/Users');
const { rejects } = require("assert");
const { resolve } = require("path");

exports.signUpUser = (req, res) => {
	console.log("signUpUser user data", req.body)

	const { name, email, password, cpassword } = req.body;
	const errors = {};
	if (!name || !email || !password || !cpassword) {
		errors.message = "Please enter all fields";
	    return res.status(400).json(errors);
    }
    if (password != cpassword) {
	 	errors.message = "Passwords do not match";
	 	return res.status(400).json(errors);
	}
	// save to DB
	Users.findOne({ email: email }).then(userData => {
		if (userData) {
		  errors.message = "Email already exists";
		  return res.status(400).json(errors);
		} else {
		  const newUser = new Users({ ...req.body });
		  bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(newUser.password, salt, (err, hash) => {
			  if (err) throw err;
			  newUser.password = hash;
			   newUser.save().then(user => {
                // Create Directory
                console.log("New Register user is ", user)

                let directory = '/opt/Websites',
                    downlaodDirectory = `${directory}/${user.email}/`;
               
                if (!(fs.existsSync(directory))) {
                    fs.mkdirSync(directory);
                    fs.chmodSync(directory, 0755);
                }
                if (!(fs.existsSync(downlaodDirectory))) {
                    fs.mkdirSync(downlaodDirectory);
                    fs.chmodSync(downlaodDirectory, 0755);
                }
					res.status(200).send({data:user});
				}).catch(err =>{
				   logger.info(err)
				});
			});
		  });
		}
	  });

}




exports.Loginuser = async (req, res) => {
    const errors = {};
    let isExpire = false;
    const email = req.body.email
    const password = req.body.password;
	
	var user = await Users.findOne({ email:email, is_deleted:false}).exec()
	console.log("Login user detail is ", user)

    if (!user) {
        errors.message = "User Account not found";
        return res.status(400).json(errors);
    }
    isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        errors.message = "Password is incorrect";
        return res.status(400).json(errors);
    }
    const payload = {
        id: user._id,
        email: user.email
    };
    token = await jwt.sign(payload, secret, { expiresIn: 36000 });
    if (!token) {
        return res.status(500).json({ error: "Error signing token" });
    }
    return res.json({
        success: true,
        token: `${token}`,
        user:{
            username:user.name,
            email:user.email,
            id:user._id
        } 
    });
}


exports.getUserInfo = async (req, res) => {
   const email = req.params.user
   const dbUser = await Users.findOne({ email });
   res.status(200).json(dbUser);
}

exports.logoutUser = (req, res) => {
   localStorage.removeItem('id_token');
   localStorage.removeItem('loggedIn_email');
   res.redirect('/login');
}

exports.addWebsiteInMySite = (req, res) => {
    console.log("addWebsiteInMySite", req.params.website)
    var webName = req.params.website

    ncp.limit = 16;
    let sourceDirectory = `/opt/Allwebsites/${webName}`;

    let directory = '/opt/Websites',
    downlaodDirectory = `${directory}/abc@gmail.com/${webName}`;
    console.log("sourceDirectory", sourceDirectory, "downlaodDirectory", downlaodDirectory)

    ncp(sourceDirectory, downlaodDirectory, function (err) {
        if (err) {
            console.error(err);
            //rejects(false)
        }else{
            console.log("Done!");
            //resolve(true)
        }
    });

}
 
