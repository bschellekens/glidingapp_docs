#!/usr/bin/env sh

# stop on error
set -e

#### Deploys to S3 bucket

# Mimicks pipeline on Gitlab
# run as: bash ops/deploy_frontend.sh

# from .envrc direnv
export AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
export AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}

# Variables
export S3_BUCKET_NAME='glidingapp-docs'
export CDN_DISTRIBUTION_ID='E1GC4VWC2Q2UAR' # is unique for cloudfront

# ===== BUILD
echo " "
echo "--- $(date) - starting build"


npm run build


# ===== DEPLOY

# push to bucket
# TODO: only delete old files
# aws s3 rm s3://${S3_BUCKET_NAME} --recursive

aws s3 cp docs/.vitepress/dist s3://${S3_BUCKET_NAME}/ --recursive --include '*'

# Upload all naked files (no extension, not .html) with Content-Type text/html
find docs/.vitepress/dist -type f -name '*.html' | while read htmlfile; do
  nakedfile="${htmlfile%.html}"
  if [ ! -e "$nakedfile" ]; then
    cp "$htmlfile" "$nakedfile"
    aws s3 cp "$nakedfile" "s3://${S3_BUCKET_NAME}/${nakedfile#docs/.vitepress/dist/}" --content-type text/html
  fi
done


# invalidate the cloudfront object
aws cloudfront create-invalidation --distribution-id ${CDN_DISTRIBUTION_ID} --paths "/*"

echo " "
echo "--- $(date) - DONE"