export default function PatientTable() {
  return (
    <table className="dashboard-table">

      <thead>
        <tr>
          <th>Patient ID</th>
          <th>Name</th>
          <th>Risk Index</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>PT-1001</td>
          <td>John Smith</td>
          <td>0.18</td>
          <td>Low Risk</td>
        </tr>

        <tr>
          <td>PT-1002</td>
          <td>Michael Brown</td>
          <td>0.42</td>
          <td>Moderate Risk</td>
        </tr>

        <tr>
          <td>PT-1003</td>
          <td>David Wilson</td>
          <td>0.76</td>
          <td>High Risk</td>
        </tr>

      </tbody>

    </table>
  );
}
