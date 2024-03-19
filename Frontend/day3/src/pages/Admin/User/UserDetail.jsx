import  { useState } from 'react';
import '../../../assets/Design/UserDetails.css';
import NavbarUser from '../../../components/UI/NavbarUser';
import Footer from '../../../components/UI/Footer';
import animation3 from '../../../assets/Animations/animation3.json';
import Lottie from 'lottie-react';
import thumbsup from '../../../assets/Animations/thumbsup.json';

const UserDetailsRegistration = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [submitted, setSubmitted] = useState(false); // Track whether form has been submitted

  const handleSubmit = (event) => {
    event.preventDefault();
    // Construct user data object
    const userData = {
      fullName,
      email,
      phoneNumber,
      address,
      city,
      country,
      postalCode
    };

    // Simulate form submission
    console.log('Submitting user data:', userData);

    // Set submitted state to true
    setSubmitted(true);

    // Reset form fields
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
    setCity('');
    setCountry('');
    setPostalCode('');

    // Optionally, you can perform further actions here, such as sending the data to your backend server
  };

  return (
    <div>
        <NavbarUser/>
    <div className="user-registration-container">
      <h2>User Details Registration</h2>
      {submitted ? (
        <p >Form submitted successfully! <Lottie animationData={thumbsup}></Lottie></p>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Postal Code:</label>
            <input type="text" id="postalCode" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
    <Lottie animationData={animation3} style={{position:'absolute',top:'15%',left:'50%',width:'700px',height:'700px'}}></Lottie>
   
    <Footer/>
    </div>
  );
};

export default UserDetailsRegistration;
