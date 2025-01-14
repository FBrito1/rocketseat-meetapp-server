import Sequelize, { Model } from 'sequelize';

class Register extends Model {
  static init(sequelize) {
    super.init(
      {
        canceled_at: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Meetup, { foreignKey: 'meetup_id', as: 'meetup' });
  }
}

export default Register;
