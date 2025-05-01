import React from "react";
import AdminDetails from "../components/Homepage_Admin_Components/AdminDetails";
import JobPostForm from "../components/Homepage_Admin_Components/JobPostForm";
import Navbar_admin from "../components/Homepage_Admin_Components/Navbar_admin";
const Homepage_Admin = () => {
    return (
        <>
            <Navbar_admin/>
            <JobPostForm></JobPostForm>
            <AdminDetails></AdminDetails>

        </>
    )
}
export default Homepage_Admin;