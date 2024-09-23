import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_POR || '3306'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: ['../models/*.ts'],
    migrations: ['./migrations/*.ts'],
    subscribers: ['./subscribers/*.ts']
});

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source succesfully initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err);
    });