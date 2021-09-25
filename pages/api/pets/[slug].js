const {pets} = require('./data.json')

export default (req, res) => {
  const pet = pets.filter(pet => pet.slug === req.query.slug)
  
  if (req.method === 'GET') {
    res.status(200).json(pet)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Method ${req.method} is not allowed`})
  }
}