#!/bin/bash

cd build
for file in *; do
    echo "Uploading ${file} ..."

    container="${file%.*}"

    aws lambda get-function --function-name ${container} > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        aws lambda publish-versionq \
            --function-name ${container}
    else
        aws lambda create-function \
            --function-name ${container} \
            --zip-file fileb://${file} \
            --runtime nodejs8.10 \
            --handler handler.handle \
            --role arn:aws:iam::593664064329:role/service-role/ResolverRole
    fi
done
