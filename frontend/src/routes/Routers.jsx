import Home from '../pages/Home'
import Newhome from '../pages/newhome'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import  Doctors from '../pages/Doctors/Doctors'
import DoctorsDetails from '../pages/Doctors/DoctorDetails'
import AppointmentForm from '../pages/Appointment_form'
import MyAccount from '../../Dashboard/user-account/MyAccount'
import Dashboard from '../../Dashboard/doctor-account/Dashboard'
import ProtectedRoute from './ProtectedRoutes'

import {Routes, Route} from 'react-router-dom'
//import Dashboard from '../../Dashboard/doctor-account/Dashboard'
const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/newhome" element={<Newhome/>}/>
    <Route path="/appform" element={<AppointmentForm/>}/>
    <Route path="/doctors" element={<Doctors/>}/>
    <Route path="/doctors/:id" element={<DoctorsDetails/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Signup/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['patient']}><MyAccount/></ProtectedRoute>}/>
    <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={['doctor']}><Dashboard/></ProtectedRoute>}/>
  </Routes>
};

export default Routers