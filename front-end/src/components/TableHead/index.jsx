import React from 'react';

const tableColumns = [
  'Item',
  'Descrição',
  'Quantidade',
  'Valor Unitário',
  'Sub-total',
  'Remover Item',
];

function TableHead() {
  return (
    <thead className="order-card-header">
      <tr>
        {
          tableColumns.map((title) => (
            <th key={ title }>
              {title}
            </th>
          ))
        }
      </tr>
    </thead>
  );
}

export default TableHead;
