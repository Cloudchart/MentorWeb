#!/usr/bin/env babel-node --optional es7.asyncFunctions

import fs from 'fs'
import path from 'path'
import Schema from './app/graphql/schema'
import { graphql } from 'graphql'
import { introspectionQuery, printSchema } from 'graphql/utilities'


async () => {
  let result = await (graphql(Schema, introspectionQuery))
  if (result.errors) {
    console.error('Error introspecting schema: ', JSON.stringify(result.errors, null, 2))
  } else {
    fs.writeFileSync(path.join(__dirname, './app/data/schema.json'), JSON.stringify(result, null, 2))
  }
}()


fs.writeFileSync(path.join(__dirname, './app/data/schema.graphql'), printSchema(Schema))
