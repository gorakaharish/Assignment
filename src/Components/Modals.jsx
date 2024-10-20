import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Usercontext from '../context/Usercontext';
import { Link, useNavigate } from 'react-router-dom';
import img from '../assets/img11.png'
import img1 from '../assets/img12.png'

const Modals = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data } = useContext(Usercontext);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div>
      <Button variant="" onClick={handleShow}>
        
      </Button>

      <Modal show={show} onHide={handleClose} className='model'>
        <Modal.Header closeButton  className='d-flex flex-column justify-content-center' onClick={() => navigate('/')}>
          <Modal.Title  className='d-flex flex-column justify-content-center'>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body  className='text-center'>
          <p className='model_para'>Congratulations <br />Order Placed!</p>
          <div>
            <img src={data.images} alt="" className='w-25' height={115} />
          </div>
          <p className='model_dec'>{data.descreption}</p>
        </Modal.Body>
        <Modal.Footer  className='d-flex flex-column justify-content-center'>
          <div className="d-flex justify-content-center w-100">
            <Link to="/">
              <Button className='model-btn' onClick={handleClose}>
                Continue Shopping
              </Button>
            </Link>
          </div>
        </Modal.Footer>
        <img src={img} alt="" className='img_model_1'/>
        <img src={img1} alt="" className='img_model_2'/>
      </Modal>
    </div>
  );
};

export default Modals;
