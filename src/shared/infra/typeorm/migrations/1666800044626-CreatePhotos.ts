import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePhotos1666709782087 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'photos',
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "title",
                            type: "varchar"
                        },
                        {
                            name: "description",
                            type: "varchar"
                        },
                        {
                            name: "photo_file",
                            type: "varchar"
                        },
                        {
                            name: "user_id",
                            type: "uuid"
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "FKPhotoUser",
                            referencedTableName: "users",
                            referencedColumnNames: ["id"],
                            columnNames: ["user_id"],
                            onDelete: "SET NULL",
                            onUpdate: "SET NULL"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("photos");
    }

}
