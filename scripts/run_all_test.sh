#! /bin/bash

set -xe

./scripts/run_test.sh ./src/createRectangle.js ./appTestData/input/inputFileRectangle ./appTestData/output/outputFileRectangle
./scripts/run_test.sh ./src/createTriangle.js ./appTestData/input/inputFileTriangle ./appTestData/output/outputFileTriangle
./scripts/run_test.sh ./src/createDiamond.js ./appTestData/input/inputFileDiamond ./appTestData/output/outputFileDiamond
