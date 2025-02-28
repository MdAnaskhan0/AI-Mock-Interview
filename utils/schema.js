import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const mockInterview = pgTable('mockinterview', {
    id: serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPossition: varchar('jobPossition', { length: 255 }).notNull(),
    jobDesc: varchar('jobDesc', { length: 255 }).notNull(),
    jobExperience: varchar('jobExperience', { length: 255 }).notNull(),
    createBy: varchar('createBy', { length: 255 }).notNull(),
    createdAt: varchar('createdAt', { length: 255 }),
    mocId: varchar('mocId', { length: 255 }).notNull(),
});
