const express = require('express');
const router = express.Router();
let usersJson = require('../user.json');
const users = [
    {
        id: 0,
        name: "itay",
        capsule: 1
    },
    {
        id: 1,
        name: "avi",
        capsule: 1
    }
]
router.get('/', (req, res) => {
    console.log('works');
    return res.status(200).json({ users: usersJson.data })
}).get('/:id', (req, res) => {
    const { id } = req.params;
    return res.status(200).json({ user: usersJson.data.find(user => user.id == id) })
}).post('/', (req, res) => {
    const { name, capsule } = req.body;
    usersJson.data.push({
        id: usersJson.data[usersJson.data.length - 1].id + 1,
        name: name,
        capsule: capsule
    })
    return res.status(200).json({ success: 'user added' })
}).put('/:id', (req, res) => {
    const { id } = req.params;
    const { capsule } = req.body;
    const { name } = req.body;
    // const index =

    if (!capsule || id < 0) {
        res.status(204).send("error")
    }
    let user = usersJson.data.find((u) => u.id == id)
    if (!user) {
        res.status(204).send("error")
    }
    usersJson.data[id].capsule = capsule
    usersJson.data[id].name = name

    res.status(200).send("success")

}).delete('/:id', (req, res) => {
    const { id } = req.params;
    usersJson.data = usersJson.data.filter(user => user.id != id)
    return res.status(200).json({ success: 'user deleted' })
})
console.log(usersJson.data);
module.exports = router;
