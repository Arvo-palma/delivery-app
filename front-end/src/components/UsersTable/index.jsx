// vitals
import React from 'react';
import PropTypes from 'prop-types';

// styles
import UsersTableStyled from './styles';

// constants
const tableColumns = [
  'Item',
  'Nome',
  'E-mail',
  'Tipo',
  'Excluir',
];
const TEST_PREFIX = 'admin_manage__element-user-table-';
function UsersTable({ users, deleteUser }) {
  return (
    <UsersTableStyled>
      <span className="manage-users-title">Lista de usuários</span>
      <table className="manage-users-container" cellSpacing="0" cellPadding="0">
        <thead>
          <tr className="row-header">
            { tableColumns.map((column, index) => {
              const columnAdjust = column.toLowerCase().replace('-', '');
              return (
                <th
                  className={ `column-header-${columnAdjust} column-header` }
                  key={ index }
                >
                  {column}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          { users.length
            ? (users.map((user, index) => (
              <tr className="row-body" key={ user.id }>
                <td
                  className="column-item"
                  data-testid={ `${TEST_PREFIX}item-number-${index + 1}` }
                >
                  { index + 1 }
                </td>
                <td
                  className="column-name"
                  data-testid={ `${TEST_PREFIX}name-${index + 1}` }
                >
                  { user.name }
                </td>
                <td
                  className="column-email"
                  data-testid={ `${TEST_PREFIX}email-${index + 1}` }
                >
                  { user.email }
                </td>
                <td
                  className="column-role"
                  data-testid={ `${TEST_PREFIX}role-${index + 1}` }
                >
                  { user.role === 'customer' ? 'Cliente' : 'P. Vendedora' }
                </td>
                <td className="column-button">
                  <button
                    type="button"
                    name="delete"
                    className="delete-user"
                    value={ user.id }
                    data-testid={ `${TEST_PREFIX}remove-${index + 1}` }
                    onClick={ (e) => deleteUser(e) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))) : <> </> }
        </tbody>
      </table>
    </UsersTableStyled>
  );
}

UsersTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default UsersTable;
