import type { NextApiRequest, NextApiResponse } from 'next'

const { Client } = require('@notionhq/client');


const notion = new Client({ auth: process.env.NOTION_API_KEY });


export default async function lista () {

  const response = await notion.NOTION_DATABASE_ID.list();

  console.log(response);

};