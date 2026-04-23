import express from 'express'

const PORT = 3300
const app = express()
app.use(express.json())
const students = [
    { id: 1, name: "Ann", subject: "maths" },
    { id: 2, name: "Bob", subject: "IT" },
    { id: 3, name: "Cloe", subject: "PE" }
]

app.get("/students", (req, res) =>{
    return res.status(200).json(students)
})

app.get("/students/:id", (req, res) =>{
    const id = +req.params.id
    const student = students.find(student => student.id === id)
    if(!id){
        return res.status(404).json({ "message": "Student not found"})
    }
    return res.status(200).json(student)
})

app.post("/students", (req, res) =>{
    const {name, subject} = req.body
    if(!name || !subject){
        return res.status(400).json({"message": "Name and subject are required"})
    }
    const id = +req.params.body
    const student = {id, name, subject}
    students.push(student)
    return res.status(201).json(student)
})

app.put("/students/:id", (req, res) =>{
    const {name, subject} = req.body
    if(!name || !subject){
        return res.status(400).json({ "message": "Name and subject are required"})
    }
    const id = +req.params.id
    if(!id){
        return res.status(404).json({ "message": "Student not found"})
    }
    const student = {id, name, subject}
    students.push(student)
    return res.status(200).json(student)
})

app.listen(PORT, () => {
    console.log(`Server runs on http://localhost:${PORT}`)
})