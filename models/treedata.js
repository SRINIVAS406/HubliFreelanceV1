import mongoose from 'mongoose'

// Defining Schema
const treeSchema= new mongoose.Schema ({"userdata":{
name: { type: String, trim: true },
parent: { type: String, trim: true},
title: { type: String, trim: true},
age: { type: String, trim: true},
gender: { type: String, trim: true},
ward_no: { type: String, trim: true},
poll_no: { type: String, trim: true},
booth_no: { type: String, trim: true},
caste: { type: String, trim: true},
sub_caste: { type: String, trim: true},
address: { type: String, trim: true},
id_proof: { type: String, trim: true},
join: { type: Date, default: Date.now }
}})

// Compiling Schema
const TreeModel = mongoose.model('orgtreedata', treeSchema)

export default TreeModel