import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.css'
import Layout from '@/components/Layout'

export default function AddPetPage() {
  const [values, setValues] = useState({
    name: '',
    address: '',
    description: '',
    breed: '',
    type: '',
    tags: '',
    phone: '',
    reason: '',
  })

  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    // take tags and convert it to array of tags before sending to an API

    // validation
    const hasEmptyFields = Object.values(values).some(value => value === '')
    if (hasEmptyFields) {
      toast.error('Please fill in all fields')
      return
    }
    // console.log(JSON.stringify(values))
    const res = await fetch(`${API_URL}/pets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(values)
    })

    if (!res.ok) {
      toast.error('Something Went Wrong')
      const err = await res.json()
      console.log(err)
    } else {
      const pet = await res.json()
      router.push(`pets/${pet.slug}`)
    }

  }
  const handleInputChange = e => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }
  
  return (
    <Layout title="Add new pet">
      <Link href='/pets'>Go Back</Link>
      <h1>Add pet page</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor='name'>Pet Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={values.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor='breed'>Breed</label>
            <input
              type='text'
              id='breed'
              name='breed'
              value={values.breed}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              id='address'
              name='address'
              value={values.address}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor='phone'>Phone</label>
            <input
              type='text'
              id='phone'
              name='phone'
              value={values.phone}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor='type'>Pet type {'&'} Reason</label>
            <select name='type'  onChange={handleInputChange}>
              <option value=''>Pet type</option>
              <option value='dog'>Dog</option>
              <option value='cat'>Cat</option>
              <option value='other'>Other</option>
            </select>

            <select name='reason'  onChange={handleInputChange}>
              <option value=''>Reason</option>
              <option value='lost'>Lost pet</option>
              <option value='adoption'>Adoption</option>
            </select>
          </div>

          <div>
            <label htmlFor='tags'>Tags</label>
            <input
              type='text'
              id='tags'
              name='tags'
              value={values.tags}
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor='description'>Description</label>
          <textarea
            type='text'
            id='description'
            name='description'
            value={values.description}
            onChange={handleInputChange}
          />
        </div>
        <input type='submit' value='Add Pet' className='btn' />
      </form>
    </Layout>
  )
}
