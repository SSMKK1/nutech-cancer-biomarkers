export default function UserTable() {
  return (
    <table className="dashboard-table">

      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Status</th>
          <th>Last Active</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Dr. Sharma</td>
          <td>Doctor</td>
          <td>Active</td>
          <td>Today</td>
        </tr>

        <tr>
          <td>Central Lab</td>
          <td>Laboratory</td>
          <td>Active</td>
          <td>Today</td>
        </tr>

        <tr>
          <td>John Smith</td>
          <td>Patient</td>
          <td>Active</td>
          <td>Yesterday</td>
        </tr>

      </tbody>

    </table>
  );
}
