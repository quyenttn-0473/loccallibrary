import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1721651710738 implements MigrationInterface {
    name = 'InitMigration1721651710738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`author\` CHANGE \`date_of_death\` \`date_of_death\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`book_instance\` CHANGE \`due_back\` \`due_back\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`summary\``);
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`summary\` varchar(6000) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`summary\``);
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`summary\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`book_instance\` CHANGE \`due_back\` \`due_back\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`author\` CHANGE \`date_of_death\` \`date_of_death\` date NULL DEFAULT 'NULL'`);
    }

}
