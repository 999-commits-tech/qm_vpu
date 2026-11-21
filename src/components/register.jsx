import  {  useState } from 'react';
import './style/register.css';
import logo from "./assets/vpu.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Reg = () => {
  
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("Student");

  async function save(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/home/register", {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        gender: gender,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        role: role,
      });

      // Save user's name to local storage
      localStorage.setItem('userName', firstName);

      alert("Registration Successful");
      navigate('/login');  // Navigate to home page or any other page you want
      return response;
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className='page'>
      <div className='logoin'>
        <img onClick={() => navigate('/login')} src={logo} alt="React Logo" />
      </div><br /><br /><br />
      <div className='box'>
        <title>Register</title>
        <div className="sign" >
          <p>Register to VprepU.</p>
          <p onClick={() => navigate('/login')}><u>Have an account?</u></p>
        </div>
        <div className="sp">
          <form className="signup-form">
            <div className="label"> <p>Password</p> <p style={{ color: 'red' }}>*</p></div>
            <input type="text" id="firstName" placeholder="enter your first name(No spaces)" required=""
              value={firstName} onChange={(event) => { setFirstName(event.target.value); }}   />

            <div className="label"> <p>Password</p> <p style={{ color: 'red' }}>*</p></div>
            <input type="text" id="lastName" placeholder="enter your Last name(No spaces)" required=""
              value={lastName} onChange={(event) => { setLastName(event.target.value); }} />

            <div className="label"> <p>Date of Birth</p> <p style={{ color: 'red' }}>*</p></div>
            <input type="Date" id="date" placeholder="enter your date of birth" required=""
              value={dob} onChange={(event) => { setDob(event.target.value); }} />
              
            <div className="label"> <p>Gender</p> <p style={{ color: 'red' }}>*</p></div>
            <select id="gender" name="gender"
              value={gender} onChange={(event) => { setGender(event.target.value); console.log(event.target.value); }}
              >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <br /><br />
          </form>
          <form className="signup-form1">
            <div className="label"> <p>Email</p> <p style={{ color: 'red' }}>*</p></div>
            <input type="email" id="email" placeholder="enter your mail id" required=""
              value={email} onChange={(event) => { setEmail(event.target.value); }} />

            <div className="label"> <p>Password</p> <p style={{ color: 'red' }}>*</p></div>
            <input type="password" id="password" placeholder="enter your password" required=""
              value={password} onChange={(event) => { setPassword(event.target.value); }} />

            <div className="label"> <p>Phone </p> <p style={{ color: 'red' }}>*</p></div>
            <input type="tel" id="number" placeholder="enter your Mobile no" required=""
              value={phoneNumber} onChange={(event) => { setPhoneNumber(event.target.value); }} />

            <div className="label"> <p>Role</p> <p style={{ color: 'red' }}>*</p></div>
            <select id="Student" name="Student"
              value={role} onChange={(event) => { setRole(event.target.value); console.log(event.target.value); }}
              >
              <option value="Student">Student</option>
              <option value="Fresher">Fresher</option>
              <option value="Experienced">Experienced</option>
            </select>
            <br /><br />
          </form>
        </div>
        <div className='lbt1'>
            <button type='submit' onClick={save}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Reg;
