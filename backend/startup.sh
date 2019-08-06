#!/bin/sh

sleep 3
knex --cwd ./database migrate:latest 
yarn dev