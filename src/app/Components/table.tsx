import React from "react";

interface TableProps {
  columns: Array<{ header: string; accessor: string }>;
  data: Array<any>;
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

const Table: React.FC<TableProps> = ({ columns, data, onUpdate, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            {columns.map((column) => (
              <th key={column.accessor}>{column.header}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
                <td></td>
              {columns.map((column) => (
                <td key={column.accessor}>{row[column.accessor]  ?? ""}</td>
              ))}
              <td>
                <button onClick={() => onUpdate(row)}>Update</button>
                <button onClick={() => onDelete(row._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
