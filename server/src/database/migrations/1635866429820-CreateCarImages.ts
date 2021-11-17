import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class CreateCarImages1635866429820 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('cars', new TableColumn({
          name: 'imageCar',
          type: 'varchar',
          isNullable: true,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('cars', 'imageCar');
    }

}
