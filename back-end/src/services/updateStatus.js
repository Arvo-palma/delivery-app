const { sale } = require('../database/models');

const statusList = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'];

const changeStatus = (status) => {
  const actualStatus = statusList.indexOf(status);

  return statusList[actualStatus + 1];
};

module.exports = async (id) => {
  try {
    const saleTarget = await sale.findOne({ where: { id } });

    const newStatus = changeStatus(saleTarget.status);

    const updatedStatus = await sale.update(
      {
        status: newStatus,
      },
      {
        where: {
          id,
        },
      },
    );

    return updatedStatus;
  } catch (error) {
    console.log(error);
    return false;
  }
};