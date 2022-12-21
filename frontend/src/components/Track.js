import React, { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import "./track.css"

const Track = () => {
  const [issueList, setIssueList] = useState([])

  const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:5000/issue/getall")
    const data = await response.json()
    console.log(data)
    setIssueList(data)
  }

  useEffect(() => {
    getDataFromBackend()
  }, [])

  const showStatus = (status) => {
    if (status.toLowerCase() === "pending") return <p className="badge badge-pending">Pending</p>
    if (status.toLowerCase() === "solved") return <p className="badge badge-resolved">Resolved</p>
    if (status.toLowerCase() === "re-opened") return <p className="badge badge-reopened">Re-Opened</p>
  }

  const showType = (type) => {
    if (type.toLowerCase() === "bug") return <p className="badge badge-bug">Bug</p>
    if (type.toLowerCase() === "wontfix") return <p className="badge badge-fix">Won't Fix</p>
    if (type.toLowerCase() === "question") return <p className="badge badge-ques">Question</p>
    if (type.toLowerCase() === "duplicate") return <p className="badge badge-dup">Duplicate</p>
  }

  const displayData = () => {
    return (
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Assigned By</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Added On</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {issueList.map((issue) => (
            <tr>
              <td>{issue.title}</td>
              <td>{showType(issue.type)}</td>
              <td>{issue.assignedBy}</td>
              <td>{issue.assignedTo}</td>
              <td>{showStatus(issue.status)}</td>
              <td>{new Date(issue.createdAt).toLocaleDateString()}</td>
              <td>
                {!issue.resolved ? (
                  <button className="btn btn-success" onClick={(e) => updateStatus("solved", issue._id)}>
                    Resolve <i class="fas fa-check"></i>
                  </button>
                ) : issue.status === "re-opened" ? (
                  <button className="btn btn-success" onClick={(e) => updateStatus("solved", issue._id)}>
                    Resolve <i class="fas fa-check"></i>
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={(e) => updateStatus("re-opened", issue._id)}>
                    Re-Open <i class="fas fa-bug"></i>{" "}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  const updateStatus = async (newStatus, id) => {
    const res = await fetch("http://localhost:5000/issue/update/" + id, {
      method: "PUT",
      body: JSON.stringify({
        status: newStatus,
        resolved: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    console.log(res.status)
    if (res.status === 200) {
      newStatus==='solved'?
      toast.success("Issue Resolved")
      :
      toast.success("Issue Re-Opened")
      getDataFromBackend()
    }
  }

  return (
    <div>
      <header className="bg-dark">
        <div className="container text-center py-5">
          <p className="display-1 fw-bold text-white">Issue Tracker</p>
        </div>
      </header>
      <div className="container mt-5">{displayData()}</div>
    </div>
  )
}

export default Track
