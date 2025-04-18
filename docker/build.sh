#!/bin/bash

# Goto the project root directory
cd "$(dirname "$0")/.."

# Read version number
VERSION=$(cat VERSION)

# Supported architectures
ARCH_LIST=("arm64" "amd64")

# Clean old build artifacts
rm -rf ./docker/build
mkdir -p ./docker/build

for ARCH in "${ARCH_LIST[@]}"; do
    echo "Building for architecture: ${ARCH}"
    
    BUILD_DIR="./docker/build/${ARCH}"
    # Build with ignite
    ignite chain build --config config.release.yml --release -t linux:${ARCH} -o ${BUILD_DIR} --clear-cache
    ignite chain init --config config.release.yml --clear-cache
    
    echo "Build complete, extract binary and copy configs"
    # Extract the binary
    tar -xvf ${BUILD_DIR}/enreach_linux_${ARCH}.tar.gz -C ${BUILD_DIR}

    # Copy the config
    mkdir -p ${BUILD_DIR}/config
    cp ~/.enreach/config/app.toml ${BUILD_DIR}/config/
    cp ~/.enreach/config/client.toml ${BUILD_DIR}/config/
    cp ~/.enreach/config/config.toml ${BUILD_DIR}/config/
    cp ~/.enreach/config/genesis.json ${BUILD_DIR}/config/

    echo "Build docker images for ${ARCH}"
    # Build the docker image
    docker buildx build -f docker/Dockerfile \
        --platform linux/${ARCH} \
        --build-arg ARCH=${ARCH} \
        -t enreach/enreach-chain:${VERSION}-${ARCH} \
        .
done