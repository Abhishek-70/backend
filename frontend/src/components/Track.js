import React, { useEffect, useState } from "react"

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
              <td>{issue.type}</td>
              <td>{issue.assignedBy}</td>
              <td>{issue.assignedTo}</td>
              <td>{issue.status}</td>
              <td>{new Date(issue.createdAt).toLocaleDateString()}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    )
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
