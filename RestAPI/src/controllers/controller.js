import mongoose from 'mongoose';
import { Schema1 } from '../models/model';
const Donation = mongoose.model("Donations", Schema1);
export const addNewDonation = (req,res) =>
     { 
        let newDonation = new Donation(req.body);
        newDonation.save((err,donation)=>{
            if(err){
                res.send(err);
            }
            res.json(donation);
        })
    }
    export const getDonations = (req,res) => {
        Donation.find({}, (err, donation) => {
          if (err) {
            res.send(err)
          }
          res.json(donation)
        })
      }
      