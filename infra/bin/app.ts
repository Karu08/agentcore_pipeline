#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { UiStack } from '../lib/ui-stack';

const app = new cdk.App();

new UiStack(app, 'UiStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});