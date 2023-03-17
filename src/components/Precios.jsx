import Table from 'react-bootstrap/Table';

function BasicExample() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Precio Base</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rolex</td>
          <td>Submariner</td>
          <td>$8,000,000</td>
        </tr>
        <tr>
          <td>Omega</td>
          <td>Seamaster</td>
          <td>$2,000,000</td>
        </tr>
        <tr>
          <td>Tag Heuer</td>
          <td>Carrera</td>
          <td>$1,500,000</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;