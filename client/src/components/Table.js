import React from "react";

function Table() {
  return (
    <div className="container-fluid">
      <div container="row">
        <div container="col">
          <table class="table table-striped">
            <thead>
              <td>#</td>
              <td>class</td>
              <td>time</td>
            </thead>
            <tbody>
              <tr class="table-active">
                <td>1</td>
                <td>yoga</td>
                <td>5pm</td>
              </tr>
              <tr>
                <td>2</td>
                <td>yoga</td>
                <td>6pm</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2" class="table-active">
                  Larry the Bird
                </td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
