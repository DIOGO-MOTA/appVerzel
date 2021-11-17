import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateCars1635774092976 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cars',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'brand',
                        type: 'varchar',
                    },
                    {
                        name: 'model',
                        type: 'varchar',
                        
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        
                    },
                    {
                        name: 'price',
                        type: 'numeric',
            
                    },
                    {
                        name: 'year',
                        type: 'numeric',
                    },
                    {
                        name: 'mileage',
                        type: 'varchar',
                    },
                    {
                        name: 'traction',
                        type: 'varchar',
                    },
                    {
                        name: 'fuel',
                        type: 'varchar'
                    },
                    {
                        name: 'streaming',
                        type: 'varchar',
                    },
                    {
                        name: 'port',
                        type: 'varchar',
                    },
                    {
                        name: 'direction',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cars');
    }

}
