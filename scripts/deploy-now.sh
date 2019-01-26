#!/bin/bash

export NOW_DEPLOYMENT=$(now --token=$NOW_TOKEN --team oslopride --no-clipboard)
echo $NOW_DEPLOYMENT
