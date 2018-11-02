#!/bin/bash

# Checking that aws-cli is installed
which aws > /dev/null 2>&1
if [ ! $? -eq 0 ]; then
  echo "You need aws-cli to deploy this lambda."
  exit 1
fi

mkdir build

# Searching for resolvers files
cd containers
for container in *; do
    if [ ! -f "${container}/resolvers.js" ]; then
        continue
    fi

    echo "Resolvers found for ${container}"
    cd ${container}

    cp ../../deploy/handler.js ./handler.js
    zip resolvers.zip handler.js resolvers.js

    aws lambda get-function --function-name ${container} > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        aws lambda update-function-code \
            --function-name ${container} \
            --zip-file fileb://resolvers.zip \
            --dry-run > /dev/null
    else
        aws lambda create-function \
            --function-name ${container} \
            --zip-file fileb://resolvers.zip \
            --runtime nodejs8.10 \
            --handler handler.handle \
            --role arn:aws:iam::593664064329:role/service-role/ResolverRole \
            --publish false > /dev/null
    fi

    if [ $? -ne 0 ]; then
        exit 1
    fi;

    rm handler.js
    mv resolvers.zip ../../build/${container}.zip
    cd ..
done
