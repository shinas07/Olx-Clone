import React, {useEffect, useContext, useState} from 'react';
import MinImg from '../../../assets/images/Min.jpg'
import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/Context';
import { getFirestore,collection, getDocs } from 'firebase/firestore';
import { PostContext } from '../../store/PostContext';
import { useNavigate } from 'react-router-dom';

function Posts() {
  // const { db } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);
  const db = getFirestore()
  const navigate = useNavigate()
  const {setPostDetails} = useContext(PostContext)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Ensure 'db' is passed correctly and 'products' collection is accessed
        const querySnapshot = await getDocs(collection(db, 'products'));
        const allPost = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // console.log(allPost);
        setProducts(allPost);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [db]);


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

        {products.map(product => (
  <div key={product.id} className="card" onClick={() =>{
    setPostDetails(product)
    if (product){
    navigate(`/view?id=${product.name}`);
    }
  }}>
    <div className="favorite">
      <Heart />
    </div>
    <div className="image">
      <img src={product.imageUrl} alt="" />
    </div>
    <div className="content">
      <p className="rate">&#x20B9; {product.price}</p>
      <span className="kilometer">{product.category}</span>
      <p className="name">{product.name}</p>
    </div>
    <div className="date">
      <span>{product.createdAt}</span>
    </div>
  </div>
))}

        </div>

      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={MinImg} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
