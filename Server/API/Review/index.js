//libraries
import express from 'express'

//databse model
import ReviewModel from '../../database/reviews'

//validation
import { validateReviews } from '../../Validation/reviews'

const Router = express.Router()

/*
Route    :/
Des      :Post new Review
Params   :none
Body     :reviewData
Access   :Public
Method   :GET
*/

Router.post("/new", async (req, res) => {
    try {
        const { reviewData } = req.body
        const isReviewData = await ReviewModel.create(reviewData)
        if (!isReviewData) return res.status(404).send({ error: `No food found id of ${reviewData.foodId} ` })
        return res.status(201).send({ review: 'successfully created Review' })
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }

})

/*
Route    :/
Des      :Delete Review based on id
Params   :_id
Access   :Public
Method   :DELETE
*/

Router.delete("/delete/_id", async (req, res) => {
    try {
        const { _id } = req.params
        const isReviewData = await ReviewModel.findOneAndDeleted(_id)
        if (!isReviewData) return res.status(404).send({ error: `No Review fonund id of ${_id} ` })
        return res.status(201).send({ review: 'successfully Deleted Review' })
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})


export default Router