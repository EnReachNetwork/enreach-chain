#!/bin/bash

echo "Starting Enreach Chain Keeper Node"
# Initialize the node if this is a new node
if [ ! -f "/enreach-chain/config/priv_validator_key.json" ]; then
    # Generate random suffix for unique moniker name
    RAND_SUFFIX=$(shuf -i 100-999 -n 1)
    MONIKER="EnreachKeeperNode-${RAND_SUFFIX}"
    
    echo "Initializing new node with moniker: ${MONIKER}"
    /enreach-chain/enreachd init "${MONIKER}" --chain-id enreach --home /enreach-chain/
    
    # Override the config files with the ones from the config-default directory
    echo "Overriding config files"
    cp -f /enreach-chain/config-default/* /enreach-chain/config/
fi

# Launch the chain
exec /enreach-chain/enreachd start "$@" --home /enreach-chain/