/** @type {import ("drizzle-kit").config} */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: `postgresql://neondb_owner:npg_ywkFezAV7Bm6@ep-tight-tree-a55kxf4q-pooler.us-east-2.aws.neon.tech/AI-Mock-Inteview?sslmode=require`,
    }
}