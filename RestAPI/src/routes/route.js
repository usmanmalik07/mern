import { addNewDonation,getDonations } from '../controllers/controller'
const routes = (app) => {
    app.route('/donations')
    .get((req,res)=>
    res.send("Get request successfull"))
    .post((req,res)=>
    res.send("Post request successfull"))
    app.route('/donations/:donationID')
    .put((req,res)=>
    res.send('put request successfull'))
    .delete((req,res)=>
    res.send('delete request successfull'))
    .post(addNewDonation)
    .get(getDonations)
}

export default routes;