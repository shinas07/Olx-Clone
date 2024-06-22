import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/Context';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { storage,db } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

const Create = () => {
 const navigate = useNavigate()
 const  user  = useContext(AuthContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [size, setSize] = useState('')

  const handleSubmit = async () => {
    try {
      if (!name || !category || !price || !image) {
        throw new Error("All fields are required!");
      }
      


      const storageRef = ref(storage, `images/${image.name}`);
      const uploadResult = await uploadBytes(storageRef, image);

      // Get the image download URL
      const imageUrl = await getDownloadURL(uploadResult.ref);

      const docRef = await addDoc(collection(db, 'products'), {
        name,
        category,
        price,
        imageUrl,
        // userId: user.uid,
        createdAt: new Date().toISOString()
      });
      // console.log('Document written with ID:', docRef.id);

      alert("Product created successfully!");
      setName('');
      setCategory('');
      setPrice('');
      setImage(null);
      navigate('/')
    } catch (error) {
      console.error( error);
      alert("There was an error creating the product. Please try again.");
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="centerDiv">
        <label htmlFor="fname">Name</label>
        <br />
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="fname"
          name="Name"
        />
        <br />
        <label htmlFor="fname">Category</label>
        <br />
        <input className="input" type="text" value={category} onChange={(e) => setCategory(e.target.value)} id="fname" name="category" />
        <br />
        <label htmlFor="fname">Price</label>
        <br />
        <input
          className="input"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          id="fname"
          name="Price"
        />
        <br />
        <br />
        <img
          alt="Preview"
          width="200px"
          height="200px"
          src={image ? URL.createObjectURL(image) : ''}
        />
        <br />
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
        />
        <br />
        <button onClick={handleSubmit} className="uploadBtn">
          Upload and Submit
        </button>
      </div>
    </Fragment>
  );
};

export default Create;

