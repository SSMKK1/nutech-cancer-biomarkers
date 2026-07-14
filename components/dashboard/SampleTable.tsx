export default function SampleTable() {
  return (
    <table className="dashboard-table">

      <thead>
        <tr>
          <th>Sample ID</th>
          <th>Patient</th>
          <th>Status</th>
          <th>Received</th>
          <th>Expected Completion</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>SM-201</td>
          <td>John Smith</td>
          <td>Processing</td>
          <td>08:00</td>
          <td>16:00</td>
        </tr>

        <tr>
          <td>SM-202</td>
          <td>Michael Brown</td>
          <td>Completed</td>
          <td>09:15</td>
          <td>15:00</td>
        </tr>

        <tr>
          <td>SM-203</td>
          <td>David Wilson</td>
          <td>Pending</td>
          <td>10:30</td>
          <td>18:00</td>
        </tr>

      </tbody>

    </table>
  );
}
