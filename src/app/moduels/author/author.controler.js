import author from "../../DB/models/author.js"

// add bulk for testing pagination
// import { bookAuthors } from "../book/book.controler.js";

// let result = bookAuthors.map((man)=>{
//     return {name:man , bio:"famous author",birthDate: new Date() }
// })


export const addauthor = (req, res) => {
    const { name, bio, birthDate } = req.body
    if (name && bio && birthDate) {



        author.create({ name, bio, birthDate: new Date(birthDate).toLocaleDateString() })
            .then(() => {
                res.status(200).json({
                    message: "author added successfully"
                })
            }).catch(err => {


                res.status(500).json({
                    message: "author not added ",
                    error: err.message
                })
            })

    } else {
        res.status(500).json({
            message: "author not added ",
            error: `all fields are required => { name, bio, birthDate }`
        })
    }

    // add bulk for testing pagination

    // author.insertMany(result)
    // res.status(200).json({
    //     message: "author added successfully"
    // })
}

export const getauthors = async (req, res) => {



    try {
        let data = await author.find()
        res.status(200).json({ msg: 'done', data })

    } catch (err) { res.status(500).json({ msg: 'error', error: err.message }) }



}


export const getAuthorsPagenation = async (req, res) => {
    let { page } = req.params

    try {
        let data = await author.find().skip((page - 1) * 20).limit(20)
        if (data.length == 0) {
            return res.json({ msg: `page not avilabel` })

        }

        res.status(200).json({ msg: 'done', data })
    } catch (err) { res.status(500).json({ msg: 'error', error: err.message }) }
}

export const getAuthorsSearch = async (req, res) => {
    let search = req.query?.search

    try {
        let data = await author.find(
            {
                $or: [
                    {
                        name: { $regex: search, $options: 'i' }
                    },
                    {
                        bio: { $regex: search, $options: 'i' }
                    }
                ]
            }
        )

        if(data.length == 0) {
            res.status(201).json({ msg: 'data not found'})
        }

        res.status(200).json({ msg: 'done', data })


    } catch (err) { res.status(500).json({ msg: 'error', error: err.message }) }

}

export const getAuthorsPaginationAndSearch = async (req, res) => {
    let { page } = req.params
    let search = req.query?.search
    try {
       let data = await author.find({
            $or: [
                { name: { $regex: search, $options: "i" } },
                { bio: { $regex: search, $options: "i" } }
            ]
        }).skip((page - 1) * 20).limit(20).lean()

        if (data.length == 0) {
            return res.json({ msg: `page not avilabel` })
        }
        res.status(200).json({ msg: 'done', data })

    } catch (err) { res.status(500).json({ msg: 'error', error: err.message }) }
}

export const getauthor = (req, res) => {
    author.findById(req.params.id).populate({ path: 'books', select: '-author' })
        .then(data => { res.status(200).json({ msg: 'done', data }) })
        .catch((err) => { res.status(500).json({ msg: 'error', error: err.message }) })
}

export const updateauthor = async (req, res) => {
    author.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(data => { data ? res.status(200).json({ msg: 'done', data }) : res.status(404).json({ msg: 'id not found' }) })
        .catch((err) => { res.status(500).json({ msg: 'not update', error: err.message }) })
}


export const deleteauthor = (req, res) => {
    author.findByIdAndDelete(req.params.id)
        .then(data => { data ? res.status(200).json({ msg: 'done', data }) : res.status(404).json({ msg: 'id not found' }) })
        .catch((err) => { res.status(500).json({ msg: 'not delted', err }) })
}
