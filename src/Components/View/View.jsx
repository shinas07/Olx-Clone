import React, {useEffect, useState, useContext } from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
import { useSearchParams } from 'react-router-dom';
import { collection, getDocs, query, where } from '@firebase/firestore';
import { db } from '../../firebase/config';
function View() {
  const [userDetails, setUserDetails] = useState()
  const {firebase} = useContext(FirebaseContext)
  const { postDetails } = useContext(PostContext);
 const  [searchParams, setSearchParams]  =  useSearchParams()
const prodcutId =  searchParams.get("id")
  useEffect(() => {
    console.log("h", prodcutId);
    if (prodcutId) {
      const q = query(collection(db, "products"), where("name", "==", prodcutId));

      getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log("Document data:", doc.data());
          setUserDetails(doc.data());

        });
      });
    }
  }, [postDetails]);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails?.imageUrl || '../../../Images/R15V3.jpg'} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails?.price || 'N/A'}</p>
          <span>{postDetails?.name || 'N/A'}</span>
          <p>{postDetails?.category || 'N/A'}</p>
          <span>{postDetails?.createdAt || 'N/A'}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails?.username || 'No name'}</p>
          <p>{userDetails?.phone || '1234567890'}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
