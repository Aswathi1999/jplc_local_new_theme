import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1716000000000 implements MigrationInterface {
  public async up(_queryRunner: QueryRunner): Promise<void> {
    // Initial migration — concrete table definitions follow in subsequent migrations
  }

  public async down(_queryRunner: QueryRunner): Promise<void> {
    // No-op
  }
}
