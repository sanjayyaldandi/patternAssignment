#! /bin/bash

set -xe

./scripts/run_test.sh ./createRectangle.js ./appTestData/input/inputFileRectangle ./appTestData/output/outputFileRectangle
./scripts/run_test.sh ./createTriangle.js ./appTestData/input/inputFileTriangle ./appTestData/output/outputFileTriangle
./scripts/run_test.sh ./createDiamond.js ./appTestData/input/inputFileDiamond ./appTestData/output/outputFileDiamond
