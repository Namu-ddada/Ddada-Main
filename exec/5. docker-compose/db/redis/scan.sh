#!/bin/bash

NODE_IP=127.0.0.1
PORT_1=7000
PORT_2=7002
PORT_3=7004

NODES=("$NODE_IP:$PORT_1" "$NODE_IP:$PORT_2" "$NODE_IP:$PORT_3")

for NODE in "${NODES[@]}"; do
    echo "Keys from $NODE:"
    redis-cli -h $(echo $NODE | cut -d: -f1) -p $(echo $NODE | cut -d: -f2) --scan --pattern '*'
done
