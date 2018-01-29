#!/bin/bash

npm install

serverless deploy AWS_ENV $1
