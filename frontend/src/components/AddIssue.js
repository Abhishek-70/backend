import { Formik } from "formik"
import React from "react"
import Swal from "sweetalert2"

const AddIssue = () => {
  const userSubmit = async (formdata) => {
    console.log(formdata)

    const response = await fetch("http://localhost:5000/issue/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })

    // task B

    if (response.status === 200) {
      console.log("request sent successfully")
      Swal.fire({
        icon: "success",
        title: "Well Done",
        text: "Registered Successfully",
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Some error occurred",
      })
      console.log("some error occured")
    }
  }
  return (
    <div className="container">
      <h3 className="my-3 text-center">Register User</h3>

      <Formik initialValues={{ title: "", type: "", assignedBy: "", assignedTo: "", createdAt: new Date() }} onSubmit={userSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={values.title} id="title" onChange={handleChange} className="form-control mb-3" />

            <label>Type</label>
            <select value={values.email} id="email" onChange={handleChange} className="form-control mb-3 ">
              <option value="Error">Error</option>
              <option value="Bug">Bug</option>
              <option value="Duplicate">Duplicate</option>
              <option value="Enchancement">Enchancement</option>
              <option value="Question">Question</option>
              <option value="Wontfix">Wontfix</option>
            </select>

            <label>Assigned By</label>
            <input value={values.assignedBy} id="assignedBy" onChange={handleChange} className="form-control mb-3" />

            <label>Assigned To</label>
            <input value={values.assignedTo} id="assignedTo" onChange={handleChange} className="form-control mb-3" />

            <button type="submit" className="btn btn-primary mt-5">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default AddIssue;
