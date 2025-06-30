import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Footer from './FooterC';

const SignOut = () => {
   const navigate = useNavigate();

   const handleSignOut = () => {
      // Clear user data from localStorage
      localStorage.removeItem("user");
      alert("Successfully signed out!");
      // Redirect to home page
      navigate("/");
   };

   const handleCancel = () => {
      // Go back to previous page
      navigate(-1);
   };

   return (
      <>
         <Navbar bg="dark" variant="dark">
            <Container>
               <Navbar.Brand>ComplaintCare</Navbar.Brand>
               <ul className="navbar-nav">
                  <li className="nav-item mb-2">
                     <Link to={'/'} className="nav-link text-light">
                        Home
                     </Link>
                  </li>
               </ul>
            </Container>
         </Navbar>
         
         <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
               <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                     <div className="card bg-dark text-white">
                        <div className="card-body p-5 text-center">
                           <div className="mb-md-5 mt-md-4 pb-5">
                              <h2 className="fw-bold mb-4">Sign Out</h2>
                              <p className="text-white-50 mb-5">Are you sure you want to sign out?</p>
                              
                              <div className="d-flex justify-content-center gap-3">
                                 <Button 
                                    variant="outline-danger" 
                                    size="lg" 
                                    onClick={handleSignOut}
                                    className="px-4"
                                 >
                                    Yes, Sign Out
                                 </Button>
                                 <Button 
                                    variant="outline-secondary" 
                                    size="lg" 
                                    onClick={handleCancel}
                                    className="px-4"
                                 >
                                    Cancel
                                 </Button>
                              </div>
                           </div>
                           
                           <div>
                              <p className="mb-0">
                                 <Link to="/" className="text-white-50">Back to Home</Link>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <Footer/>
      </>
   );
};

export default SignOut; 