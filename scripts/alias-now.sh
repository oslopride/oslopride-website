#!/bin/bash

if [ "${TRAVIS_BRANCH}" = "master" ]; then
	echo "${TRAVIS_BRANCH}";
	now alias set $NOW_DEPLOYMENT oslopride.now.sh --token=$NOW_TOKEN --team oslopride;
fi
